import { pipeline, cos_sim } from '@xenova/transformers';
import { portfolioContent } from './contentSearch';
import { type SearchResult } from './searchTypes';

class PortfolioSearchEngine {
  private model: any = null;
  private contentEmbeddings: number[][] = [];
  private isInitialized = false;
  private isInitializing = false;

  async initialize(): Promise<void> {
    if (this.isInitialized || this.isInitializing) return;
    
    this.isInitializing = true;
    
    try {
      console.log('Loaded NLP model...');
      
      this.model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
        quantized: false, 
      });
      
      console.log('Creating content embeddings...');
      
      const contentTexts = portfolioContent.map(item => item.text);
      this.contentEmbeddings = await this.createEmbeddings(contentTexts);
      
      this.isInitialized = true;
      this.isInitializing = false;
      
      console.log('Search engine initialized!');
    } catch (error) {
      this.isInitializing = false;
      console.error('Failed to initialize search engine:', error);
      throw error;
    }
  }

  private async createEmbeddings(texts: string[]): Promise<number[][]> {
    const embeddings: number[][] = [];
    
    for (const text of texts) {
      const output = await this.model(text, { pooling: 'mean', normalize: true });
      embeddings.push(Array.from(output.data));
    }
    
    return embeddings;
  }

  async search(query: string, threshold: number = 0.3): Promise<SearchResult[]> {
    if (!query.trim()) return [];
    
    if (!this.isInitialized) {
      await this.initialize();
    }

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    const exactMatches = portfolioContent.filter(item => {
      const text = item.text.toLowerCase();
      const title = item.title.toLowerCase();
      return text.includes(lowerQuery) || title.includes(lowerQuery);
    });

    exactMatches.forEach(item => {
      results.push({
        content: item,
        score: 1.0,
        matchType: 'exact'
      });
    });

    const tagMatches = portfolioContent.filter(item => 
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) &&
      !exactMatches.includes(item)
    );

    tagMatches.forEach(item => {
      results.push({
        content: item,
        score: 0.9,
        matchType: 'tag'
      });
    });

    try {
      console.log('🔍 Performing semantic search...');
      
      const queryEmbedding = await this.createEmbeddings([query]);
      const similarities: number[] = [];

      for (let i = 0; i < this.contentEmbeddings.length; i++) {
        const similarity = cos_sim(queryEmbedding[0], this.contentEmbeddings[i]);
        similarities.push(similarity);
      }

      const foundIds = new Set([...exactMatches, ...tagMatches].map(item => item.id));
      
      similarities.forEach((similarity, index) => {
        const item = portfolioContent[index];
        if (similarity >= threshold && !foundIds.has(item.id)) {
          results.push({
            content: item,
            score: similarity,
            matchType: 'semantic'
          });
        }
      });

    } catch (error) {
      console.error('Semantic search failed:', error);
    }

    return results
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