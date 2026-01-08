export interface SearchableContent {
  id: string;
  section: 'about' | 'experience' | 'projects' | 'publications';
  title: string;
  text: string;
  element: string;
  weight: number; 
  tags: string[];
}


export interface SearchResult {
  content: SearchableContent;
  score: number;
  matchType: 'exact' | 'semantic' | 'tag';
}
