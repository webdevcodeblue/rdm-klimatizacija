import type { MikroklimaProduct } from '../types';

export const mikroklimaProducts: MikroklimaProduct[] = [
  // TOSHIBA MIKROKLIMA
  {
    id: 'mikroklima-1',
    slug: 'toshiba-portable-rac-pd0711cru',
    name: 'RAC-PD0711CRU',
    manufacturer: 'Toshiba',
    model: 'PORTABLE 2.0kW',
    category: 'mikroklima',
    price: 499,
    originalPrice: 599,
    discount: 17,
    warranty: '2 godine',
    image: '/images/products/mikroklima.jpg',
    specifications: {
      cooling: '2.0 kW',
      area: '15-20 m²',
      energyClass: 'A',
      soundLevel: '52 dB',
      dimensions: '330 x 445 x 700 mm',
      weight: '26 kg',
      portability: true
    },
    features: [
      'Mobilni klima uređaj',
      'Bez instalacije',
      'LED display',
      'Timer 24h',
      'Daljinski upravljač',
      'Auto restart',
      'Sleep funkcija'
    ],
    description: 'Praktični mobilni klima uređaj za manje prostorije.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Akcija'
  },
  {
    id: 'mikroklima-2',
    slug: 'toshiba-portable-rac-pd0912cru',
    name: 'RAC-PD0912CRU',
    manufacturer: 'Toshiba',
    model: 'PORTABLE 2.6kW',
    category: 'mikroklima',
    price: 599,
    originalPrice: null,
    warranty: '2 godine',
    image: '/images/products/mikroklima.jpg',
    specifications: {
      cooling: '2.6 kW',
      area: '20-25 m²',
      energyClass: 'A',
      soundLevel: '54 dB',
      dimensions: '350 x 465 x 720 mm',
      weight: '28 kg',
      portability: true
    },
    features: [
      'Mobilni klima uređaj',
      '3-u-1 funkcija',
      'Odvlaživanje',
      'Ventilacija',
      'Timer funkcija'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },

  // HAIER MIKROKLIMA
  {
    id: 'mikroklima-3',
    slug: 'haier-portable-hpb08xcr',
    name: 'HPB08XCR',
    manufacturer: 'Haier',
    model: 'PORTABLE AIR 2.3kW',
    category: 'mikroklima',
    price: 549,
    originalPrice: 649,
    discount: 15,
    warranty: '2 godine',
    image: '/images/products/mikroklima.jpg',
    specifications: {
      cooling: '2.3 kW',
      area: '18-23 m²',
      energyClass: 'A+',
      soundLevel: '50 dB',
      dimensions: '340 x 450 x 710 mm',
      weight: '25 kg',
      portability: true
    },
    features: [
      'Super tihi rad',
      '3-brzine ventilator',
      'Auto evaporacija',
      'LED kontrola',
      'Daljinski upravljač',
      'Kotačići za transport'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'TOP'
  },
  {
    id: 'mikroklima-4',
    slug: 'haier-portable-hpb12xcr',
    name: 'HPB12XCR',
    manufacturer: 'Haier',
    model: 'PORTABLE AIR 3.5kW',
    category: 'mikroklima',
    price: 749,
    originalPrice: null,
    warranty: '2 godine',
    image: '/images/products/mikroklima.jpg',
    specifications: {
      cooling: '3.5 kW',
      area: '25-35 m²',
      energyClass: 'A',
      soundLevel: '52 dB',
      dimensions: '380 x 480 x 750 mm',
      weight: '30 kg',
      portability: true
    },
    features: [
      'Za veće prostorije',
      '3-u-1 funkcija',
      'Smart kontrola',
      'Auto restart'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },

  // MAXON MIKROKLIMA
  {
    id: 'mikroklima-5',
    slug: 'maxon-portable-mx-pc07',
    name: 'MX-PC07',
    manufacturer: 'Maxon',
    model: 'PORTABLE COOL 2.0kW',
    category: 'mikroklima',
    price: 399,
    originalPrice: null,
    warranty: '2 godine',
    image: '/images/products/mikroklima.jpg',
    specifications: {
      cooling: '2.0 kW',
      area: '15-20 m²',
      energyClass: 'A',
      soundLevel: '55 dB',
      dimensions: '320 x 440 x 680 mm',
      weight: '24 kg',
      portability: true
    },
    features: [
      'Ekonomičan izbor',
      'Jednostavan za korištenje',
      'Timer 24h',
      'Kompaktni dizajn'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'mikroklima-6',
    slug: 'maxon-portable-mx-pc09',
    name: 'MX-PC09',
    manufacturer: 'Maxon',
    model: 'PORTABLE COOL 2.6kW',
    category: 'mikroklima',
    price: 499,
    originalPrice: 549,
    discount: 9,
    warranty: '2 godine',
    image: '/images/products/mikroklima.jpg',
    specifications: {
      cooling: '2.6 kW',
      area: '20-25 m²',
      energyClass: 'A',
      soundLevel: '56 dB',
      dimensions: '340 x 460 x 700 mm',
      weight: '26 kg',
      portability: true
    },
    features: [
      'Praktični izbor',
      'LCD display',
      'Daljinski upravljač',
      '3 brzine ventilator'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  }
];