// Each piece uses a simple inline SVG placeholder so the layout works before real product photos are added.
  const icons = {
    hoodie: `<svg viewBox="0 0 100 100" fill="none" stroke="#C98A7D" stroke-width="2.5"><path d="M30 20 L20 35 L28 40 L30 30 L30 85 L70 85 L70 30 L72 40 L80 35 L70 20 Q50 10 30 20Z" stroke-linejoin="round"/><path d="M40 22 Q50 32 60 22" /></svg>`,
    tee: `<svg viewBox="0 0 100 100" fill="none" stroke="#C98A7D" stroke-width="2.5"><path d="M35 18 L15 28 L25 45 L35 38 L35 85 L65 85 L65 38 L75 45 L85 28 L65 18 Q50 28 35 18Z" stroke-linejoin="round"/></svg>`,
    jacket: `<svg viewBox="0 0 100 100" fill="none" stroke="#C98A7D" stroke-width="2.5"><path d="M32 18 L18 30 L26 42 L32 34 L32 85 L50 78 L68 85 L68 34 L74 42 L82 30 L68 18 L58 24 L50 20 L42 24 Z" stroke-linejoin="round"/><line x1="50" y1="20" x2="50" y2="85"/></svg>`,
    cap: `<svg viewBox="0 0 100 100" fill="none" stroke="#C98A7D" stroke-width="2.5"><path d="M20 55 Q20 30 50 30 Q80 30 80 55 Z" stroke-linejoin="round"/><path d="M20 55 L5 60 L20 62Z" stroke-linejoin="round"/><line x1="50" y1="30" x2="50" y2="55"/></svg>`
  };

  const pieces = [
    {no:'01', cat:'Hoodie', name:'Track Line Hoodie', desc:'Heavyweight fleece with a gold lane-stripe down the sleeve. Oversized fit.', price:'R650', icon:'hoodie', bg:'#F6E9E4'},
    {no:'02', cat:'Tee', name:'Jozini Skyline Tee', desc:'Boxy cut, ribbed collar, chest print inspired by the KZN skyline.', price:'R280', icon:'tee', bg:'#F3E1DB'},
    {no:'03', cat:'Jacket', name:'Asphalt Windbreaker', desc:'Lightweight shell, water-resistant, gold zip pull, packs into its own pocket.', price:'R780', icon:'jacket', bg:'#F6E9E4'},
    {no:'04', cat:'Cap', name:'Lane Marker Cap', desc:'Structured 6-panel cap with embroidered lane-stripe on the brim.', price:'R220', icon:'cap', bg:'#F3E1DB'},
    {no:'05', cat:'Hoodie', name:'Durban Dusk Hoodie', desc:'Washed black fleece, minimal branding, built for early starts.', price:'R680', icon:'hoodie', bg:'#F9EFEA'},
    {no:'06', cat:'Tee', name:'Princess Classic Tee', desc:'The staple. Heavyweight cotton, screen-printed wordmark, true to size.', price:'R260', icon:'tee', bg:'#F6E9E4'}
    // To add a new piece with a real photo, copy a line above and add an "img" field, e.g.:
    // {no:'07', cat:'Tee', name:'New Tee', desc:'...', price:'R300', img:'assets/new-tee.jpg', bg:'#F6E9E4'}
  ];

  // Renders a real photo if p.img is set, otherwise falls back to the placeholder SVG icon
  function pieceVisual(p){
    if(p.img){
      return `<img src="${p.img}" alt="${p.name}" loading="lazy">`;
    }
    return icons[p.icon];
  }

  const grid = document.getElementById('gallery-grid');
  const overlay = document.getElementById('modal-overlay');
  const waBase = 'https://wa.me/qr/CCNIAW6DSTDZP1';

  pieces.forEach(p => {
    const card = document.createElement('div');
    card.className = 'piece';
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="piece-frame">
        <span class="tag-no">${p.no}</span>
        ${pieceVisual(p)}
      </div>
      <div class="piece-info">
        <div class="cat">${p.cat}</div>
        <h3>${p.name}</h3>
        <p>${p.price}</p>
      </div>
    `;
    const open = () => openModal(p);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if(e.key === 'Enter') open(); });
    grid.appendChild(card);
  });

  function openModal(p){
    document.getElementById('modal-image').innerHTML = pieceVisual(p);
    document.getElementById('modal-cat').textContent = p.cat;
    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-price').textContent = p.price;
    document.getElementById('modal-enquire').href = waBase;
    overlay.classList.add('open');
  }
  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.classList.remove('open'); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') overlay.classList.remove('open'); });

  // Contact form → hands off to WhatsApp with the details pre-filled
  const PRINCESS_PHONE = '27729103254'; // Princess's number, international format, no + or spaces
  const contactForm = document.getElementById('contact-form');
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
