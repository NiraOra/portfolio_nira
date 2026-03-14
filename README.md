# Nira's portfolio

Frontend is created usin gReact (Typescript) and Tailwind CSS

For search based methodology, a sentence-transformers model from huggingface was used for creatibg query embeddings ("paraphrase-MiniLM-L6-v2").
Do the following to get embeddings (if you choose to run these commands again, since the resulting json files live as ``src/embeddings/*.json`` files):
- npx ts-node src/lib/exportContent.ts
- (activate venv and ``pip install sentence-transformers json`` if you have not set the environment already)
- python3 src/embeddings/create_embed.py


> ***Note***: Particles mesh background from https://vincentgarreau.com/particles.js/