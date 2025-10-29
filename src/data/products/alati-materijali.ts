import type { AlatiProduct } from '../types';

export const alatiProducts: AlatiProduct[] = [
  // CIJEVI
  {
    id: 'alat-1',
    slug: 'bakrene-cijevi-6mm',
    name: 'Bakrene cijevi 6mm',
    category: 'alati',
    subcategory: 'cijevi',
    price: 12,
    originalPrice: null,
    warranty: null,
    image: '/images/products/cijevi.jpg',
    specifications: {
      material: 'Bakar',
      size: '6mm x 1m',
      compatibility: 'Univerzalno',
      quantity: '1m'
    },
    features: [
      'Visoka kvaliteta',
      'Otporne na koroziju',
      'Fleksibilne',
      'EN 12735-1 standard'
    ],
    description: 'Kvalitetne bakrene cijevi za klimatizaciju.',
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-2',
    slug: 'bakrene-cijevi-12mm',
    name: 'Bakrene cijevi 12mm',
    category: 'alati',
    subcategory: 'cijevi',
    price: 18,
    originalPrice: null,
    warranty: null,
    image: '/images/products/cijevi.jpg',
    specifications: {
      material: 'Bakar',
      size: '12mm x 1m',
      compatibility: 'Univerzalno',
      quantity: '1m'
    },
    features: [
      'Za veće jedinice',
      'Otporne na koroziju',
      'EN 12735-1 standard'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-3',
    slug: 'izolacija-cijevi-6mm',
    name: 'Izolacija za cijevi 6mm',
    category: 'alati',
    subcategory: 'cijevi',
    price: 8,
    originalPrice: 10,
    discount: 20,
    warranty: null,
    image: '/images/products/izolacija.jpg',
    specifications: {
      material: 'PE pjena',
      size: '6mm x 2m',
      compatibility: '6mm cijevi',
      quantity: '2m'
    },
    features: [
      'Termička izolacija',
      'UV otporna',
      'Samoljepljiva',
      'Fleksibilna'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  },

  // DRŽAČI
  {
    id: 'alat-4',
    slug: 'nosaci-vanjske-jedinice-400mm',
    name: 'Nosači vanjske jedinice 400mm',
    category: 'alati',
    subcategory: 'drzaci',
    price: 45,
    originalPrice: null,
    warranty: '2 godine',
    image: '/images/products/nosaci.jpg',
    specifications: {
      material: 'Pocinčani čelik',
      size: '400mm',
      compatibility: 'Do 100kg',
      quantity: 'Par'
    },
    features: [
      'Nosivost do 100kg',
      'Anti-vibracijski',
      'Otporni na koroziju',
      'Set sa vijcima'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-5',
    slug: 'nosaci-vanjske-jedinice-600mm',
    name: 'Nosači vanjske jedinice 600mm',
    category: 'alati',
    subcategory: 'drzaci',
    price: 65,
    originalPrice: null,
    warranty: '2 godine',
    image: '/images/products/nosaci.jpg',
    specifications: {
      material: 'Pocinčani čelik',
      size: '600mm',
      compatibility: 'Do 150kg',
      quantity: 'Par'
    },
    features: [
      'Nosivost do 150kg',
      'Za velike jedinice',
      'Anti-vibracijski',
      'Komplet sa priborom'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-6',
    slug: 'anti-vibracijske-podloske',
    name: 'Anti-vibracijske podloške',
    category: 'alati',
    subcategory: 'drzaci',
    price: 25,
    originalPrice: 30,
    discount: 17,
    warranty: null,
    image: '/images/products/podloske.jpg',
    specifications: {
      material: 'Guma',
      size: '100x100mm',
      compatibility: 'Univerzalno',
      quantity: '4 kom'
    },
    features: [
      'Smanjenje vibracija',
      'Smanjenje buke',
      'Dugotrajna guma',
      'Set 4 komada'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  },

  // ALATI
  {
    id: 'alat-7',
    slug: 'vakuum-pumpa-vp-2',
    name: 'Vakuum pumpa VP-2',
    category: 'alati',
    subcategory: 'alati',
    price: 299,
    originalPrice: null,
    warranty: '1 godina',
    image: '/images/products/vakuum-pumpa.jpg',
    specifications: {
      material: null,
      size: '2 CFM',
      compatibility: 'R32, R410A, R134a',
      quantity: '1 kom'
    },
    features: [
      '2-stupanjska pumpa',
      'Kapacitet 2 CFM',
      'Ulje u kompletu',
      'Za sve rashladne plinove'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: true
  },
  {
    id: 'alat-8',
    slug: 'manometarska-stanica-r32',
    name: 'Manometarska stanica R32',
    category: 'alati',
    subcategory: 'alati',
    price: 189,
    originalPrice: null,
    warranty: '1 godina',
    image: '/images/products/manometri.jpg',
    specifications: {
      material: 'Aluminij',
      size: null,
      compatibility: 'R32, R410A',
      quantity: '1 set'
    },
    features: [
      'Za R32 plin',
      '3 crijeva u kompletu',
      'Precizni manometri',
      'Kofer za transport'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-9',
    slug: 'detektor-curenja-plina',
    name: 'Detektor curenja plina',
    category: 'alati',
    subcategory: 'alati',
    price: 149,
    originalPrice: 179,
    discount: 17,
    warranty: '1 godina',
    image: '/images/products/detektor.jpg',
    specifications: {
      material: null,
      size: 'Portable',
      compatibility: 'Svi plinovi',
      quantity: '1 kom'
    },
    features: [
      'Elektronski detektor',
      'Visoka osjetljivost',
      'Audio i vizualni alarm',
      'Baterija u kompletu'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  },

  // DODATNA OPREMA
  {
    id: 'alat-10',
    slug: 'drenazna-crpka-mini',
    name: 'Drenažna crpka MINI',
    category: 'alati',
    subcategory: 'oprema',
    price: 89,
    originalPrice: null,
    warranty: '1 godina',
    image: '/images/products/crpka.jpg',
    specifications: {
      material: null,
      size: 'Mini',
      compatibility: 'Do 20L/h',
      quantity: '1 kom'
    },
    features: [
      'Tihi rad',
      'Automatski rad',
      'Kapacitet 20L/h',
      'Kompaktni dizajn'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-11',
    slug: 'pokrivac-vanjske-jedinice',
    name: 'Pokrivač vanjske jedinice',
    category: 'alati',
    subcategory: 'oprema',
    price: 35,
    originalPrice: null,
    warranty: null,
    image: '/images/products/pokrivac.jpg',
    specifications: {
      material: 'PVC',
      size: 'Univerzalni',
      compatibility: 'Do 12kW',
      quantity: '1 kom'
    },
    features: [
      'UV otporan',
      'Vodootporan',
      'Univerzalna veličina',
      'Lako postavljanje'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'alat-12',
    slug: 'wifi-kontroler-univerzalni',
    name: 'WiFi kontroler univerzalni',
    category: 'alati',
    subcategory: 'oprema',
    price: 79,
    originalPrice: 99,
    discount: 20,
    warranty: '1 godina',
    image: '/images/products/wifi-kontroler.jpg',
    specifications: {
      material: null,
      size: null,
      compatibility: 'Univerzalni IR',
      quantity: '1 kom'
    },
    features: [
      'Kontrola putem app',
      'Voice control ready',
      'Timer funkcije',
      'Kompatibilan sa svim klimama'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'TOP'
  }
];