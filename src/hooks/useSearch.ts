import { useState, useEffect } from 'react';
import { searchEngine } from '../lib/engineSearch';
import { type SearchResult } from '../lib/searchTypes';

export const useSearch = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    const initEngine = async () => {
      try {
        await searchEngine.initialize();
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize search engine:', error);
      }
    };
    
    initEngine();
  }, []);
  
  const search = async (query: string) => {
    if (!isInitialized) return;
    
    setIsLoading(true);
    try {
      const results = await searchEngine.search(query);
      setResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { search, results, isLoading, isInitialized };
};