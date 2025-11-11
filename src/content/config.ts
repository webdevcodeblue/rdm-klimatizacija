import { defineCollection, z } from 'astro:content';

// ========================================
// HELPER - Pretvara prazne stringove u undefined za number polja
// ========================================
// Decap CMS sprema prazan string ("") kada korisnik obriše number polje
// Ova funkcija to automatski pretvara u undefined
const optionalNumber = (schema: z.ZodNumber) =>
  z.preprocess((val) => val === "" ? undefined : val, schema.optional());

// ========================================
// HELPER - Automatski trimuje whitespace iz stringova
// ========================================
// Sprječava probleme sa duplikatima zbog nevidljivih razmaka
// Primjer: "Maxon " i "Maxon" postaju "Maxon"
const trimmedString = (schema: z.ZodString) =>
  z.preprocess((val) => typeof val === 'string' ? val.trim() : val, schema);

// ========================================
// PRODUCT SCHEMA - Univerzalna schema za sve proizvode
// ========================================

const productSchema = z.object({
  // ==================== OBAVEZNA POLJA ====================
  // uniqueId - Jedinstveni identifikator proizvoda (koristi se za imenovanje .md datoteke)
  // VAŽNO: Mora biti jedinstven, ne smije se ponavljati, i ne može se mijenjati nakon kreiranja
  uniqueId: trimmedString(
    z.string()
      .regex(/^[a-z0-9-]+$/, 'Samo mala slova, brojevi i crtice su dozvoljeni')
      .min(3, 'Minimalno 3 znaka')
      .max(50, 'Maksimalno 50 znakova')
  ),
  name: trimmedString(z.string()),
  manufacturer: trimmedString(z.string()),
  category: z.enum([
    'klima-uredaji',
    'multi-klima',
    'dizalice-topline',
    'mikroklima',
    'alati-materijali',
    'montaza-servis'
  ]),
  image: z.string(),
  inStock: z.boolean().default(true),

  // ==================== OPCIONA POLJA ====================
  model: z.preprocess((val) => typeof val === 'string' ? val.trim() : val, z.string().optional()),
  price: optionalNumber(z.number().positive()), // Cijena je opciona za sve proizvode
  originalPrice: optionalNumber(z.number().positive()),
  discount: optionalNumber(z.number().min(0).max(100)),
  warranty: z.string().optional(),
  description: z.string().optional(),
  badge: z.enum(['Akcija', 'Novo', 'Premium', 'Bestseller', 'Wi-Fi']).optional().nullable(),

  // ==================== GALERIJA SLIKA ====================
  images: z.array(z.string()).default([]),

  // ==================== SPECIFIKACIJE (sve opcione) ====================
  specifications: z.object({
    power: z.string().optional(),
    cooling: z.string().optional(),
    heating: z.string().optional(),
    airflow: z.string().optional(), // Za MIKROKLIMA - protok zraka
    area: z.string().optional(),
    energyClass: z.enum(['A+++', 'A++', 'A+', 'A', 'B', 'C', 'D']).optional(),
    heatingEnergyClass: z.enum(['A+++', 'A++', 'A+', 'A', 'B', 'C', 'D']).optional(),
    seer: optionalNumber(z.number()),
    scop: optionalNumber(z.number()),
    soundLevel: z.string().optional(),
    refrigerant: z.string().optional(),
    // Multi-klima specific fields
    units: z.string().optional(), // Broj jedinica
    totalPower: z.string().optional(), // Ukupna snaga
    // Dizalice topline specific fields
    cop: optionalNumber(z.number()), // COP za dizalice topline
    temperature: z.string().optional(),
    tankVolume: z.string().optional(), // Volumen bojlera
    // Alati i materijali specific fields
    type: z.string().optional(), // Tip proizvoda
    material: z.string().optional(),
    // Shared dimension/weight fields
    dimensions: z.union([
      z.string(), // Simple string format
      z.object({
        indoor: z.string().optional(),
        outdoor: z.string().optional()
      })
    ]).optional(),
    weight: z.union([
      z.string(), // Simple string format
      z.object({
        indoor: z.string().optional(),
        outdoor: z.string().optional()
      })
    ]).optional()
  }).default({}),

  // ==================== FEATURES ====================
  features: z.array(z.string()).default([]),

  // ==================== DOKUMENTI ====================
  infoSheet: z.string().optional().nullable(), // Informacijski list (PDF) - prikazuje se kao poseban gumb
  documents: z.array(z.object({
    name: z.string(),   // Naziv dokumenta (npr. "Upute za montažu")
    url: z.string()     // Putanja do PDF-a
  })).default([]),

  // ==================== SPECIAL FLAGS ====================
  featured: z.boolean().default(false),      // Prikaži na početnoj
  onSale: z.boolean().default(false),        // Prikaži u Akcijama
  popular: z.boolean().default(false),       // Označi kao "Najpopularniji"
  isNew: z.boolean().default(false)          // Označi kao "Novo"
});

