import type { MikroklimaProduct } from '../types';

// MIKROKLIMA PRODUCTS
// Data based on klimakoncept.hr MIKROKLIMA listings
// Categories: Rekuperatori, Zračne zavjese, Odvlaživači, Pročišćivači zraka
export const mikroklimaProducts: MikroklimaProduct[] = [
  // ========== REKUPERATORI ==========
  {
    id: 'mikroklima-1',
    slug: 'rekuperator-zraka-mitsubishi-electric-vl-100eu5-e-lossnay',
    name: 'REKUPERATOR ZRAKA MITSUBISHI ELECTRIC VL-100EU5-E - Lossnay',
    manufacturer: 'Mitsubishi',
    model: 'VL-100EU5-E',
    category: 'mikroklima',
    subcategory: 'rekuperator',
    price: 495,
    originalPrice: undefined,
    discount: undefined,
    warranty: '3 godine',
    image: '/images/products/rekuperator-mitsubishi-vl100.jpg',
    images: [
      '/images/products/rekuperator-mitsubishi-vl100.jpg',
      '/images/products/rekuperator-mitsubishi-vl100-2.jpg'
    ],
    specifications: {
      airflow: 'Do 200 m3/h',           // PROTOK ZRAKA
      area: undefined,                   // Rekuperatori nemaju
      cooling: undefined,
      heating: undefined,
      dehumidification: undefined,
      energyClass: undefined,
      soundLevel: undefined,
      dimensions: undefined,
      weight: undefined,
      power: undefined,
      voltage: '230V / 50Hz',
      filters: undefined
    },
    features: [
      'Poboljšava kvalitetu zraka',
      'Cirkulira svježi zrak bez propuha',
      'Energija se oporavlja od ustajalog odlaznog zraka',
      'Uklanja ustajali zrak',
      'Balansirana ventilacija',
      'Idealno za sobe u modernim kućama koje su više nepropusne za zrak'
    ],
    description: 'REKUPERATOR ZRAKA MITSUBISHI ELECTRIC VL-100EU5-E - Lossnay poboljšava kvalitetu zraka u zatvorenim prostorima. Omogućava cirkulaciju svježeg zraka bez propuha uz oporavljanje energije od ustajalog odlaznog zraka. Balansirana ventilacija idealna za moderne, nepropusne kuće.',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: undefined
  },

  // ========== GREE REKUPERATORI (Za buduće širenje) ==========
  {
    id: 'mikroklima-2',
    slug: 'gree-rekuperator-topline-fhbqgl-d35-da-t',
    name: 'GREE REKUPERATOR TOPLINE FHBQGL-D3.5-DA-T',
    manufacturer: 'Gree',
    model: 'FHBQGL-D3.5-DA-T',
    category: 'mikroklima',
    subcategory: 'rekuperator',
    price: 0, // Cijena na upit
    originalPrice: undefined,
    discount: undefined,
    warranty: '3 godine',
    image: '/images/products/gree-rekuperator-d35.jpg',
    images: ['/images/products/gree-rekuperator-d35.jpg'],
    specifications: {
      airflow: '200-400 m3/h',          // PROTOK ZRAKA
      area: undefined,
      cooling: undefined,
      heating: undefined,
      dehumidification: undefined,
      energyClass: undefined,
      soundLevel: undefined,
      dimensions: undefined,
      weight: undefined,
      power: undefined,
      voltage: '1 ph / 220 - 240 V / 50 Hz',
      filters: ['Filter za pročišćavanje vode']
    },
    features: [
      'Kompaktna izvedba',
      'Ventilacijska jedinica koja rekuperira toplinu otpadnog zraka za uštedu energije',
      'Jedinstveni by-pass za smanjenje potrošnje energije motora ventilatora',
      'Posebni filter koji održava zrak čistim i bez prašine',
      'Uključen žičani daljinski upravljač',
      'Količina zraka H/M/L (m3/h): 360/260/210'
    ],
    description: 'GREE REKUPERATOR TOPLINE FHBQGL-D3.5-DA-T je kompaktna ventilacijska jedinica koja rekuperira toplinu otpadnog zraka za maksimalnu uštedu energije. Jedinstveni by-pass sistem smanjuje potrošnju energije motora ventilatora. Dolazi s posebnim filterom koji održava zrak čistim i bez prašine.',
    inStock: true,
    isOnSale: false,
    isFeatured: false,
    badge: 'Cijena na upit'
  }
];
