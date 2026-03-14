
import { useState } from 'react';
import { searchEngine } from '../lib/engineSearch';
import { type SearchResult } from '../lib/searchTypes';

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query: string, queryEmbedding: number[]) => {
    setIsLoading(true);
    try {
      const res = await searchEngine.search(query, queryEmbedding);
      setResults(res);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { search, results, isLoading };
};