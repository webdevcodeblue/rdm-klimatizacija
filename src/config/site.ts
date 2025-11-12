/**
 * CENTRALIZOVANA SITE KONFIGURACIJA
 * =====================================
 *
 * VAŽNO: Ovo je JEDINO MJESTO gdje se definira site URL i lokacija!
 * Svi ostali fajlovi moraju importati podatke iz ovog fajla.
 *
 * NE MIJENJATI URL u drugim fajlovima - mijenjati samo ovdje!
 */

export const SITE_CONFIG = {
  // ==================== PRODUKCIJSKA DOMENA ====================
  // VAŽNO: Finalna produkcijska domena - NE MIJENJATI BEZ DOGOVORA!
  url: 'https://www.rmfrigoteam.hr',

  // ==================== STAGING/TEST DOMENA ====================
  // Privremena domena za testiranje (može se ukloniti kad se prebaci na produkciju)
  stagingUrl: 'https://rmfrigotema.plavecstudio.com',

  // ==================== COMPANY INFORMACIJE ====================
  company: {
    name: 'RDM Klimatizacija',
    legalName: 'RDM Klimatizacija d.o.o.',
    shortName: 'RDM',
    slogan: 'Vaš pouzdani partner za klimatizaciju',
    description: 'RDM Klimatizacija - Profesionalna ugradnja i servis klima uređaja, dizalica topline i ventilacijskih sustava u Hrvatskoj.',
  },

  // ==================== KONTAKT INFORMACIJE ====================
  contact: {
    phone: '+385 91 595 77 52',
    phoneFormatted: '+385915957752', // Za tel: linkove (bez razmaka)
    email: 'rmfrigoteam@gmail.com',

    // PRAVA ADRESA poslovanja
    address: {
      street: 'Ul. Drage Grdenića 7',
      city: 'Križevci',
      postalCode: '48260',
      country: 'Hrvatska',
      countryCode: 'HR',

      // Geografske koordinate za Google Maps / Schema.org
      // Križevci centar - približne koordinate
      coordinates: {
        latitude: 46.0222,
        longitude: 16.5466,
      },

      // Formatirana adresa za prikaz
      formatted: 'Ul. Drage Grdenića 7, 48260 Križevci, Hrvatska',

      // Google Maps link
      mapUrl: 'https://www.google.com/maps?q=46.0222,16.5466',
    },

    // Radno vrijeme
    workingHours: {
      weekdays: 'Pon-Pet: 08:00-17:00',
      saturday: 'Sub: 08:00-13:00',
      sunday: 'Nedjelja: Zatvoreno',
      formatted: 'Mo-Fr 08:00-17:00, Sa 08:00-13:00',
    },
  },

  // ==================== SOCIAL MEDIA ====================
  social: {
    facebook: 'https://www.facebook.com/rmfrigoteam',
    instagram: 'https://www.instagram.com/rmfrigoteam',
    linkedin: 'https://www.linkedin.com/company/rmfrigoteam',
    youtube: 'https://www.youtube.com/@rmfrigoteam',
  },

  // ==================== SEO DEFAULTS ====================
  seo: {
    defaultTitle: 'RDM Klimatizacija - Profesionalna ugradnja i servis klima uređaja',
    titleTemplate: '%s | RDM Klimatizacija',
    defaultDescription: 'RDM Klimatizacija - voditelj u prodaji, ugradnji i servisu klima uređaja, dizalica topline i ventilacijskih sustava u Hrvatskoj. Ovlašteni serviser za Mitsubishi, Daikin, Gree.',
    defaultKeywords: 'klima uređaji, dizalice topline, servis klima, ugradnja klima, Mitsubishi, Daikin, Gree, ventilacija, Križevci, Hrvatska',
    ogImage: '/images/og-image.jpg',
    twitterHandle: '@rmfrigoteam',
    language: 'hr',
    locale: 'hr_HR',
  },

  // ==================== BRAND INFORMACIJE ====================
  brand: {
    logo: '/logo.png',
    favicon: '/favicon.ico',
    brandColor: '#0056B3', // Primarna boja branda
    brandColorRGB: '0, 86, 179',
  },

  // ==================== BUSINESS INFORMACIJE ====================
  business: {
    type: 'HVACBusiness', // Schema.org type
    foundedYear: 2015,
    priceRange: '€€',
    areaServed: 'Croatia',
    serviceArea: ['Koprivničko-križevačka županija', 'Sjeverna Hrvatska', 'Cijela Hrvatska'],

    // Certifikati i ovlaštenja
    certifications: [
      'Ovlašteni serviser Mitsubishi',
      'Ovlašteni serviser Daikin',
      'Ovlašteni serviser Gree',
      'Ovlašteni serviser Haier',
      'Ovlašteni serviser Toshiba',
    ],

    // Plaćanje i dostava
    payment: {
      methods: ['Gotovina', 'Kartice', 'Virman', 'Obročna otplata'],
      currency: 'EUR',
      freeShippingThreshold: 200, // Besplatna dostava iznad 200€
    },

    // Garancije
    warranty: {
      standard: '2 godine',
      extended: 'Do 7 godina',
    },
  },
} as const;

// ==================== HELPER FUNKCIJE ====================

/**
 * Dobij punu URL adresu za datu putanju
 * @param path - Putanja (npr. '/klima-uredaji')
 * @returns Puna URL adresa
 */
export function getFullUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Dobij punu URL adresu za sliku
 * @param imagePath - Putanja do slike
 * @returns Puna URL adresa slike
 */
export function getImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return getFullUrl(imagePath);
}

/**
 * Formatiraj telefon za tel: link (bez razmaka i crtica)
 * @param phone - Telefon broj
 * @returns Formatiran telefon za link
 */
export function formatPhoneForLink(phone: string): string {
  return phone.replace(/[\s\-\(\)]/g, '');
}

/**
 * Dobij strukturirane podatke za organizaciju (Schema.org)
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': SITE_CONFIG.business.type,
    'name': SITE_CONFIG.company.name,
    'legalName': SITE_CONFIG.company.legalName,
    'description': SITE_CONFIG.company.description,
    'url': SITE_CONFIG.url,
    'logo': getImageUrl(SITE_CONFIG.brand.logo),
    'telephone': SITE_CONFIG.contact.phone,
    'email': SITE_CONFIG.contact.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SITE_CONFIG.contact.address.street,
      'addressLocality': SITE_CONFIG.contact.address.city,
      'postalCode': SITE_CONFIG.contact.address.postalCode,
      'addressCountry': SITE_CONFIG.contact.address.countryCode,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SITE_CONFIG.contact.address.coordinates.latitude,
      'longitude': SITE_CONFIG.contact.address.coordinates.longitude,
    },
    'openingHours': SITE_CONFIG.contact.workingHours.formatted,
    'priceRange': SITE_CONFIG.business.priceRange,
    'areaServed': {
      '@type': 'Country',
      'name': SITE_CONFIG.contact.address.country,
    },
    'sameAs': [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.youtube,
    ].filter(Boolean), // Ukloni prazne social media linkove
  };
}

// Exportaj kao default također
export default SITE_CONFIG;
