from sentence_transformers import SentenceTransformer
import json

# --------------------------
# Step 1: Load portfolio content from content.json
# --------------------------
with open("content.json", "r") as f:
    portfolio_content = json.load(f)

# --------------------------
# Step 2: Load embedding model
# --------------------------
model_name = "paraphrase-MiniLM-L6-v2"
model = SentenceTransformer(model_name)

# --------------------------
# Step 3: Create combined text for embedding
# --------------------------
combined_texts = [
    item["title"] + " " + item["text"] + " " + " ".join(item["tags"])
    for item in portfolio_content
]

# --------------------------
# Step 4: Batch encode with normalization
# --------------------------
embeddings_list = model.encode(
    combined_texts,
    batch_size=16,
    normalize_embeddings=True  
)

# --------------------------
# Step 5: Map embeddings to portfolio IDs
# --------------------------
embeddings = {item["id"]: emb.tolist() for item, emb in zip(portfolio_content, embeddings_list)}

# --------------------------
# Step 6: Save to JSON
# --------------------------
with open("embeddings.json", "w") as f:
    json.dump(embeddings, f, indent=2)

print(f"Saved embeddings for {len(embeddings)} portfolio items to embeddings.json")