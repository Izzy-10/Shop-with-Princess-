// Used by index.html only. Full catalog logic now lives in shop.html / product.html,
// pulling from js/data.js so there's a single source of truth for products.

// Contact form → hands off to WhatsApp with the details pre-filled
const PRINCESS_PHONE = '27729103254'; // Princess's number, international format, no + or spaces
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('c-name').value.trim();
    const item = document.getElementById('c-item').value.trim();
    const message = document.getElementById('c-message').value.trim();

    let text = `Hi Princess, it's ${name}.`;
    if(item) text += ` I'm interested in: ${item}.`;
    text += ` ${message}`;

    const url = `https://wa.me/${PRINCESS_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}

// Home page teaser — pulls a handful of pieces to preview, linking each to its category in the shop
function slugify(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const featuredGrid = document.getElementById('featured-grid');
if(featuredGrid && typeof PRODUCTS !== 'undefined'){
  const FEATURED_COUNT = 6;
  const withPhotos = [];
  const withoutPhotos = [];
  const seenCategories = new Set();

  PRODUCTS.forEach(p => {
    if(seenCategories.has(p.category)) return;
    if(p.img){
      withPhotos.push(p);
      seenCategories.add(p.category);
    }
  });

  getCategories().forEach(cat => {
    if(seenCategories.has(cat)) return;
    const first = getProductsByCategory(cat)[0];
    if(first){
      withoutPhotos.push(first);
      seenCategories.add(cat);
    }
  });

  const featured = withPhotos.concat(withoutPhotos).slice(0, FEATURED_COUNT);

  featured.forEach(p => {
    const card = document.createElement('a');
    card.className = 'piece';
    card.href = `shop.html?category=${encodeURIComponent(p.category)}`;
    const visual = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
      : (typeof ICONS !== 'undefined' ? (ICONS[p.icon] || '') : '');
    card.innerHTML = `
      <div class="piece-frame">${visual}</div>
      <div class="piece-info">
        <div class="cat">${p.category}</div>
      </div>
    `;
    featuredGrid.appendChild(card);
  });
}
