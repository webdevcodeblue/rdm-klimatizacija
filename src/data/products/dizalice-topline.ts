import type { DizalicaProduct } from '../types';

export const dizaliceProducts: DizalicaProduct[] = [
  // TOSHIBA HEAT PUMPS
  {
    id: 'dizalica-1',
    slug: 'toshiba-estia-5-series-hwsa804h6e',
    name: 'HWS-A804H6E/HWS-804XWHT6-E',
    manufacturer: 'Toshiba',
    model: 'ESTIA 5 Series 8kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 4499,
    originalPrice: 4999,
    discount: 10,
    warranty: '5 godina',
    image: '/images/products/dizalica-topline.jpg',
    images: ['/images/products/dizalica-topline.jpg'],
    specifications: {
      power: '8.0 kW',
      cop: 4.85,
      minTemp: '-25°C',
      maxTemp: '+43°C',
      waterTemp: '60°C',
      energyClass: 'A+++',
      soundLevel: '48 dB',
      refrigerant: 'R32'
    },
    features: [
      'Visoka energetska efikasnost',
      'Rad do -25°C',
      'Temperatura vode do 60°C',
      'Smart Grid Ready',
      'Wi-Fi kontrola',
      'Inverter tehnologija',
      'Tihi rad',
      'Podgrijavanje bazena'
    ],
    description: 'Vrhunska dizalica topline za grijanje i pripremu tople vode.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Premium'
  },
  {
    id: 'dizalica-2',
    slug: 'toshiba-estia-5-series-hwsa1104h6e',
    name: 'HWS-A1104H6E/HWS-1104XWHT6-E',
    manufacturer: 'Toshiba',
    model: 'ESTIA 5 Series 11kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 5299,
    originalPrice: null,
    warranty: '5 godina',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '11.0 kW',
      cop: 4.65,
      minTemp: '-25°C',
      maxTemp: '+43°C',
      waterTemp: '60°C',
      energyClass: 'A+++',
      soundLevel: '51 dB',
      refrigerant: 'R32'
    },
    features: [
      'Za veće objekte',
      'Rad do -25°C',
      'Temperatura vode do 60°C',
      'Smart Grid Ready',
      'Wi-Fi kontrola'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'dizalica-3',
    slug: 'toshiba-estia-r32-hwsa455h8e',
    name: 'HWS-A455H8E/HWS-455H8-E',
    manufacturer: 'Toshiba',
    model: 'ESTIA R32 4.5kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 3299,
    originalPrice: null,
    warranty: '3 godine',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '4.5 kW',
      cop: 4.3,
      minTemp: '-20°C',
      maxTemp: '+43°C',
      waterTemp: '55°C',
      energyClass: 'A++',
      soundLevel: '45 dB',
      refrigerant: 'R32'
    },
    features: [
      'Kompaktna dizajn',
      'Idealna za obiteljske kuće',
      'Tihi rad',
      'Ekonomična potrošnja'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },

  // HAIER HEAT PUMPS
  {
    id: 'dizalica-4',
    slug: 'haier-super-aqua-hawa080pb',
    name: 'HAW-A080PB/HPU080PB',
    manufacturer: 'Haier',
    model: 'SUPER AQUA 8kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 4799,
    originalPrice: 5299,
    discount: 9,
    warranty: '5 godina',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '8.0 kW',
      cop: 5.2,
      minTemp: '-30°C',
      maxTemp: '+48°C',
      waterTemp: '65°C',
      energyClass: 'A+++',
      soundLevel: '42 dB',
      refrigerant: 'R32'
    },
    features: [
      'COP do 5.2',
      'Rad do -30°C',
      'Ultra tihi rad 42dB',
      'Temperatura vode do 65°C',
      'Smart kontrola',
      'Cascade funkcija',
      'Blue Fin premaz',
      'Automatska dijagnoza'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'TOP'
  },
  {
    id: 'dizalica-5',
    slug: 'haier-super-aqua-hawa120pb',
    name: 'HAW-A120PB/HPU120PB',
    manufacturer: 'Haier',
    model: 'SUPER AQUA 12kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 5999,
    originalPrice: null,
    warranty: '5 godina',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '12.0 kW',
      cop: 5.0,
      minTemp: '-30°C',
      maxTemp: '+48°C',
      waterTemp: '65°C',
      energyClass: 'A+++',
      soundLevel: '45 dB',
      refrigerant: 'R32'
    },
    features: [
      'Za velike objekte',
      'Rad do -30°C',
      'Smart kontrola',
      'Visoka efikasnost'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'dizalica-6',
    slug: 'haier-monoblock-hm050pb',
    name: 'HM050PB',
    manufacturer: 'Haier',
    model: 'MONOBLOCK 5kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 2999,
    originalPrice: null,
    warranty: '3 godine',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '5.0 kW',
      cop: 4.2,
      minTemp: '-20°C',
      maxTemp: '+40°C',
      waterTemp: '55°C',
      energyClass: 'A++',
      soundLevel: '48 dB',
      refrigerant: 'R32'
    },
    features: [
      'Monoblock izvedba',
      'Jednostavna instalacija',
      'Kompaktni dizajn',
      'Ekonomična'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },

  // MAXON HEAT PUMPS
  {
    id: 'dizalica-7',
    slug: 'maxon-aqua-mx-hp080',
    name: 'MX-HP080',
    manufacturer: 'Maxon',
    model: 'AQUA HEAT 8kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 3799,
    originalPrice: null,
    warranty: '3 godine',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '8.0 kW',
      cop: 4.0,
      minTemp: '-15°C',
      maxTemp: '+40°C',
      waterTemp: '55°C',
      energyClass: 'A++',
      soundLevel: '52 dB',
      refrigerant: 'R32'
    },
    features: [
      'Pouzdana dizalica topline',
      'Za obiteljske kuće',
      'Auto defrost',
      'Smart control opcija'
    ],
    inStock: true,
    isOnSale: false,
    isFeatured: false
  },
  {
    id: 'dizalica-8',
    slug: 'maxon-aqua-mx-hp120',
    name: 'MX-HP120',
    manufacturer: 'Maxon',
    model: 'AQUA HEAT 12kW',
    category: 'dizalica',
    type: 'zrak-voda',
    price: 4599,
    originalPrice: 4999,
    discount: 8,
    warranty: '3 godine',
    image: '/images/products/dizalica-topline.jpg',
    specifications: {
      power: '12.0 kW',
      cop: 3.8,
      minTemp: '-15°C',
      maxTemp: '+40°C',
      waterTemp: '55°C',
      energyClass: 'A++',
      soundLevel: '54 dB',
      refrigerant: 'R32'
    },
    features: [
      'Za veće objekte',
      'Pouzdana izvedba',
      'Jednostavno održavanje',
      'Daljinsko upravljanje'
    ],
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Akcija'
  }
];