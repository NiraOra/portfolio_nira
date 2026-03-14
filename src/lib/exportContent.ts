import { portfolioContent } from './contentSearch.ts';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

writeFileSync(
  join(__dirname, '../embeddings/content.json'),
  JSON.stringify(portfolioContent, null, 2)
);

console.log('Exported portfolioContent to content.json');
