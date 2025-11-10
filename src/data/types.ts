// Type definitions for all product categories

export type Manufacturer = 'Toshiba' | 'Haier' | 'Maxon';
export type ProductCategory = 'klima' | 'multi' | 'dizalica' | 'mikroklima' | 'alati-materijali';

// Base product interface
export interface BaseProduct {
  id: string;
  name: string;
  manufacturer?: Manufacturer;
  model?: string;
  slug: string;
  category: ProductCategory;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  inStock: boolean;
  isOnSale: boolean;
  isFeatured: boolean;
  badge?: string;
  warranty?: string;
  image: string;
  images?: string[];
  description?: string;
  features?: string[];
}

// Klima uređaj specific interface
export interface KlimaProduct extends BaseProduct {
  category: 'klima';
  specifications: {
    power: string;        // "3.5/3.8 kW"
    cooling: string;      // "3.5 kW"
    heating: string;      // "3.8 kW"
    area: string;         // "25-35 m²"
    seer: number;         // 6.1
    scop: number;         // 4.0
    energyClass: string;  // "A++"
    soundLevel: string;   // "19/21 dB"
    refrigerant: string;  // "R32"
    dimensions?: {
      indoor: string;
      outdoor: string;
    };
    weight?: {
      indoor: string;
      outdoor: string;
    };
  };
  wifi?: boolean;
}

// Multi klima system interface
export interface MultiKlimaProduct extends BaseProduct {
  category: 'multi';
  units: number;           // 2, 3, 4
  outdoorUnit: string;
  indoorUnits: string[];
  specifications: {
    maxCooling: string;   // "7.0 kW"
    maxHeating: string;   // "8.0 kW"
    seer: number;
    scop: number;
    energyClass: string;
    refrigerant: string;
  };
}

// Dizalica topline interface
export interface DizalicaProduct extends BaseProduct {
  category: 'dizalica';
  type: 'zrak-voda' | 'zrak-zrak' | 'zemlja-voda';
  specifications: {
    power: string;
    cop: number;          // Coefficient of performance
    minTemp: string;      // "-25°C"
    maxTemp: string;      // "+35°C"
    waterTemp?: string;   // "55°C" for zrak-voda
    energyClass: string;
    soundLevel: string;
    refrigerant: string;
  };
}

// Mikroklima interface
export interface MikroklimaProduct extends BaseProduct {
  category: 'mikroklima';
  subcategory: 'rekuperator' | 'zracna-zavjesa' | 'odvlazivac' | 'prociscivac';
  specifications: {
    airflow?: string;          // "Do 200 m3/h" - PROTOK ZRAKA (Rekuperatori, Zračne zavjese)
    area?: string;             // "35-40 m²" - PRIKLADNO ZA PROSTOR (Odvlaživači, Pročišćivači)
    cooling?: string;          // Optional for some products
    heating?: string;          // Optional for some products
    dehumidification?: string; // "12 l/dan" - for odvlaživači
    energyClass?: string;      // Optional
    soundLevel?: string;       // "19 - 37 dB (A)"
    dimensions?: string;       // "Š × V × D [mm]: 352 × 482 × 240"
    weight?: string;           // "15,5 kg"
    power?: string;            // "0,315kW" - apsorbirana snaga
    voltage?: string;          // "1 ph / 220 - 240 V / 50 Hz"
    filters?: string[];        // Types of filters
  };
}

// Alati i materijali interface
export interface AlatProduct extends BaseProduct {
  category: 'alati-materijali';
  subcategory?: 'daljinski-upravljaci' | 'ventili' | 'prikljucci' | 'instalacijski-materijal';
  specifications?: {
    type?: string;              // "Žičani daljinski upravljač"
    compatibility?: string;     // "Kazetne, kanalne i podstropne jedinice"
    systems?: string;           // "Split i multi split sistemi"
    voltage?: string;           // "220-240V"
    cableLength?: string;       // "5m"
    display?: string;           // "LED indikator"
    mounting?: string;          // "Zidna montaža"
    material?: string;          // For ventili, priključci
    size?: string;              // For ventili, priključci
    quantity?: string;          // For instalacijski materijal
  };
  code?: string;                // Šifra proizvoda (1792)
}

// Union type for all products
export type Product = KlimaProduct | MultiKlimaProduct | DizalicaProduct | MikroklimaProduct | AlatProduct;

// Service type
export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'montaza' | 'servis' | 'ciscenje';
  subcategory?: string;          // "mono-split", "multi-split", "dizalica-topline"
  price: number;                 // 300
  priceInstallments2_12?: number; // 316.66
  priceInstallments13_24?: number; // 333.33
  image: string;
  images?: string[];
  code?: string;                 // Šifra (3586)
  description: string;
  included: string[];            // Što je uključeno u cijenu
  additionalCosts?: {            // Dodatni troškovi
    name: string;
    price: number;
  }[];
  notes?: string[];              // Važne napomene
  warranty?: string;             // Jamstvo
  inStock: boolean;
  badge?: string;
}