// Each item shows just a photo (or placeholder icon) and its category — no names, no prices.
  // To add real photos: just set "img" to the path, e.g. img:'assets/dress-01.jpg'
  const icons = {
    dress:   `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M40 15 L30 28 L36 34 L40 28 L34 50 L20 85 L80 85 L66 50 L60 28 L64 34 L70 28 L60 15 Q50 24 40 15Z" stroke-linejoin="round"/></svg>`,
    top:     `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M35 18 L15 28 L25 45 L35 38 L35 75 L65 75 L65 38 L75 45 L85 28 L65 18 Q50 28 35 18Z" stroke-linejoin="round"/></svg>`,
    shirt:   `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M35 18 L15 28 L25 45 L35 38 L35 85 L65 85 L65 38 L75 45 L85 28 L65 18 Q50 28 35 18Z" stroke-linejoin="round"/><line x1="50" y1="20" x2="50" y2="85"/></svg>`,
    tee:     `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M35 18 L15 28 L25 45 L35 38 L35 85 L65 85 L65 38 L75 45 L85 28 L65 18 Q50 28 35 18Z" stroke-linejoin="round"/></svg>`,
    hoodie:  `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M30 20 L20 35 L28 40 L30 30 L30 85 L70 85 L70 30 L72 40 L80 35 L70 20 Q50 10 30 20Z" stroke-linejoin="round"/><path d="M40 22 Q50 32 60 22" /></svg>`,
    jacket:  `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M32 18 L18 30 L26 42 L32 34 L32 85 L50 78 L68 85 L68 34 L74 42 L82 30 L68 18 L58 24 L50 20 L42 24 Z" stroke-linejoin="round"/><line x1="50" y1="20" x2="50" y2="85"/></svg>`,
    pants:   `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M30 15 L30 85 L45 85 L48 40 L52 40 L55 85 L70 85 L70 15 Z" stroke-linejoin="round"/></svg>`,
    shorts:  `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M30 15 L30 55 L45 55 L47 40 L53 40 L55 55 L70 55 L70 15 Z" stroke-linejoin="round"/></svg>`,
    skirt:   `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M35 20 L65 20 L78 80 L22 80 Z" stroke-linejoin="round"/><line x1="35" y1="20" x2="65" y2="20"/></svg>`,
    shoes:   `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M15 70 Q15 55 30 55 L35 45 L55 45 L65 60 L88 62 Q90 70 82 72 L18 75 Q12 74 15 70Z" stroke-linejoin="round"/></svg>`,
    bag:     `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M25 40 L75 40 L70 85 L30 85 Z" stroke-linejoin="round"/><path d="M38 40 Q38 22 50 22 Q62 22 62 40" /></svg>`,
    tracksuit: `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M30 20 L18 32 L26 44 L30 36 L30 58 L70 58 L70 36 L74 44 L82 32 L70 20 Q50 12 30 20Z" stroke-linejoin="round"/><path d="M32 58 L32 88 L46 88 L48 62" stroke-linejoin="round"/><path d="M68 58 L68 88 L54 88 L52 62" stroke-linejoin="round"/></svg>`,
    set:     `<svg viewBox="0 0 100 100" fill="none" stroke="#B3695E" stroke-width="2.5"><path d="M35 15 L20 24 L28 38 L35 32 L35 52 L65 52 L65 32 L72 38 L80 24 L65 15 Q50 24 35 15Z" stroke-linejoin="round"/><path d="M32 60 L30 85 L48 85 L50 68 L52 68 L54 85 L72 85 L70 60 Z" stroke-linejoin="round"/></svg>`
  };

  // Group items by category. Each category has 10 ready slots.
  // To add a real photo: upload it to /assets with the exact filename shown in the
  // comment next to each slot, then change that line's img from null to the path, e.g.:
  //   { img: null } // assets/dresses-01.jpg   →   { img: 'assets/dresses-01.jpg' }
  const categories = [
    {
      name: 'Dresses',
      icon: 'dress',
      items: [
        { img: 'assets/dresses-01.jpg' },
        { img: 'assets/dresses-02.jpg' },
        { img: 'assets/dresses-03.jpg' },
        { img: 'assets/dresses-04.jpg' },
        { img: 'assets/dresses-05.jpg' },
        { img: 'assets/dresses-06.jpg' },
        { img: 'assets/dresses-07.jpg' },
        { img: 'assets/dresses-08.jpg' },
        { img: 'assets/dresses-09.jpg' },
        { img: 'assets/dresses-10.jpg' },
      ]
    },
    {
      name: 'Tops & Blouses',
      icon: 'top',
      items: [
        { img: null }, // assets/tops-blouses-01.jpg
        { img: null }, // assets/tops-blouses-02.jpg
        { img: null }, // assets/tops-blouses-03.jpg
        { img: null }, // assets/tops-blouses-04.jpg
        { img: null }, // assets/tops-blouses-05.jpg
        { img: null }, // assets/tops-blouses-06.jpg
        { img: null }, // assets/tops-blouses-07.jpg
        { img: null }, // assets/tops-blouses-08.jpg
        { img: null }, // assets/tops-blouses-09.jpg
        { img: null } // assets/tops-blouses-10.jpg
      ]
    },
    {
      name: 'Shirts',
      icon: 'shirt',
      items: [
        { img: null }, // assets/shirts-01.jpg
        { img: null }, // assets/shirts-02.jpg
        { img: null }, // assets/shirts-03.jpg
        { img: null }, // assets/shirts-04.jpg
        { img: null }, // assets/shirts-05.jpg
        { img: null }, // assets/shirts-06.jpg
        { img: null }, // assets/shirts-07.jpg
        { img: null }, // assets/shirts-08.jpg
        { img: null }, // assets/shirts-09.jpg
        { img: null } // assets/shirts-10.jpg
      ]
    },
    {
      name: 'T-Shirts',
      icon: 'tee',
      items: [
        { img: null }, // assets/tshirts-01.jpg
        { img: null }, // assets/tshirts-02.jpg
        { img: null }, // assets/tshirts-03.jpg
        { img: null }, // assets/tshirts-04.jpg
        { img: null }, // assets/tshirts-05.jpg
        { img: null }, // assets/tshirts-06.jpg
        { img: null }, // assets/tshirts-07.jpg
        { img: null }, // assets/tshirts-08.jpg
        { img: null }, // assets/tshirts-09.jpg
        { img: null } // assets/tshirts-10.jpg
      ]
    },
    {
      name: 'Hoodies & Sweaters',
      icon: 'hoodie',
      items: [
        { img: null }, // assets/hoodies-sweaters-01.jpg
        { img: null }, // assets/hoodies-sweaters-02.jpg
        { img: null }, // assets/hoodies-sweaters-03.jpg
        { img: null }, // assets/hoodies-sweaters-04.jpg
        { img: null }, // assets/hoodies-sweaters-05.jpg
        { img: null }, // assets/hoodies-sweaters-06.jpg
        { img: null }, // assets/hoodies-sweaters-07.jpg
        { img: null }, // assets/hoodies-sweaters-08.jpg
        { img: null }, // assets/hoodies-sweaters-09.jpg
        { img: null } // assets/hoodies-sweaters-10.jpg
      ]
    },
    {
      name: 'Jackets & Outerwear',
      icon: 'jacket',
      items: [
        { img: 'assets/jackets-outerwear-01.jpg' },
        { img: null }, // assets/jackets-outerwear-02.jpg
        { img: null }, // assets/jackets-outerwear-03.jpg
        { img: null }, // assets/jackets-outerwear-04.jpg
        { img: null }, // assets/jackets-outerwear-05.jpg
        { img: null }, // assets/jackets-outerwear-06.jpg
        { img: null }, // assets/jackets-outerwear-07.jpg
        { img: null }, // assets/jackets-outerwear-08.jpg
        { img: null }, // assets/jackets-outerwear-09.jpg
        { img: null } // assets/jackets-outerwear-10.jpg
      ]
    },
    {
      name: 'Tracksuit',
      icon: 'tracksuit',
      items: [
        { img: 'assets/tracksuit-01.jpg' },
        { img: 'assets/tracksuit-02.jpg' },
        { img: 'assets/tracksuit-03.jpg' },
        { img: 'assets/tracksuit-04.jpg' },
        { img: null }, // assets/tracksuit-05.jpg
        { img: null }, // assets/tracksuit-06.jpg
        { img: null }, // assets/tracksuit-07.jpg
        { img: null }, // assets/tracksuit-08.jpg
        { img: null }, // assets/tracksuit-09.jpg
        { img: null } // assets/tracksuit-10.jpg
      ]
    },
    {
      name: 'Pants & Trousers',
      icon: 'pants',
      items: [
        { img: null }, // assets/pants-trousers-01.jpg
        { img: null }, // assets/pants-trousers-02.jpg
        { img: null }, // assets/pants-trousers-03.jpg
        { img: null }, // assets/pants-trousers-04.jpg
        { img: null }, // assets/pants-trousers-05.jpg
        { img: null }, // assets/pants-trousers-06.jpg
        { img: null }, // assets/pants-trousers-07.jpg
        { img: null }, // assets/pants-trousers-08.jpg
        { img: null }, // assets/pants-trousers-09.jpg
        { img: null } // assets/pants-trousers-10.jpg
      ]
    },
    {
      name: 'Shorts',
      icon: 'shorts',
      items: [
        { img: null }, // assets/shorts-01.jpg
        { img: null }, // assets/shorts-02.jpg
        { img: null }, // assets/shorts-03.jpg
        { img: null }, // assets/shorts-04.jpg
        { img: null }, // assets/shorts-05.jpg
        { img: null }, // assets/shorts-06.jpg
        { img: null }, // assets/shorts-07.jpg
        { img: null }, // assets/shorts-08.jpg
        { img: null }, // assets/shorts-09.jpg
        { img: null } // assets/shorts-10.jpg
      ]
    },
    {
      name: 'Skirts',
      icon: 'skirt',
      items: [
        { img: null }, // assets/skirts-01.jpg
        { img: null }, // assets/skirts-02.jpg
        { img: null }, // assets/skirts-03.jpg
        { img: null }, // assets/skirts-04.jpg
        { img: null }, // assets/skirts-05.jpg
        { img: null }, // assets/skirts-06.jpg
        { img: null }, // assets/skirts-07.jpg
        { img: null }, // assets/skirts-08.jpg
        { img: null }, // assets/skirts-09.jpg
        { img: null } // assets/skirts-10.jpg
      ]
    },
    {
      name: 'Two-Piece Sets',
      icon: 'set',
      items: [
        { img: null }, // assets/two-piece-sets-01.jpg
        { img: null }, // assets/two-piece-sets-02.jpg
        { img: null }, // assets/two-piece-sets-03.jpg
        { img: null }, // assets/two-piece-sets-04.jpg
        { img: null }, // assets/two-piece-sets-05.jpg
        { img: null }, // assets/two-piece-sets-06.jpg
        { img: null }, // assets/two-piece-sets-07.jpg
        { img: null }, // assets/two-piece-sets-08.jpg
        { img: null }, // assets/two-piece-sets-09.jpg
        { img: null } // assets/two-piece-sets-10.jpg
      ]
    },
    {
      name: 'Shoes',
      icon: 'shoes',
      items: [
        { img: 'assets/shoes-01.jpg' },
        { img: 'assets/shoes-02.jpg' },
        { img: 'assets/shoes-03.jpg' },
        { img: 'assets/shoes-04.jpg' },
        { img: 'assets/shoes-05.jpg' },
        { img: 'assets/shoes-06.jpg' },
        { img: 'assets/shoes-07.jpg' },
        { img: 'assets/shoes-08.jpg' },
        { img: 'assets/shoes-09.jpg' },
        { img: 'assets/shoes-10.jpg' }
      ]
    },
    {
      name: 'Bags & Accessories',
      icon: 'bag',
      items: [
        { img: null }, // assets/bags-accessories-01.jpg
        { img: null }, // assets/bags-accessories-02.jpg
        { img: null }, // assets/bags-accessories-03.jpg
        { img: null }, // assets/bags-accessories-04.jpg
        { img: null }, // assets/bags-accessories-05.jpg
        { img: null }, // assets/bags-accessories-06.jpg
        { img: null }, // assets/bags-accessories-07.jpg
        { img: null }, // assets/bags-accessories-08.jpg
        { img: null }, // assets/bags-accessories-09.jpg
        { img: null } // assets/bags-accessories-10.jpg
      ]
    },
  ];

  // Renders a real photo if item.img is set, otherwise falls back to the category's placeholder icon
  function itemVisual(item, categoryIcon){
    if(item.img){
      return `<img src="${item.img}" alt="" loading="lazy">`;
    }
    return icons[categoryIcon] || '';
  }

  function slugify(str){
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  const grid = document.getElementById('gallery-grid');
  const overlay = document.getElementById('modal-overlay');
  const waBase = 'https://wa.me/qr/CCNIAW6DSTDZP1';

  let totalCount = 0;

  if(grid){
    categories.forEach(category => {
      if(!category.items.length) return;

      const heading = document.createElement('div');
      heading.className = 'category-heading';
      heading.id = 'cat-' + slugify(category.name);
      heading.textContent = category.name;
      grid.appendChild(heading);

      const row = document.createElement('div');
      row.className = 'category-row';

      category.items.forEach(item => {
        totalCount++;
        const card = document.createElement('div');
        card.className = 'piece';
        card.tabIndex = 0;
        card.innerHTML = `
          <div class="piece-frame">
            ${itemVisual(item, category.icon)}
          </div>
          <div class="piece-info">
            <div class="cat">${category.name}</div>
          </div>
        `;
        const open = () => openModal(item, category);
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if(e.key === 'Enter') open(); });
        row.appendChild(card);
      });

      grid.appendChild(row);
    });
  }

  const countLabel = document.getElementById('count-label');
  if(countLabel) countLabel.textContent = `${totalCount} pieces`;

  function openModal(item, category){
    if(!overlay) return;
    document.getElementById('modal-image').innerHTML = itemVisual(item, category.icon);
    document.getElementById('modal-cat').textContent = category.name;
    document.getElementById('modal-enquire').href = waBase;
    overlay.classList.add('open');
  }

  if(overlay){
    const modalClose = document.getElementById('modal-close');
    if(modalClose) modalClose.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', e => { if(e.target === overlay) overlay.classList.remove('open'); });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') overlay.classList.remove('open'); });
  }

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

  // Home page teaser — pulls a handful of pieces to preview, linking each to its category in the full gallery
  const featuredGrid = document.getElementById('featured-grid');
  if(featuredGrid){
    const FEATURED_COUNT = 6;
    const withPhotos = [];
    const withoutPhotos = [];

    categories.forEach(category => {
      const firstPhoto = category.items.find(i => i.img);
      if(firstPhoto){
        withPhotos.push({ item: firstPhoto, category });
      } else if(category.items.length){
        withoutPhotos.push({ item: category.items[0], category });
      }
    });

    const featured = withPhotos.concat(withoutPhotos).slice(0, FEATURED_COUNT);

    featured.forEach(({ item, category }) => {
      const card = document.createElement('a');
      card.className = 'piece';
      card.href = `gallery.html#cat-${slugify(category.name)}`;
      card.innerHTML = `
        <div class="piece-frame">
          ${itemVisual(item, category.icon)}
        </div>
        <div class="piece-info">
          <div class="cat">${category.name}</div>
        </div>
      `;
      featuredGrid.appendChild(card);
    });
  }
