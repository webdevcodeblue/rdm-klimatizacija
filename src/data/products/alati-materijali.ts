import type { AlatProduct } from '../types';

// ALATI I MATERIJALI PRODUCTS
// Data based on klimakoncept.hr listings
// Categories: Daljinski upravljači, Ventili, Priključci, Instalacijski materijal
export const alatProducts: AlatProduct[] = [
  // ========== DALJINSKI UPRAVLJAČI ==========
  {
    id: 'alat-1',
    slug: 'mitsubishi-pac-yt52cra-k-zicani-daljinski',
    name: 'MITSUBISHI PAC-YT52CRA-K',
    manufacturer: 'Mitsubishi',
    model: 'PAC-YT52CRA-K',
    category: 'alati-materijali',
    subcategory: 'daljinski-upravljaci',
    price: 153,
    originalPrice: undefined,
    discount: undefined,
    warranty: '3 godine',
    image: '/images/products/daljinski.jpg',
    images: ['/images/products/daljinski.jpg'],
    specifications: {
      type: 'Žičani daljinski upravljač',
      compatibility: 'Kazetne, kanalne i podstropne jedinice',
      systems: 'Split i multi split sistemi',
      voltage: undefined,
      cableLength: undefined,
      display: 'LED indikator',
      mounting: 'Zidna montaža'
    },
    features: [
      'Uključivanje/isključivanje',
      'Podešavanje brzine istrujavanja',
      'Podešavanje temperature u prostoru',
      'Jednostavan za instalaciju',
      'Jednostavan za korištenje',
      'Elegantan dizajn',
      'LED indikator rada'
    ],
    description: 'MITSUBISHI PAC-YT52CRA-K je jednostavan žičani daljinski upravljač kompatibilan sa kazetnim, kanalnim i podstropnim jedinicama split i multi split sistema. Omogućava kontrolu uključivanja/isključivanja, brzine istrujavanja i podešavanja temperature u prostoru. Jednostavan za instalaciju i korištenje uz elegantan dizajn.',
    inStock: true,
    isOnSale: false,
    isFeatured: true,
    badge: undefined,
    code: '1792'
  }
];
