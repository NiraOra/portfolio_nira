import { portfolioContent } from './contentSearch';
import { type SearchResult } from './searchTypes';

class PortfolioSearchEngine {
  private model: any = null;
  private isInitialized = false;
  private isInitializing = false;
  private useTransformers = false;

  async initialize(): Promise<void> {
    if (this.isInitialized || this.isInitializing) return;
    
    this.isInitializing = true;
    
    try {
      try {
        const { pipeline } = await import('@xenova/transformers');
        console.log('Loading NLP model...');
        
        this.model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
          quantized: true, 
        });
        
        this.useTransformers = true;
        console.log('transformers.js loaded successfully');
      } catch (e) {
        console.warn('Transformers.js not available, using keyword matching');
        this.useTransformers = false;
      }
      
      this.isInitialized = true;
      this.isInitializing = false;
      
      console.log('Search engine initialized!');
    } catch (error) {
      this.isInitializing = false;
      console.error('Failed to initialize search engine:', error);
      this.isInitialized = true;
    }
  }

  private async createEmbeddings(texts: string[]): Promise<number[][]> {
    if (!this.model) return [];
    
    const embeddings: number[][] = [];
    
    for (const text of texts) {
      try {
        const output = await this.model(text, { pooling: 'mean', normalize: true });
        embeddings.push(Array.from(output.data));
      } catch (error) {
        console.warn('Embedding failed for:', text);
        embeddings.push([]);
      }
    }
    
    return embeddings;
  }

  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length === 0 || b.length === 0) return 0;
    
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    
    if (magnitudeA === 0 || magnitudeB === 0) return 0;
    return dotProduct / (magnitudeA * magnitudeB);
  }

  private calculateKeywordScore(query: string, text: string): number {
    const lowerQuery = query.toLowerCase();
    const lowerText = text.toLowerCase();
    
    const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 2);
    const textWords = lowerText.split(/\s+/);
    
    if (queryWords.length === 0) return 0;
    
    let score = 0;
    
    queryWords.forEach(word => {
      if (textWords.includes(word)) {
        score += 1.0;
      }
      else if (lowerText.includes(word)) {
        score += 0.6;
      }
      else {
        for (const textWord of textWords) {
          if (textWord.includes(word) || word.includes(textWord)) {
            score += 0.3;
            break;
          }
        }
      }
    });
    
    return Math.min(score / queryWords.length, 1.0);
  }

  async search(query: string, threshold: number = 0.3): Promise<SearchResult[]> {
    if (!query.trim()) return [];
    
    if (!this.isInitialized) {
      await this.initialize();
    }

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    const exactMatches = new Set<string>();
    portfolioContent.forEach(item => {
      const text = item.text.toLowerCase();
      const title = item.title.toLowerCase();
      if (text.includes(lowerQuery) || title.includes(lowerQuery)) {
        results.push({
          content: item,
          score: 1.0,
          matchType: 'exact'
        });
        exactMatches.add(item.id);
      }
    });

    const tagMatches = new Set<string>();
    portfolioContent.forEach(item => {
      if (!exactMatches.has(item.id)) {
        if (item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
          results.push({
            content: item,
            score: 0.9,
            matchType: 'tag'
          });
          tagMatches.add(item.id);
        }
      }
    });

    portfolioContent.forEach(item => {
      if (!exactMatches.has(item.id) && !tagMatches.has(item.id)) {
        const keywordScore = this.calculateKeywordScore(query, item.text);
        if (keywordScore >= threshold) {
          results.push({
            content: item,
            score: keywordScore,
            matchType: 'semantic'
          });
        }
      }
    });

    if (this.useTransformers && this.model) {
      try {
        const queryEmbedding = await this.createEmbeddings([query]);
        if (queryEmbedding[0]?.length > 0) {
          const foundIds = new Set([...exactMatches, ...tagMatches]);
          
          for (const item of portfolioContent) {
            if (!foundIds.has(item.id)) {
              const itemEmbedding = await this.createEmbeddings([item.text]);
              if (itemEmbedding[0]?.length > 0) {
                const similarity = this.cosineSimilarity(queryEmbedding[0], itemEmbedding[0]);
                if (similarity >= threshold) {
                  results.push({
                    content: item,
                    score: similarity,
                    matchType: 'semantic'
                  });
                }
              }
            }
          }
        }
      } catch (error) {
        console.warn('Transformer search failed, using keyword matching only');
      }
    }

    const uniqueResults = new Map<string, SearchResult>();
    results.forEach(result => {
      const key = result.content.id;
      if (!uniqueResults.has(key) || result.score > uniqueResults.get(key)!.score) {
        uniqueResults.set(key, result);
      }
    });

    return Array.from(uniqueResults.values())
      .map(result => ({
        ...result,
        score: result.score * (result.content.weight / 10) 
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); 
  }

  getSuggestions(): string[] {
    return [
      'machine learning',
      'healthcare AI',
      'NLP research', 
      'computer vision',
      'hackathon projects',
      'thesis work',
      'python projects',
      'data science',
      'research papers',
      'AI applications'
    ];
  }

  isReady(): boolean {
    return this.isInitialized;
  }

  isLoading(): boolean {
    return this.isInitializing;
  }
}

export const searchEngine = new PortfolioSearchEngine();
export type { SearchResult };