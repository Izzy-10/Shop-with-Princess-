// ---------- Cart (the "Bag") ----------
// Stored in localStorage as an array of { id, size, color, qty }
// Each unique id+size+color combination is its own line item.

const CART_KEY = 'swp_cart';

function getCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateBagBadge();
}

function addToCart(id, size, color, qty){
  const cart = getCart();
  const existing = cart.find(line => line.id === id && line.size === size && line.color === color);
  if(existing){
    existing.qty += qty;
  }else{
    cart.push({ id, size, color, qty });
  }
  saveCart(cart);
}

function updateCartLineQty(index, qty){
  const cart = getCart();
  if(!cart[index]) return;
  if(qty <= 0){
    cart.splice(index, 1);
  }else{
    cart[index].qty = qty;
  }
  saveCart(cart);
}

function removeCartLine(index){
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function clearCart(){
  saveCart([]);
}

function cartCount(){
  return getCart().reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal(){
  return getCart().reduce((sum, line) => {
    const product = typeof getProduct === 'function' ? getProduct(line.id) : null;
    return sum + (product ? product.price * line.qty : 0);
  }, 0);
}

function updateBagBadge(){
  const badge = document.getElementById('bag-badge');
  if(!badge) return;
  const count = cartCount();
  if(count > 0){
    badge.textContent = count;
    badge.style.display = 'flex';
  }else{
    badge.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', updateBagBadge);
