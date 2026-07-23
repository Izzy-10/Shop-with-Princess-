# Shop with Princess

A no-cart lookbook site. People browse a gallery of pieces, open a piece to see details, and enquire directly over WhatsApp to place an order.

**Live concept:** browse → enquire → order confirmed in chat. No checkout, no payment on-site.

## Structure

```
shop-with-princess/
├── index.html        Main page markup
├── css/
│   └── style.css      All styling (dark/gold theme, gallery, modal, contact form)
├── js/
│   └── script.js       Gallery data, modal logic, contact form → WhatsApp handoff
├── assets/            Drop real product photos here (see "Adding real photos" below)
└── README.md
```

## Running it locally

No build step needed — it's plain HTML/CSS/JS.

1. Clone or download this repo
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000`

## Adding real product photos

Right now each gallery item uses a simple inline SVG placeholder instead of a photo. To swap in real photos:

1. Add image files to `assets/` (e.g. `assets/hoodie-01.jpg`)
2. In `js/script.js`, find the `pieces` array near the top
3. Add an `img` field to the relevant item, e.g.:
   ```js
   { no:'01', cat:'Hoodie', name:'Track Line Hoodie', img:'assets/hoodie-01.jpg', ... }
   ```
4. Update the `piece-frame` and `modal-image` rendering in `js/script.js` to use an `<img>` tag when `img` is present, falling back to the SVG icon otherwise

## Editing contact details

All contact info lives in two places:

- **`index.html`** — footer links (Instagram, TikTok, WhatsApp group, WhatsApp direct) and the contact section's side panel
- **`js/script.js`** — two constants near the bottom of the file:
  - `waBase` — the WhatsApp link used by every "Enquire on WhatsApp" button in the product modals
  - `PRINCESS_PHONE` — the phone number (international format, digits only, no `+`) used to build the pre-filled WhatsApp message from the contact form

## Editing the gallery

Each product is one object in the `pieces` array in `js/script.js`:

```js
{ no:'01', cat:'Hoodie', name:'Track Line Hoodie', desc:'...', price:'R650', icon:'hoodie', bg:'#1c1c1f' }
```

- `icon` must match one of the keys in the `icons` object (`hoodie`, `tee`, `jacket`, `cap`) unless you've added photo support
- `bg` is a hex color used behind the placeholder icon

## Credits

Curated by Sizwe Sicelimilo Sibiya. Run by Siyathaba "Princess" Hlongwa.
