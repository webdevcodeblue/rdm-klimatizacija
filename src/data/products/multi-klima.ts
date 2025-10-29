import type { MultiKlimaProduct } from '../types';

export const multiKlimaProducts: MultiKlimaProduct[] = [
  // TOSHIBA MULTI SYSTEMS
  {
    id: 'multi-1',
    slug: 'toshiba-multi-2-jedinice-ras-2m14g3avg',
    name: 'RAS-2M14G3AVG-E',
    manufacturer: 'Toshiba',
    model: 'MULTI SPLIT 2 jedinice',
    category: 'multi',
    units: 2,
    outdoorUnit: 'RAS-2M14G3AVG-E (4.0kW)',
    indoorUnits: [
      'RAS-B07E2KVG-E (2.0kW)',
      'RAS-B07E2KVG-E (2.0kW)'
    ],
    price: 1499,
    originalPrice: 1699,
    discount: 12,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    images: ['/images/products/multi-klima.jpg'],
    specifications: {
      maxCooling: '4.0 kW',
      maxHeating: '4.2 kW',
      seer: 6.5,
      scop: 4.1,
      energyClass: 'A++',
      refrigerant: 'R32'
    },
    features: [
      'Fleksibilna instalacija',
      'Individualna kontrola',
      'Tihi rad',
      'Energetski efikasan',
      'Wi-Fi ready opcija'
    ],
    description: 'Multi split sistem za 2 prostorije sa individualnom kontrolom temperature.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Akcija'
  },
  {
    id: 'multi-2',
    slug: 'toshiba-multi-3-jedinice-ras-3m18g3avg',
    name: 'RAS-3M18G3AVG-E',
    manufacturer: 'Toshiba',
    model: 'MULTI SPLIT 3 jedinice',
    category: 'multi',
    units: 3,
    outdoorUnit: 'RAS-3M18G3AVG-E (5.2kW)',
    indoorUnits: [
      'RAS-B07E2KVG-E (2.0kW)',
      'RAS-B07E2KVG-E (2.0kW)',
      'RAS-B10E2KVG-E (2.5kW)'
    ],
    price: 2199,
    originalPrice: null,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '5.2 kW',
      maxHeating: '5.6 kW',
      seer: 6.5,
      scop: 4.1,
      energyClass: 'A++',
      refrigerant: 'R32'
    },
    features: [
      'Fleksibilna instalacija',
      'Individualna kontrola za 3 prostorije',
      'Tihi rad',
      'Energetski efikasan'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'multi-3',
    slug: 'toshiba-multi-4-jedinice-ras-4m27g3avg',
    name: 'RAS-4M27G3AVG-E',
    manufacturer: 'Toshiba',
    model: 'MULTI SPLIT 4 jedinice',
    category: 'multi',
    units: 4,
    outdoorUnit: 'RAS-4M27G3AVG-E (8.0kW)',
    indoorUnits: [
      'RAS-B07E2KVG-E (2.0kW)',
      'RAS-B07E2KVG-E (2.0kW)',
      'RAS-B10E2KVG-E (2.5kW)',
      'RAS-B10E2KVG-E (2.5kW)'
    ],
    price: 2999,
    originalPrice: 3299,
    discount: 9,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '8.0 kW',
      maxHeating: '9.0 kW',
      seer: 6.3,
      scop: 4.0,
      energyClass: 'A++',
      refrigerant: 'R32'
    },
    features: [
      'Idealno za 4 prostorije',
      'Individualna kontrola temperature',
      'Jedna vanjska jedinica',
      'Ušteda prostora',
      'Tiha vanjska jedinica'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  },

  // HAIER MULTI SYSTEMS
  {
    id: 'multi-4',
    slug: 'haier-multi-2-jedinice-2u40s2sm1fa',
    name: '2U40S2SM1FA',
    manufacturer: 'Haier',
    model: 'FLEXIS MULTI 2 jedinice',
    category: 'multi',
    units: 2,
    outdoorUnit: '2U40S2SM1FA (4.0kW)',
    indoorUnits: [
      'AS20S2SF2FA-G (2.0kW)',
      'AS20S2SF2FA-G (2.0kW)'
    ],
    price: 1599,
    originalPrice: 1799,
    discount: 11,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '4.0 kW',
      maxHeating: '4.2 kW',
      seer: 8.5,
      scop: 5.1,
      energyClass: 'A+++',
      refrigerant: 'R32'
    },
    features: [
      'Super tihi rad',
      'UV-C sterilizacija',
      'Wi-Fi kontrola',
      'Self-cleaning +56°C',
      'Individualni termostati'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'TOP'
  },
  {
    id: 'multi-5',
    slug: 'haier-multi-3-jedinice-3u52s2sr2fa',
    name: '3U52S2SR2FA',
    manufacturer: 'Haier',
    model: 'FLEXIS MULTI 3 jedinice',
    category: 'multi',
    units: 3,
    outdoorUnit: '3U52S2SR2FA (5.2kW)',
    indoorUnits: [
      'AS20S2SF2FA-G (2.0kW)',
      'AS20S2SF2FA-G (2.0kW)',
      'AS25S2SF2FA-G (2.5kW)'
    ],
    price: 2299,
    originalPrice: null,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '5.2 kW',
      maxHeating: '5.6 kW',
      seer: 8.5,
      scop: 5.1,
      energyClass: 'A+++',
      refrigerant: 'R32'
    },
    features: [
      'Super tihi rad',
      'UV-C sterilizacija',
      'Wi-Fi kontrola za sve jedinice',
      'Self-cleaning +56°C'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'multi-6',
    slug: 'haier-multi-4-jedinice-4u75s2sr1fa',
    name: '4U75S2SR1FA',
    manufacturer: 'Haier',
    model: 'FLEXIS MULTI 4 jedinice',
    category: 'multi',
    units: 4,
    outdoorUnit: '4U75S2SR1FA (7.5kW)',
    indoorUnits: [
      'AS20S2SF2FA-G (2.0kW)',
      'AS20S2SF2FA-G (2.0kW)',
      'AS20S2SF2FA-G (2.0kW)',
      'AS25S2SF2FA-G (2.5kW)'
    ],
    price: 3199,
    originalPrice: null,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '7.5 kW',
      maxHeating: '8.2 kW',
      seer: 8.3,
      scop: 5.0,
      energyClass: 'A+++',
      refrigerant: 'R32'
    },
    features: [
      'Premium multi sistem',
      'UV-C sterilizacija',
      'Wi-Fi kontrola',
      'Najtiša vanjska jedinica'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },

  // MAXON MULTI SYSTEMS
  {
    id: 'multi-7',
    slug: 'maxon-multi-2-jedinice-mx-2m14',
    name: 'MX-2M14',
    manufacturer: 'Maxon',
    model: 'COMFORT MULTI 2 jedinice',
    category: 'multi',
    units: 2,
    outdoorUnit: 'MX-2M14 (4.0kW)',
    indoorUnits: [
      'MX-09HC020i (2.0kW)',
      'MX-09HC020i (2.0kW)'
    ],
    price: 1299,
    originalPrice: null,
    warranty: '2 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '4.0 kW',
      maxHeating: '4.2 kW',
      seer: 6.1,
      scop: 4.0,
      energyClass: 'A++',
      refrigerant: 'R32'
    },
    features: [
      'Ekonomičan multi sistem',
      'Individualna kontrola',
      'Follow Me funkcija',
      'Sleep mode'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'multi-8',
    slug: 'maxon-multi-3-jedinice-mx-3m18',
    name: 'MX-3M18',
    manufacturer: 'Maxon',
    model: 'COMFORT MULTI 3 jedinice',
    category: 'multi',
    units: 3,
    outdoorUnit: 'MX-3M18 (5.2kW)',
    indoorUnits: [
      'MX-09HC020i (2.0kW)',
      'MX-09HC020i (2.0kW)',
      'MX-12HC021i (2.5kW)'
    ],
    price: 1899,
    originalPrice: 2099,
    discount: 10,
    warranty: '2 godine',
    image: '/images/products/multi-klima.jpg',
    specifications: {
      maxCooling: '5.2 kW',
      maxHeating: '5.6 kW',
      seer: 6.1,
      scop: 4.0,
      energyClass: 'A++',
      refrigerant: 'R32'
    },
    features: [
      'Ekonomičan multi sistem za 3 prostorije',
      'Individualna kontrola',
      'Turbo mode',
      'Timer funkcija'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  }
];