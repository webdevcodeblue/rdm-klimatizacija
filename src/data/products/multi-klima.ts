import type { KlimaProduct } from '../types';

// 6 PRODUCTS TOTAL - 2 per manufacturer (Toshiba, Haier, Maxon)
// Data based on klimakoncept.hr product listings
export const multiKlimaProducts: KlimaProduct[] = [
  // ========== TOSHIBA PRODUCTS (2) ==========
  {
    id: 'multi-1',
    slug: 'toshiba-super-daiseikai-ras-b18s4kvpg',
    name: 'RAS-B18S4KVPG-E',
    manufacturer: 'Toshiba',
    model: 'SUPER DAISEIKAI 10 INVERTER',
    category: 'multi',
    price: 927,
    warranty: '3 godine',
    image: '/images/products/multi-klima.jpg',
    images: ['/images/products/multi-klima.jpg', '/images/products/multi-klima-2.jpg'],
    specifications: {
      power: '5.0/5.8 kW',
      cooling: '5.0 kW',
      heating: '5.8 kW',
      area: '40-60 m²',
      seer: 8.6,
      scop: 5.1,
      energyClass: 'A+++',
      soundLevel: '22/25 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '890 x 295 x 215 mm',
        outdoor: 'Vanjska jedinica se bira posebno'
      },
      weight: {
        indoor: '12 kg',
        outdoor: 'Ovisno o vanjskoj jedinici'
      }
    },
    features: [
      'Premium Super Daiseikai 10 serija',
      'Careflow istrujavanje zraka',
      'Ultra pure filter',
      'Automatski režim rada',
      'Eco režim',
      'High power režim',
      'Samočišćenje uređaja',
      'Tihi rad',
      'Timer funkcija',
      'Wi-Fi upravljanje'
    ],
    description: 'SUPER DAISEIKAI 10 INVERTER - unutarnja mat bijela zidna jedinica za multi sustav. Vrhunska Toshiba serija sa naprednim značajkama za maksimalnu udobnost i energetsku učinkovitost. Prikladno za prostor do 60m².',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: 'Premium'
  },
  {
    id: 'multi-2',
    slug: 'toshiba-shorai-edge-ras-b13g3kvsg',
    name: 'RAS-B13G3KVSG-E',
    manufacturer: 'Toshiba',
    model: 'SHORAI EDGE NEW WHITE INVERTER',
    category: 'multi',
    price: 504,
    warranty: '3 godine',
    image: '/images/products/multi-klima-2.jpg',
    images: ['/images/products/multi-klima-2.jpg', '/images/products/multi-klima-3.jpg'],
    specifications: {
      power: '3.5/4.2 kW',
      cooling: '3.5 kW',
      heating: '4.2 kW',
      area: '28-42 m²',
      seer: 8.6,
      scop: 5.1,
      energyClass: 'A+++',
      soundLevel: '19/21 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '795 x 275 x 200 mm',
        outdoor: 'Vanjska jedinica se bira posebno'
      },
      weight: {
        indoor: '9 kg',
        outdoor: 'Ovisno o vanjskoj jedinici'
      }
    },
    features: [
      'Careflow istrujavanje',
      'Ultra pure filter protiv alergena',
      'Automatsko uključivanje',
      'Antialergijski filter',
      'Auto dijagnoza',
      'Automatski režim rada',
      'Eco režim',
      'High power režim',
      'Katehinski filter',
      'Samočišćenje uređaja',
      'Tihi rad (19dB)',
      'Timer',
      'Wi-Fi upravljanje uključeno'
    ],
    description: 'SHORAI EDGE NEW WHITE INVERTER - unutarnja mat bijela jedinica za multi sustav. Učin hlađenja 3,5kW (1,00-4,10)kW, Učin grijanja 4,2kW (1,00-5,30)kW. Prikladno za prostor do 42m². Wi-Fi upravljanje je uključeno u cijenu. Vrhunska japanska kvaliteta.',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: 'Wi-Fi'
  },

  // ========== HAIER PRODUCTS (2) ==========
  {
    id: 'multi-3',
    slug: 'haier-flexis-plus-as25s2sf1fa',
    name: 'AS25S2SF1FA-WH',
    manufacturer: 'Haier',
    model: 'FLEXIS PLUS WI-FI INVERTER',
    category: 'multi',
    price: 549,
    warranty: '5 godina (3+2 uz registraciju)',
    image: '/images/products/multi-klima-3.jpg',
    images: ['/images/products/multi-klima-3.jpg', '/images/products/multi-klima.jpg'],
    specifications: {
      power: '2.5/3.2 kW',
      cooling: '2.5 kW',
      heating: '3.2 kW',
      area: '20-30 m²',
      seer: 8.5,
      scop: 5.1,
      energyClass: 'A+++',
      soundLevel: '19/20 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: '715 x 250 x 190 mm',
        outdoor: 'Vanjska jedinica se bira posebno'
      },
      weight: {
        indoor: '7.5 kg',
        outdoor: 'Ovisno o vanjskoj jedinici'
      }
    },
    features: [
      'Wi-Fi kontrola integrirana',
      'UV-C sterilizacija',
      'Self-cleaning +56°C',
      'Super tihi rad',
      'A-PAM DC inverter kontrola',
      '3D motor tehnologija',
      'Blue Fin zaštita',
      'PID optimizacija',
      'Auto Defrost'
    ],
    description: 'FLEXIS PLUS WI-FI INVERTER - unutarnja mat bijela zidna jedinica za multi sustav. Premium Haier model sa naprednim značajkama uključujući UV-C sterilizaciju i Wi-Fi kontrolu. Prikladno za prostor do 30m². 5 godina garancije uz registraciju.',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: 'TOP'
  },
  {
    id: 'multi-4',
    slug: 'haier-multi-3u70s2sr5fa',
    name: '3U70S2SR5FA',
    manufacturer: 'Haier',
    model: 'MULTI INVERTER VANJSKA',
    category: 'multi',
    price: 1413,
    warranty: '5 godina (3+2 uz registraciju)',
    image: '/images/products/multi-klima.jpg',
    images: ['/images/products/multi-klima.jpg', '/images/products/multi-klima-2.jpg'],
    specifications: {
      power: '7.0/8.6 kW',
      cooling: '7.0 kW',
      heating: '8.6 kW',
      area: '75-80 m²',
      seer: 8.5,
      scop: 5.1,
      energyClass: 'A++',
      soundLevel: '48/52 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: 'Do 3 unutarnje jedinice',
        outdoor: '890 x 790 x 340 mm'
      },
      weight: {
        indoor: 'Do 3 jedinice',
        outdoor: '55 kg'
      }
    },
    features: [
      'Auto Defrost tehnologija',
      'PID optimizacija temperature',
      'Supermatch - 100% mogućnosti kombinacije',
      'A-PAM DC inverter kontrola',
      '3D motor tehnologija',
      'Blue Fin antikorozivna zaštita',
      'Mogućnost spajanja do 3 unutarnje jedinice',
      'Fleksibilna kombinacija snaga'
    ],
    description: 'MULTI INVERTER - vanjska jedinica za multi sustav. Rashladni učin 7,0 kW (2,4-8,4), Učin grijanja 8,6 kW (2,9-10,6). Prikladno za prostor 75-80m². Mogućnost spajanja do 3 unutarnje jedinice. 5 godina garancije uz registraciju.',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: 'Bestseller'
  },

  // ========== MAXON PRODUCTS (2) ==========
  {
    id: 'multi-5',
    slug: 'maxon-comfort-mxo-20d-18hc',
    name: 'MXO-20D-18HC',
    manufacturer: 'Maxon',
    model: 'COMFORT MULTI INVERTER',
    category: 'multi',
    price: 864,
    warranty: '5 godina (3+2 uz registraciju)',
    image: '/images/products/multi-klima-2.jpg',
    images: ['/images/products/multi-klima-2.jpg', '/images/products/multi-klima-3.jpg'],
    specifications: {
      power: '5.3/5.6 kW',
      cooling: '5.3 kW',
      heating: '5.6 kW',
      area: '50-55 m²',
      seer: 6.5,
      scop: 4.1,
      energyClass: 'A++',
      soundLevel: '46/50 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: 'Do 2 unutarnje jedinice',
        outdoor: '720 x 670 x 270 mm'
      },
      weight: {
        indoor: 'Do 2 jedinice',
        outdoor: '39 kg'
      }
    },
    features: [
      'Daljinski upravljač s LCD ekranom',
      'Horizontalno elektromotorno usmjeravanje zraka',
      'Vertikalno ručno usmjeravanje zraka',
      'Wi-Fi upravljanje (opcijski modul)',
      'R32 ekološko rashladno sredstvo',
      'Mogućnost spajanja do 2 unutarnje jedinice',
      'Energetska klasa A++ hlađenje / A+ grijanje'
    ],
    description: 'COMFORT MULTI INVERTER - vanjska jedinica za multi sustav. Rashladni učin 5,3 kW, Učin grijanja 5,6 kW. Prikladno za prostor 50-55m². Mogućnost spajanja do 2 unutarnje jedinice. Odličan omjer cijene i kvalitete. 5 godina garancije uz registraciju.',
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'multi-6',
    slug: 'maxon-comfort-mxo-50e-42hc',
    name: 'MXO-50E-42HC',
    manufacturer: 'Maxon',
    model: 'COMFORT MULTI INVERTER XL',
    category: 'multi',
    price: 1989,
    warranty: '5 godina (3+2 uz registraciju)',
    image: '/images/products/multi-klima-3.jpg',
    images: ['/images/products/multi-klima-3.jpg', '/images/products/multi-klima.jpg', '/images/products/multi-klima-2.jpg'],
    specifications: {
      power: '12.3/12.3 kW',
      cooling: '12.3 kW',
      heating: '12.3 kW',
      area: '110-120 m²',
      seer: 6.5,
      scop: 4.0,
      energyClass: 'A++',
      soundLevel: '54/58 dB',
      refrigerant: 'R32',
      dimensions: {
        indoor: 'Do 5 unutarnjih jedinica',
        outdoor: '946 x 810 x 420 mm'
      },
      weight: {
        indoor: 'Do 5 jedinica',
        outdoor: '82 kg'
      }
    },
    features: [
      'Daljinski upravljač s LCD ekranom',
      'Horizontalno elektromotorno usmjeravanje zraka',
      'Vertikalno ručno usmjeravanje zraka',
      'Wi-Fi upravljanje (opcijski modul)',
      'R32 ekološko rashladno sredstvo',
      'Mogućnost spajanja do 5 unutarnjih jedinica',
      'Idealno za veće objekte',
      'Energetska klasa A++ hlađenje / A grijanje'
    ],
    description: 'COMFORT MULTI INVERTER - vanjska jedinica za multi sustav. Hlađenje: 12,30 kW, Grijanje: 12,30 kW. Prikladno za prostor 110-120m². Mogućnost spajanja do 5 unutarnjih jedinica. Energetska klasa A++ u hlađenju, A u grijanju. Izvrsno rješenje za veće objekte. 5 godina garancije uz registraciju.',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: 'Veliki kapacitet'
  }
];