// ==================== COLLECTIONS ====================

const products = defineCollection({
  type: 'content',
  schema: productSchema
});

// ========================================
// SERVICE SCHEMA - Za montažu i servis
// ========================================

const serviceSchema = z.object({
  // ==================== OBAVEZNA POLJA ====================
  // uniqueId - Jedinstveni identifikator usluge (koristi se za imenovanje .md datoteke)
  // VAŽNO: Mora biti jedinstven, ne smije se ponavljati, i ne može se mijenjati nakon kreiranja
  uniqueId: trimmedString(
    z.string()
      .regex(/^[a-z0-9-]+$/, 'Samo mala slova, brojevi i crtice su dozvoljeni')
      .min(3, 'Minimalno 3 znaka')
      .max(50, 'Maksimalno 50 znakova')
  ),
  name: trimmedString(z.string()),
  manufacturer: trimmedString(z.string()).default('RDM Klimatizacija'),
  category: z.literal('montaza-servis'),
  image: z.string(),
  inStock: z.boolean().default(true),

  // ==================== OPCIONA POLJA ====================
  price: optionalNumber(z.number().positive()), // Cijena je opciona
  duration: z.string().optional(), // Trajanje usluge
  badge: z.enum(['Hitno', 'Popularno', 'Premium', 'Paket', 'Usluga']).optional().nullable(),

  // ==================== GALERIJA SLIKA ====================
  images: z.array(z.string()).default([]),

  // ==================== ŠTO JE UKLJUČENO / ISKLJUČENO ====================
  features: z.array(z.string()).default([]), // Što je uključeno u cijenu
  excludedFromPrice: z.array(z.string()).default([]), // Što nije uključeno u cijenu

  // ==================== DOKUMENTI ====================
  infoSheet: z.string().optional().nullable(), // Informacijski list (PDF) - prikazuje se kao poseban gumb
  documents: z.array(z.object({
    name: z.string(),   // Naziv dokumenta (npr. "Upute za montažu")
    url: z.string()     // Putanja do PDF-a
  })).default([]),

  // ==================== SPECIAL FLAGS ====================
  featured: z.boolean().default(false), // Prikaži na početnoj
  popular: z.boolean().default(false)   // Označi kao "Popularno"
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.string().optional(),
    features: z.array(z.string()).default([])
  })
});

// ==================== MONTAŽA I SERVIS COLLECTION ====================

const montazaServis = defineCollection({
  type: 'content',
  schema: serviceSchema
});

// ========================================
// BLOG SCHEMA - Za blog postove
// ========================================

const blogSchema = z.object({
  // ==================== OBAVEZNA POLJA ====================
  title: z.string(),
  description: z.string(),
  author: z.string().default('RDM Klimatizacija'),
  publishDate: z.date(),
  image: z.string(),

  // ==================== OPCIONA POLJA ====================
  category: z.string().optional(), // Kategorija blog posta
  tags: z.array(z.string()).default([]), // Tagovi za lakše pretraživanje

  // ==================== SPECIAL FLAGS ====================
  featured: z.boolean().default(false), // Istakni post na vrhu liste
  published: z.boolean().default(true)  // Da li je post objavljen
});

const blog = defineCollection({
  type: 'content',
  schema: blogSchema
});

// ==================== EXPORT ====================

export const collections = {
  'klima-uredaji': products,
  'multi-klima': products,
  'dizalice-topline': products,
  'mikroklima': products,
  'alati-materijali': products,
  'montaza-servis': montazaServis,
  'services': services,
  'blog': blog
};
