import type { BaseProduct } from '../types';

// Custom interface for heat pumps matching the existing pattern
interface DizalicaToplina extends BaseProduct {
  category: 'dizalica';
  type: 'monoblok';
  specifications: {
    power: string;
    coolingPower: string;
    heatingPower: string;
    heatingFancoil: string;
    heatingFloor: string;
    coolingFancoil: string;
    coolingFloor: string;
    cop: number;
    eer: number;
    energyClass: string;
    refrigerant: string;
    airFlow: string;
    soundLevel: string;
    dimensions: string;
    waterTemp: string;
    maxCOP: string;
    workingRange: {
      cooling: string;
      heating: string;
      waterCooling: string;
      waterHeating: string;
    };
    controller?: string;
  };
}

// 4 DIZALICE TOPLINE - Haier Super Aqua Monoblok serija
export const dizaliceToplineProducts: DizalicaToplina[] = [
  {
    id: 'dizalica-1',
    slug: 'haier-super-aqua-au052fycra-hw',
    name: 'Haier Super Aqua AU052FYCRA(HW)',
    manufacturer: 'Haier',
    model: 'AU052FYCRA(HW)',
    category: 'dizalica',
    type: 'monoblok',
    price: 2499,
    originalPrice: 2899,
    discount: 14,
    warranty: '2 godine',
    image: 'https://www.klimakoncept.hr/img/19626/3683-haier-super-aqua-au052fycra-hw-klima-koncept-6059159858.jpg',
    images: [
      'https://www.klimakoncept.hr/img/19626/3683-haier-super-aqua-au052fycra-hw-klima-koncept-6059159858.jpg'
    ],
    specifications: {
      power: '5 kW',
      coolingPower: '5 kW',
      heatingPower: '5 kW',
      heatingFancoil: '5 kW',
      heatingFloor: '5,5 kW',
      coolingFancoil: '4,5 kW',
      coolingFloor: '6,50 kW',
      cop: 4.17,
      eer: 4.5,
      energyClass: 'A',
      refrigerant: 'R32',
      airFlow: '2200 m³/h',
      soundLevel: '59 dB',
      dimensions: '920x760x372 mm',
      waterTemp: 'do 60°C',
      maxCOP: 'do 5,05',
      workingRange: {
        cooling: 'od +10°C',
        heating: 'od -20°C',
        waterCooling: '+5°C do +20°C',
        waterHeating: '+20°C do +55°C'
      },
      controller: 'YR-E27 osjetljiv na dodir (uključen)'
    },
    features: [
      'DC inverter tehnologija',
      'Rashladno sredstvo R32',
      'Topla voda do 60°C',
      'Visoki COP do 5,05',
      'Maksimalan komfor',
      'Visoka učinkovitost',
      'Ušteda energije',
      'Tihi rad',
      'Inteligentna tehnologija protiv smrzavanja',
      'Pametna integracija s pametnim sustavima',
      'Inverterska tehnologija (rad do -20°C)',
      'Brzo i pouzdano grijanje',
      'Niska razina buke',
      'Kompaktan dizajn'
    ],
    description: 'Idealna dizalica topline za manje prostore i obiteljske kuće. Model AU052FYCRA(HW) snage 5 kW osigurava optimalno grijanje, hlađenje i pripremu tople vode uz izvanrednu energetsku učinkovitost s COP-om od 4,17. DC inverter tehnologija omogućava stabilan rad i pri vanjskim temperaturama do -20°C.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Novo'
  },
  {
    id: 'dizalica-2',
    slug: 'haier-super-aqua-au082fycra-hw',
    name: 'Haier Super Aqua AU082FYCRA(HW)',
    manufacturer: 'Haier',
    model: 'AU082FYCRA(HW)',
    category: 'dizalica',
    type: 'monoblok',
    price: 3299,
    originalPrice: 3799,
    discount: 13,
    warranty: '2 godine',
    image: 'https://www.klimakoncept.hr/img/19628/3684-haier-super-aqua-au052fycra-hw-klima-koncept-8543161264.jpg',
    images: [
      'https://www.klimakoncept.hr/img/19628/3684-haier-super-aqua-au052fycra-hw-klima-koncept-8543161264.jpg'
    ],
    specifications: {
      power: '7,8 kW',
      coolingPower: '7 kW',
      heatingPower: '7,8 kW',
      heatingFancoil: '7,5 kW',
      heatingFloor: '7,8 kW',
      coolingFancoil: '5,5 kW',
      coolingFloor: '7 kW',
      cop: 4.4,
      eer: 3.4,
      energyClass: 'A',
      refrigerant: 'R32',
      airFlow: '4200 m³/h',
      soundLevel: '60,9 dB',
      dimensions: '950×965×395 mm',
      waterTemp: 'do 60°C',
      maxCOP: 'do 5,05',
      workingRange: {
        cooling: 'od +10°C',
        heating: 'od -20°C',
        waterCooling: '+5°C do +20°C',
        waterHeating: '+20°C do +55°C'
      },
      controller: 'YR-E27 osjetljiv na dodir (uključen)'
    },
    features: [
      'DC inverter tehnologija',
      'Rashladno sredstvo R32',
      'Topla voda do 60°C',
      'Visoki COP do 5,05',
      'Maksimalan komfor',
      'Visoka učinkovitost',
      'Ušteda energije',
      'Tihi rad',
      'Inteligentna tehnologija protiv smrzavanja',
      'Pametna integracija s pametnim sustavima',
      'Inverterska tehnologija (rad do -20°C)',
      'Brzo i pouzdano grijanje',
      'Niska razina buke',
      'Kompaktan dizajn'
    ],
    description: 'Snažnija verzija za srednje velike prostore. Model AU082FYCRA(HW) s grijanom snagom od 7,8 kW pruža izvrsne performanse uz visoku energetsku učinkovitost (COP 4,4). Idealno rješenje za kuće srednjih dimenzija koje zahtijevaju pouzdano grijanje, hlađenje i toplu vodu.',
    inStock: true,
    isOnSale: true,
    isFeatured: false,
    badge: 'Novo'
  },
  {
    id: 'dizalica-3',
    slug: 'haier-super-aqua-au112fycra-hw',
    name: 'Haier Super Aqua AU112FYCRA(HW)',
    manufacturer: 'Haier',
    model: 'AU112FYCRA(HW)',
    category: 'dizalica',
    type: 'monoblok',
    price: 4599,
    originalPrice: 5299,
    discount: 13,
    warranty: '2 godine',
    image: 'https://www.klimakoncept.hr/img/19630/3685-haier-super-aqua-au082fycra-hw-klima-koncept-9755622443.jpg',
    images: [
      'https://www.klimakoncept.hr/img/19630/3685-haier-super-aqua-au082fycra-hw-klima-koncept-9755622443.jpg'
    ],
    specifications: {
      power: '13,5 kW',
      coolingPower: '11 kW',
      heatingPower: '13,5 kW',
      heatingFancoil: '10,5 kW',
      heatingFloor: '11 kW',
      coolingFancoil: '11,5 kW',
      coolingFloor: '13,5 kW',
      cop: 4.22,
      eer: 4.6,
      energyClass: 'A',
      refrigerant: 'R32',
      airFlow: '7200 m³/h',
      soundLevel: '62,7 dB',
      dimensions: '950×1490×380 mm',
      waterTemp: 'do 60°C',
      maxCOP: 'do 5,05',
      workingRange: {
        cooling: 'od +10°C',
        heating: 'od -20°C',
        waterCooling: '+5°C do +20°C',
        waterHeating: '+20°C do +55°C'
      },
      controller: 'YR-E27 osjetljiv na dodir (uključen)'
    },
    features: [
      'DC inverter tehnologija',
      'Rashladno sredstvo R32',
      'Topla voda do 60°C',
      'Visoki COP do 5,05',
      'Maksimalan komfor',
      'Visoka učinkovitost',
      'Ušteda energije',
      'Tihi rad',
      'Inteligentna tehnologija protiv smrzavanja',
      'Pametna integracija s pametnim sustavima',
      'Inverterska tehnologija (rad do -20°C)',
      'Brzo i pouzdano grijanje',
      'Niska razina buke',
      'Kompaktan dizajn'
    ],
    description: 'Moćna dizalica topline za veće prostore i objekte. Model AU112FYCRA(HW) s grijanom snagom od 13,5 kW nudi izvanredne performanse za zahtjevnije primjene. Visok COP od 4,22 i EER od 4,6 osiguravaju izvrsnu energetsku učinkovitost čak i pri visokim opterećenjima.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Novo'
  },
  {
    id: 'dizalica-4',
    slug: 'haier-super-aqua-au162fycra-hw',
    name: 'Haier Super Aqua AU162FYCRA(HW)',
    manufacturer: 'Haier',
    model: 'AU162FYCRA(HW)',
    category: 'dizalica',
    type: 'monoblok',
    price: 5999,
    originalPrice: 6999,
    discount: 14,
    warranty: '2 godine',
    image: 'https://www.klimakoncept.hr/img/19631/3686-3685-haier-super-aqua-au082fycra-hw-klima-koncept-9755622443.jpg',
    images: [
      'https://www.klimakoncept.hr/img/19631/3686-3685-haier-super-aqua-au082fycra-hw-klima-koncept-9755622443.jpg'
    ],
    specifications: {
      power: '16 kW',
      coolingPower: '16 kW',
      heatingPower: '16 kW',
      heatingFancoil: '15 kW',
      heatingFloor: '16 kW',
      coolingFancoil: '14,5 kW',
      coolingFloor: '16 kW',
      cop: 4.15,
      eer: 4.4,
      energyClass: 'A',
      refrigerant: 'R32',
      airFlow: '7200 m³/h',
      soundLevel: '67,4 dB',
      dimensions: '950×1490×380 mm',
      waterTemp: 'do 60°C',
      maxCOP: 'do 5,05',
      workingRange: {
        cooling: 'od +10°C',
        heating: 'od -20°C',
        waterCooling: '+5°C do +20°C',
        waterHeating: '+20°C do +55°C'
      },
      controller: 'YR-E27 osjetljiv na dodir (uključen)'
    },
    features: [
      'DC inverter tehnologija',
      'Rashladno sredstvo R32',
      'Topla voda do 60°C',
      'Visoki COP do 5,05',
      'Maksimalan komfor',
      'Visoka učinkovitost',
      'Ušteda energije',
      'Tihi rad',
      'Inteligentna tehnologija protiv smrzavanja',
      'Pametna integracija s pametnim sustavima',
      'Inverterska tehnologija (rad do -20°C)',
      'Brzo i pouzdano grijanje',
      'Niska razina buke',
      'Kompaktan dizajn'
    ],
    description: 'Najsnažniji model u ponudi, idealan za velike objekte i komercijalne prostore. Model AU162FYCRA(HW) s impresivnih 16 kW snage grijanja i hlađenja predstavlja vrhunsko rješenje za najzahtjevnije primjene. Unatoč velikoj snazi, zadržava odličan COP od 4,15 i tihu radnu karakteristiku.',
    inStock: true,
    isOnSale: true,
    isFeatured: true,
    badge: 'Premium'
  }
];