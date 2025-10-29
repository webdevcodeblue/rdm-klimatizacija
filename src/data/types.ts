// Type definitions for all product categories

export type Manufacturer = 'Toshiba' | 'Haier' | 'Maxon';
export type ProductCategory = 'klima' | 'multi' | 'dizalica' | 'mikroklima' | 'alati';

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
  specifications: {
    cooling: string;
    area: string;
    energyClass: string;
    soundLevel: string;
    dimensions: string;
    weight: string;
    portability: boolean;
  };
}

// Alati i materijali interface
export interface AlatiProduct extends BaseProduct {
  category: 'alati';
  subcategory: 'cijevi' | 'drzaci' | 'alati' | 'oprema';
  specifications?: {
    material?: string;
    size?: string;
    compatibility?: string;
    quantity?: string;
  };
}

// Union type for all products
export type Product = KlimaProduct | MultiKlimaProduct | DizalicaProduct | MikroklimaProduct | AlatiProduct;

// Service type
export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'montaza' | 'servis' | 'ciscenje';
  price?: string;        // "od 150€"
  description: string;
  features: string[];
  duration?: string;     // "2-3 sata"
}