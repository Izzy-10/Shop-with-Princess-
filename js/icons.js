// Shared placeholder icons — used wherever a product has no real photo yet.
const ICONS = {
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
