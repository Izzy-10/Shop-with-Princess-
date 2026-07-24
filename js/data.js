// Full product catalog for Shop with Princess.
// Each product has: id, category, icon (placeholder fallback), name, price (Rand), sizes, colors, img.
// To add a real photo: change img from null to 'assets/yourfile.jpg'
const PRODUCTS = [
  {
    id: 'dresses-01',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 01',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses.jpg'
  },
  {
    id: 'dresses-02',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 02',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-02.jpg'
  },
  {
    id: 'dresses-03',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 03',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-03.jpg'
  },
  {
    id: 'dresses-04',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 04',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-04.jpg'
  },
  {
    id: 'dresses-05',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 05',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-05.jpg'
  },
  {
    id: 'dresses-06',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 06',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-06.jpg'
  },
  {
    id: 'dresses-07',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 07',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-07.jpg'
  },
  {
    id: 'dresses-08',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 08',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-08.jpg'
  },
  {
    id: 'dresses-09',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 09',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-09.jpg'
  },
  {
    id: 'dresses-10',
    category: 'Dresses',
    icon: 'dress',
    name: 'Dresses Style 10',
    price: 450,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/dresses-10.jpg'
  },
  {
    id: 'tops-blouses-01',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 01',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-02',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 02',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-03',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 03',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-04',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 04',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-05',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 05',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-06',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 06',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-07',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 07',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-08',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 08',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-09',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 09',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tops-blouses-10',
    category: 'Tops & Blouses',
    icon: 'top',
    name: 'Tops & Blouses Style 10',
    price: 320,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-01',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 01',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-02',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 02',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-03',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 03',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-04',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 04',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-05',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 05',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-06',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 06',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-07',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 07',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-08',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 08',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-09',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 09',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shirts-10',
    category: 'Shirts',
    icon: 'shirt',
    name: 'Shirts Style 10',
    price: 350,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-01',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 01',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-02',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 02',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-03',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 03',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-04',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 04',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-05',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 05',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-06',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 06',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-07',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 07',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-08',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 08',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-09',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 09',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 't-shirts-10',
    category: 'T-Shirts',
    icon: 'tee',
    name: 'T-Shirts Style 10',
    price: 260,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-01',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 01',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-02',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 02',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-03',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 03',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-04',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 04',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-05',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 05',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-06',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 06',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-07',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 07',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-08',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 08',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-09',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 09',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'hoodies-sweaters-10',
    category: 'Hoodies & Sweaters',
    icon: 'hoodie',
    name: 'Hoodies & Sweaters Style 10',
    price: 620,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-01',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 01',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/jackets-outerwear-01.jpg'
  },
  {
    id: 'jackets-outerwear-02',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 02',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-03',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 03',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-04',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 04',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-05',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 05',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-06',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 06',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-07',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 07',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-08',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 08',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-09',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 09',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'jackets-outerwear-10',
    category: 'Jackets & Outerwear',
    icon: 'jacket',
    name: 'Jackets & Outerwear Style 10',
    price: 750,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tracksuit-01',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 01',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/tracksuit-01.jpg'
  },
  {
    id: 'tracksuit-02',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 02',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/tracksuit-02.jpg'
  },
  {
    id: 'tracksuit-03',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 03',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/tracksuit-03.jpg'
  },
  {
    id: 'tracksuit-04',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 04',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/tracksuit-04.jpg'
  },
  {
    id: 'tracksuit-05',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 05',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tracksuit-06',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 06',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tracksuit-07',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 07',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tracksuit-08',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 08',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tracksuit-09',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 09',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'tracksuit-10',
    category: 'Tracksuit',
    icon: 'tracksuit',
    name: 'Tracksuit Style 10',
    price: 580,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-01',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 01',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-02',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 02',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-03',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 03',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-04',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 04',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-05',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 05',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-06',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 06',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-07',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 07',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-08',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 08',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-09',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 09',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'pants-trousers-10',
    category: 'Pants & Trousers',
    icon: 'pants',
    name: 'Pants & Trousers Style 10',
    price: 420,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-01',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 01',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-02',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 02',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-03',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 03',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-04',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 04',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-05',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 05',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-06',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 06',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-07',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 07',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-08',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 08',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-09',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 09',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shorts-10',
    category: 'Shorts',
    icon: 'shorts',
    name: 'Shorts Style 10',
    price: 280,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-01',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 01',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-02',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 02',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-03',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 03',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-04',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 04',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-05',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 05',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-06',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 06',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-07',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 07',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-08',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 08',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-09',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 09',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'skirts-10',
    category: 'Skirts',
    icon: 'skirt',
    name: 'Skirts Style 10',
    price: 340,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-01',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 01',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-02',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 02',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-03',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 03',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-04',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 04',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-05',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 05',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-06',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 06',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-07',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 07',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-08',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 08',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-09',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 09',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'two-piece-sets-10',
    category: 'Two-Piece Sets',
    icon: 'set',
    name: 'Two-Piece Sets Style 10',
    price: 680,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'shoes-01',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 01',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-01.jpg'
  },
  {
    id: 'shoes-02',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 02',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-02.jpg'
  },
  {
    id: 'shoes-03',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 03',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-03.jpg'
  },
  {
    id: 'shoes-04',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 04',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-04.jpg'
  },
  {
    id: 'shoes-05',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 05',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-05.jpg'
  },
  {
    id: 'shoes-06',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 06',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-06.jpg'
  },
  {
    id: 'shoes-07',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 07',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-07.jpg'
  },
  {
    id: 'shoes-08',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 08',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-08.jpg'
  },
  {
    id: 'shoes-09',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 09',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-09.jpg'
  },
  {
    id: 'shoes-10',
    category: 'Shoes',
    icon: 'shoes',
    name: 'Shoes Style 10',
    price: 480,
    sizes: ['3', '4', '5', '6', '7', '8', '9'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: 'assets/shoes-10.jpg'
  },
  {
    id: 'bags-accessories-01',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 01',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-02',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 02',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-03',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 03',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-04',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 04',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-05',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 05',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-06',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 06',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-07',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 07',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-08',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 08',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-09',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 09',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
  {
    id: 'bags-accessories-10',
    category: 'Bags & Accessories',
    icon: 'bag',
    name: 'Bags & Accessories Style 10',
    price: 250,
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Red', 'Blue'],
    img: null
  },
];

function getProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category){
  return PRODUCTS.filter(p => p.category === category);
}

function getCategories(){
  const seen = [];
  PRODUCTS.forEach(p => { if(!seen.includes(p.category)) seen.push(p.category); });
  return seen;
}
