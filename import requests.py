import json
import firebase_admin
from firebase_admin import credentials, firestore

# Firebase init
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# JSON load करें
with open("stones_data.json", "r", encoding="utf-8") as f:
    products = json.load(f)

# Batch upload
batch = db.batch()
count = 0

for p in products:
    doc_ref = db.collection("products").document()
    batch.set(doc_ref, p)
    count += 1
    
    # Firestore batch limit = 500
    if count % 500 == 0:
        batch.commit()
        batch = db.batch()
        print(f"✅ {count} products uploaded")

# बचे हुए commit करें
batch.commit()
print(f"🎉 Done! {count} products uploaded")