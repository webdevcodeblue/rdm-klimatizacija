import type { Service } from '../types';

// MONTAŽA I SERVIS
// Data based on klimakoncept.hr listings
// Categories: Montaža, Servis, Čišćenje
export const montazaServisServices: Service[] = [
  // ========== MONTAŽA ==========
  {
    id: 'montaza-1',
    slug: 'montaza-zidnog-podnog-klima-uredaja-do-4-5kw',
    name: 'MONTAŽA ZIDNOG ILI PODNOG KLIMA UREĐAJA SNAGE DO 4,5 kW u hlađenju - uključeno do 3m svih instalacija',
    category: 'montaza',
    subcategory: 'mono-split',
    price: 300,
    priceInstallments2_12: 316.66,
    priceInstallments13_24: 333.33,
    image: '/images/products/montaza-klime.png',
    images: ['/images/products/montaza-klime.png'],
    code: '3586',
    description: 'Za montažu zidne ili podne unutarnje i vanjske jedinice na visini do 5m. Uključena je dobava i montaža do 3 m svih instalacija i proboj jednog zida. Svaki dodatni metar instalacije između unutarnje i vanjske jedinice naplaćuje se posebno. Jamstvo na montažu do isteka tvorničkog jamstva za klima uređaj. Ovlaštenu montažu klima uređaja kupljenih u Klima konceptu vršimo u cijeloj Hrvatskoj.',
    included: [
      'Dobava i montaža do 3 m svih instalacija',
      'Proboj jednog zida (do 40 cm debljine)',
      'Potrošni materijal',
      'Montaža obje jedinice',
      'Spajanja, vakumiranje i testiranje',
      'Čišćenje mjesta rada'
    ],
    additionalCosts: [
      { name: 'Dodatni odvod vode', price: 10 },
      { name: 'Dodatno napajanje', price: 10 },
      { name: 'Dodatni proboj zida', price: 25 },
      { name: 'Dodatna instalacija (po metru)', price: 30 }
    ],
    notes: [
      'Montiramo isključivo uređaje koje prodamo',
      'Za otoke nadoplata montažeru: 50€',
      'Skela ili auto dizalica se naplaćuje posebno',
      'Moguća nadoplata za punjenje plinom ako instalacija presježe tvornički preporučene duljine'
    ],
    warranty: 'Do isteka tvorničkog jamstva za klima uređaj',
    inStock: true,
    badge: undefined
  }
];
