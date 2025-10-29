import type { KlimaProduct } from '../types';

// 6 PRODUCTS TOTAL - 2 per manufacturer (Toshiba, Haier, Maxon)
// Data based on klimakoncept.hr product listings
export const klimaProducts: KlimaProduct[] = [
  // ========== TOSHIBA PRODUCTS (2) ==========
  {
    id: 'klima-1',
    slug: 'toshiba-seiya-ras-b10e2kvg',
    name: 'RAS-B10E2KVG-E/RAS-10E2AVG-E',
    manufacturer: 'Toshiba',
    model: 'SEIYA NEW INVERTER',
    category: 'klima',
    price: 699,
    originalPrice: 799,
    discount: 13,
    warranty: '3 godine',
    image: '/images/products/klima.jpg',
    images: ['/images/products/klima.jpg', '/images/products/klima-2.jpg'],
    specifications: {
      power: '2.5/2.8 kW',
      cooling: '2.5 kW',
      heating: '2.8 kW',
      area: '20-25 m²',
      seer: 6.1,
      scop: 4.0,
      energyClass: 'A++',
      soundLevel: '19/21 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '770 x 250 x 188 mm',
        outdoor: '540 x 660 x 240 mm'
      },
      weight: {
        indoor: '7 kg',
        outdoor: '22 kg'
      }
    },
    features: [
      'Moderni kompaktni inverter',
      'Ultra fresh filter',
      'Silent način rada (19dB)',
      'Ekološki plin R32',
      'Wi-Fi ready (opciono)',
      'Auto restart funkcija',
      'Timer 24h',
      'Sleep mode',
      'Self-diagnostic funkcija'
    ],
    description: 'SEIYA NEW INVERTER predstavlja savršenu kombinaciju elegancije i performansi. Ovaj model klima uređaja dizajniran je za maksimalnu energetsku učinkovitost uz minimalan utjecaj na okoliš zahvaljujući ekološkom rashladnom plinu R32. Idealan za manje prostorije do 25m².',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Akcija'
  },
  {
    id: 'klima-2',
    slug: 'toshiba-shorai-ras-b16g3kvsg',
    name: 'RAS-B16G3KVSG-E/RAS-16J2AVSG-E',
    manufacturer: 'Toshiba',
    model: 'SHORAI EDGE NEW WHITE INVERTER',
    category: 'klima',
    price: 1149,
    originalPrice: 1299,
    discount: 12,
    warranty: '5 godina',
    image: '/images/products/klima.jpg',
    images: ['/images/products/klima.jpg', '/images/products/klima-2.jpg', '/images/products/klima-3.jpg'],
    specifications: {
      power: '4.6/5.2 kW',
      cooling: '4.6 kW',
      heating: '5.2 kW',
      // area: '35-45 m²',  // TEMPORARILY REMOVED FOR TESTING
      seer: 8.5,
      scop: 5.1,
      // energyClass: 'A+++',  // TEMPORARILY REMOVED FOR TESTING
      soundLevel: '19/22 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '798 x 293 x 221 mm',
        outdoor: '800 x 630 x 290 mm'
      },
      weight: {
        indoor: '10 kg',
        outdoor: '34 kg'
      }
    },
    features: [
      'Premium inverter tehnologija',
      'Optimiziran za grijanje do -20°C',
      'Wi-Fi integriran',
      'Ultra tihi rad (19dB)',
      'Plasma air purifier',
      'Self-cleaning funkcija',
      'I-feel senzor',
      'Turbo mode',
      'Energetska klasa A+++'
    ],
    description: 'SHORAI EDGE NEW WHITE predstavlja vrhunsku klasu Toshiba klima uređaja. Optimiziran je za grijanje pri niskim temperaturama do -20°C, što ga čini idealnim za primarne sustave grijanja. Napredni inverter omogućava iznimnu energetsku učinkovitost A+++ klase.',
    inStock: false,
    isOnSale: true,
    isFeatured: true,
    badge: 'Premium'
  },

  // ========== HAIER PRODUCTS (2) ==========
  {
    id: 'klima-3',
    slug: 'haier-tide-plus-as25thmhra',
    name: 'AS25THMHRA-C/1U25YEFFRA-C',
    manufacturer: 'Haier',
    model: 'TIDE PLUS Wi-Fi INVERTER',
    category: 'klima',
    price: 649,
    originalPrice: 749,
    discount: 13,
    warranty: '3 godine',
    image: '/images/products/klima.jpg',
    images: ['/images/products/klima.jpg', '/images/products/klima-2.jpg'],
    specifications: {
      power: '2.5/2.9 kW',
      cooling: '2.5 kW',
      heating: '2.9 kW',
      area: '20-25 m²',
      seer: 6.8,
      scop: 4.2,
      energyClass: 'A++',
      soundLevel: '22/24 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '795 x 275 x 190 mm',
        outdoor: '700 x 540 x 260 mm'
      },
      weight: {
        indoor: '8 kg',
        outdoor: '24 kg'
      }
    },
    features: [
      'Wi-Fi integriran',
      'Smart control putem aplikacije',
      'Self-cleaning tehnologija',
      'Turbo hlađenje',
      'Eco mode',
      'Sleep mode',
      'Timer 24h',
      'LED display',
      'Catechin filter'
    ],
    description: 'HAIER TIDE PLUS serija donosi moderan dizajn i napredne funkcionalnosti. Integriran Wi-Fi omogućava potpunu kontrolu uređaja putem mobilne aplikacije. Self-cleaning funkcija automatski čisti unutarnju jedinicu i sprječava razvoj bakterija.',
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Wi-Fi'
  },
  {
    id: 'klima-4',
    slug: 'haier-pearl-premium-as50pdphra',
    name: 'AS50PDPHRA/1U50KEPFRA',
    manufacturer: 'Haier',
    model: 'PEARL PREMIUM INVERTER',
    category: 'klima',
    price: 1099,
    originalPrice: 1249,
    discount: 12,
    warranty: '5 godina',
    image: '/images/products/klima.jpg',
    images: ['/images/products/klima.jpg', '/images/products/klima-2.jpg', '/images/products/klima-3.jpg'],
    specifications: {
      power: '5.0/5.8 kW',
      cooling: '5.0 kW',
      heating: '5.8 kW',
      area: '40-50 m²',
      seer: 8.3,
      scop: 4.9,
      energyClass: 'A+++',
      soundLevel: '21/25 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '890 x 310 x 220 mm',
        outdoor: '845 x 702 x 320 mm'
      },
      weight: {
        indoor: '11 kg',
        outdoor: '38 kg'
      }
    },
    features: [
      'Premium mat bijela boja',
      'Wi-Fi & Smart control',
      'Self-cleaning funkcija',
      'Sensorless DC inverter',
      'Wide voltage range',
      'Grijanje do -15°C',
      'UV Light sterilizacija',
      'HEPA filter',
      'Energetska klasa A+++'
    ],
    description: 'HAIER PEARL PREMIUM predstavlja vrhunac Haier tehnologije. Elegantna mat bijela boja i premium funkcionalnosti čine ovaj model idealnim za zahtjevnije korisnike. UV Light sterilizacija i HEPA filter osiguravaju vrhunsku kvalitetu zraka.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Premium'
  },

  // ========== MAXON PRODUCTS (2) ==========
  {
    id: 'klima-5',
    slug: 'maxon-eco-mxi-09he013i',
    name: 'MXI-09HE013I/MXO-09HE013I',
    manufacturer: 'Maxon',
    model: 'ECO Wi-Fi INVERTER',
    category: 'klima',
    price: 599,
    originalPrice: 699,
    discount: 14,
    warranty: '3 godine',
    image: '/images/products/klima.jpg',
    images: ['/images/products/klima.jpg', '/images/products/klima-2.jpg'],
    specifications: {
      power: '2.5/2.8 kW',
      cooling: '2.5 kW',
      heating: '2.8 kW',
      area: '20-25 m²',
      seer: 6.5,
      scop: 4.1,
      energyClass: 'A++',
      soundLevel: '23/26 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '780 x 265 x 195 mm',
        outdoor: '680 x 535 x 250 mm'
      },
      weight: {
        indoor: '8 kg',
        outdoor: '23 kg'
      }
    },
    features: [
      'Wi-Fi ready',
      'Eco mode za uštedu energije',
      'Turbo funkcija',
      'Sleep mode',
      'Auto restart',
      'Self-diagnostic',
      'LED display',
      'Timer 24h',
      'Cold plasma filter'
    ],
    description: 'MAXON ECO serija pruža odličan omjer cijene i kvalitete. Wi-Fi ready funkcionalnost omogućava pametnu kontrolu, dok Eco mode osigurava maksimalnu uštedu energije. Idealan izbor za manje prostorije i korisnike koji traže pouzdanost po pristupačnoj cijeni.',
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Bestseller'
  },
  {
    id: 'klima-6',
    slug: 'maxon-fresh-mx-18hc013i',
    name: 'MX-18HC013I',
    manufacturer: 'Maxon',
    model: 'FRESH Wi-Fi INVERTER',
    category: 'klima',
    price: 949,
    originalPrice: 1099,
    discount: 14,
    warranty: '3 godine',
    image: '/images/products/klima.jpg',
    images: ['/images/products/klima.jpg', '/images/products/klima-2.jpg', '/images/products/klima-3.jpg'],
    specifications: {
      power: '5.0/5.5 kW',
      cooling: '5.0 kW',
      heating: '5.5 kW',
      area: '40-50 m²',
      seer: 7.8,
      scop: 4.6,
      energyClass: 'A+++',
      soundLevel: '22/27 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '860 x 295 x 210 mm',
        outdoor: '825 x 685 x 305 mm'
      },
      weight: {
        indoor: '10 kg',
        outdoor: '36 kg'
      }
    },
    features: [
      'Wi-Fi integriran',
      'Fresh air funkcija',
      'Ionizator zraka',
      'Turbo mode',
      'Sleep mode',
      'Follow me funkcija',
      'Auto swing vertical & horizontal',
      'Self-cleaning',
      'Grijanje do -15°C'
    ],
    description: 'MAXON FRESH donosi napredne funkcionalnosti po izvrsnoj cijeni. Fresh air funkcija omogućava dovod svježeg zraka izvana, dok ionizator poboljšava kvalitetu zraka. Sa grijanjem do -15°C i energetskom klasom A+++, predstavlja odličan izbor za veće prostorije.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Novo'
  }
];
