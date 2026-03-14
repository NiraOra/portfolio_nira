import { portfolioContent } from './contentSearch';
import { type SearchResult } from './searchTypes';
import embeddingsData from '../embeddings/embeddings.json'; 

type EmbeddingsMap = Record<string, number[]>;


class PortfolioSearchEngine {
  private contentEmbeddings: EmbeddingsMap = embeddingsData as EmbeddingsMap;

  private cosineSimilarity(a: number[], b: number[]): number {
    if (!a.length || !b.length) return 0;
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return magA && magB ? dot / (magA * magB) : 0;
  }

  private calculateKeywordScore(query: string, text: string): number {
    const qWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const tWords = text.toLowerCase().split(/\s+/);
    if (!qWords.length) return 0;
    let score = 0;
    qWords.forEach(w => {
      if (tWords.includes(w)) score += 1;
      else if (text.toLowerCase().includes(w)) score += 0.6;
      else if (tWords.some(t => t.includes(w) || w.includes(t))) score += 0.3;
    });
    return Math.min(score / qWords.length, 1.0);
  }

  async search(query: string, queryEmbedding: number[], threshold = 0.3): Promise<SearchResult[]> {
    if (!query.trim()) return [];

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();
    const exactMatches = new Set<string>();
    const tagMatches = new Set<string>();

    portfolioContent.forEach(item => {
      const section = item.section as 'about' | 'experience' | 'projects' | 'publications';
      const fixedItem = { ...item, section };
      const titleText = `${item.title} ${item.text}`.toLowerCase();
      if (titleText.includes(lowerQuery)) {
        results.push({ content: fixedItem, score: 1, matchType: 'exact' });
        exactMatches.add(item.id);
      } else if (item.tags.some(t => t.toLowerCase().includes(lowerQuery))) {
        results.push({ content: fixedItem, score: 0.9, matchType: 'tag' });
        tagMatches.add(item.id);
      }
    });

    portfolioContent.forEach(item => {
      if (!exactMatches.has(item.id) && !tagMatches.has(item.id)) {
        const section = item.section as 'about' | 'experience' | 'projects' | 'publications';
        const fixedItem = { ...item, section };
        const score = this.calculateKeywordScore(query, item.text);
        if (score >= threshold) results.push({ content: fixedItem, score, matchType: 'semantic' });
      }
    });

    if (queryEmbedding.length) {
      portfolioContent.forEach(item => {
        if (!exactMatches.has(item.id) && !tagMatches.has(item.id)) {
          const section = item.section as 'about' | 'experience' | 'projects' | 'publications';
          const fixedItem = { ...item, section };
          const itemEmb = this.contentEmbeddings[item.id] || [];
          const sim = this.cosineSimilarity(queryEmbedding, itemEmb);
          if (sim >= threshold) {
            results.push({ content: fixedItem, score: sim, matchType: 'semantic' });
          }
        }
      });
    }

    const unique = new Map<string, SearchResult>();
    results.forEach(r => {
      const existing = unique.get(r.content.id);
      if (!existing || r.score > existing.score) unique.set(r.content.id, r);
    });

    return Array.from(unique.values())
      .map(r => ({ ...r, score: r.score * (r.content.weight / 10) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }

  getSuggestions(): string[] {
    return [
      'machine learning', 'healthcare AI', 'NLP research',
      'computer vision', 'hackathon projects', 'thesis work',
      'python projects', 'data science', 'research papers', 'AI applications'
    ];
  }

  isReady(): boolean { return true; }
  isLoading(): boolean { return false; }
}

export const searchEngine = new PortfolioSearchEngine();
export type { SearchResult };