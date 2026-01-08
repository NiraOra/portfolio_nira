import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';

export const SearchBar = () => {
  const { search, results, isLoading, isInitialized } = useSearch();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      search(value);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleResultClick = (element: string) => {
    const el = document.getElementById(element);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setQuery('');
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  if (!isInitialized) {
    return null; 
  }

  return (
    <div ref={searchRef} className="relative w-full md:w-80">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Search portfolio... (try 'healthcare AI')"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 bg-secondary rounded-lg border border-border text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          disabled={isLoading}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (query || isLoading) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg border border-border shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {isLoading && (
              <div className="p-4 text-center text-sm text-muted-foreground">
                <div className="inline-block animate-spin">⚙️</div> Searching...
              </div>
            )}

            {!isLoading && results.length === 0 && query && (
              <div className="p-4 text-sm text-muted-foreground text-center">
                No results found for "{query}"
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="divide-y divide-border">
                {results.map((result) => (
                  <motion.button
                    key={result.content.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => handleResultClick(result.content.element)}
                    className="w-full text-left p-3 hover:bg-secondary transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                          {result.content.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {result.content.text.substring(0, 80)}...
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="text-xs font-medium text-primary">
                          {result.content.section}
                        </span>
                        <div className="text-xs text-muted-foreground mt-1">
                          {(result.score * 100).toFixed(0)}%
                        </div>
                      </div>
                    </div>
                    {result.content.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {result.content.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                        {result.content.tags.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{result.content.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            )}

            {!isLoading && query && results.length > 0 && (
              <div className="p-2 text-xs text-center text-muted-foreground border-t border-border">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
