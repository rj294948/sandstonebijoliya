<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Rajasthan SandStone Hub - Live Products</title>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
<style>
  body { font-family: 'Poppins', sans-serif; background:#f9f9f9; }
  header { background:#c45e00; color:#fff; padding:14px; text-align:center; font-weight:700; }
  .card-img { height:200px; object-fit:cover; border-radius:0.5rem; }
  .field-title { color:#c45e00; font-weight:700; }
  .btn { padding:6px 10px; border-radius:6px; cursor:pointer; }
  .btn-edit { background:#2563eb; color:#fff; }
  .btn-delete { background:#ef4444; color:#fff; }
  .btn-add { background:#16a34a; color:#fff; }
  .modal-bg { background: rgba(0,0,0,0.5); position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:50; }
  .modal { background:#fff; padding:16px; border-radius:8px; width:350px; max-width:90%; }
</style>
</head>
<body>

<header>🪨 Rajasthan SandStone Hub - Live Products</header>

<div class="max-w-6xl mx-auto px-4 py-4">
  <!-- Add Button -->
  <div class="flex justify-end mb-3">
    <button id="addBtn" class="btn btn-add">➕ Add Product</button>
  </div>

  <!-- Products grid -->
  <div id="products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">⏳ Loading...</div>
</div>

<footer class="text-center py-4 text-sm text-white" style="background:#111">© 2025 Rajasthan SandStone Hub</footer>

<!-- Add Product Modal -->
<div id="addModal" style="display:none" class="modal-bg">
  <div class="modal">
    <h3 class="font-bold mb-2">Add New Product</h3>
    <input id="cat" placeholder="Category" class="border p-2 w-full mb-2 rounded">
    <input id="subcat" placeholder="Sub Category" class="border p-2 w-full mb-2 rounded">
    <input id="rate" placeholder="Rate (₹)" class="border p-2 w-full mb-2 rounded" type="number">
    <input id="company" placeholder="Company / Firm" class="border p-2 w-full mb-2 rounded">
    <input id="contact" placeholder="Contact Number" class="border p-2 w-full mb-2 rounded">
    <textarea id="desc" placeholder="Description" class="border p-2 w-full mb-2 rounded"></textarea>
    <input id="img" type="file" accept="image/*" class="mb-2 w-full">
    <div class="flex justify-end gap-2">
      <button id="cancelAdd" class="btn">Cancel</button>
      <button id="saveAdd" class="btn btn-add">Save</button>
    </div>
    <div id="addMsg" class="text-sm mt-2"></div>
  </div>
</div>

<!-- Firebase Config -->
<script type="module" src="firebase-config.js"></script>

<!-- Main App Script -->
<script type="module">
import { 
  db, storage, collection, addDoc, getDocs, deleteDoc, doc,
  ref, uploadBytes, getDownloadURL
} from './firebase-config.js';

/* ========== Load and render products ========== */
const container = document.getElementById('products');
async function loadProducts() {
  container.innerHTML = '⏳ Loading...';
  const snapshot = await getDocs(collection(db, "products"));
  if (snapshot.empty) {
    container.innerHTML = '<p>No products found</p>';
    return;
  }
  container.innerHTML = '';
  snapshot.forEach(docSnap => {
    const p = docSnap.data();
    const card = document.createElement('div');
    card.className = 'bg-white p-4 rounded-lg shadow';
    card.innerHTML = `
      <img class="card-img rounded" src="${p.imageURL || ''}" onerror="this.src=''" alt="${p.category}" />
      <div class="mt-2">
        <div class="flex items-center justify-between">
          <div><div class="field-title">${p.category}</div><div class="text-sm text-gray-600">${p.subCategory}</div></div>
          <div class="text-sm font-semibold text-green-700">₹ ${p.rate}</div>
        </div>
        <p class="mt-2 text-sm">${p.description || ''}</p>
        <p class="text-sm mt-1">🏢 ${p.company || ''}</p>
        <p class="text-sm">📞 ${p.contact || ''}</p>
        <div class="mt-3 flex gap-2">
          <button class="btn btn-delete text-white" data-id="${docSnap.id}">Delete</button>
        </div>
      </div>
    `;
    card.querySelector('[data-id]').addEventListener('click', async (e)=>{
      if (confirm('Delete this product?')) {
        await deleteDoc(doc(db, "products", e.target.dataset.id));
        loadProducts();
      }
    });
    container.appendChild(card);
  });
}
loadProducts();

/* ========== Add Product Flow ========== */
const addModal = document.getElementById('addModal');
document.getElementById('addBtn').onclick = ()=> addModal.style.display='flex';
document.getElementById('cancelAdd').onclick = ()=> addModal.style.display='none';
document.getElementById('saveAdd').onclick = async ()=>{
  const msg = document.getElementById('addMsg');
  const cat = document.getElementById('cat').value.trim();
  const sub = document.getElementById('subcat').value.trim();
  const rate = parseFloat(document.getElementById('rate').value) || 0;
  const company = document.getElementById('company').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const desc = document.getElementById('desc').value.trim();
  const file = document.getElementById('img').files[0];
  if(!cat || !file) { msg.textContent='Please enter required fields.'; return; }

  msg.textContent='⏳ Uploading...';
  try {
    const imgRef = ref(storage, 'products/' + Date.now() + '_' + file.name);
    await uploadBytes(imgRef, file);
    const imageURL = await getDownloadURL(imgRef);

    await addDoc(collection(db, "products"), {
      category: cat, subCategory: sub, rate, company, contact, description: desc, imageURL,
      createdAt: new Date().toISOString()
    });
    msg.textContent='✅ Product added successfully!';
    addModal.style.display='none';
    loadProducts();
  } catch (err) {
    console.error(err);
    msg.textContent='❌ Error uploading product.';
  }
};
</script>
</body>
</html>
