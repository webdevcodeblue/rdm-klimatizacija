// ========================================
// SLUG SANITIZATION za hrvatske znakove
// Automatski pretvara č, ć, đ, š, ž u ASCII
// ========================================

// Funkcija za čišćenje slugova
function sanitizeSlug(slug) {
  if (!slug) return '';

  // Mapa hrvatskih znakova u ASCII ekvivalente
  const charMap = {
    'č': 'c', 'Č': 'C',
    'ć': 'c', 'Ć': 'C',
    'đ': 'd', 'Đ': 'D',
    'š': 's', 'Š': 'S',
    'ž': 'z', 'Ž': 'Z',
    // Dodatni znakovi
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
    'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
    'ñ': 'n', 'ç': 'c',
    'ß': 'ss'
  };

  // Pretvori u mala slova
  let cleanSlug = slug.toLowerCase();

  // Zamijeni hrvatske znakove
  cleanSlug = cleanSlug.replace(/./g, char => charMap[char] || char);

  // Zamijeni razmake i specijalne znakove sa crticom
  cleanSlug = cleanSlug
    .replace(/\s+/g, '-')           // Razmaci -> crtice
    .replace(/[^\w\-]+/g, '')       // Ukloni sve osim slova, brojeva i crtica
    .replace(/\-\-+/g, '-')         // Duplirane crtice -> jedna crtica
    .replace(/^-+/, '')             // Ukloni crtice na početku
    .replace(/-+$/, '');            // Ukloni crtice na kraju

  return cleanSlug;
}

// Registruj template za sve kolekcije
if (window.CMS) {
  // Custom template filter za sanitizaciju
  window.CMS.registerPreviewTemplate('klima-uredaji', () => null);
  window.CMS.registerPreviewTemplate('multi-klima', () => null);
  window.CMS.registerPreviewTemplate('dizalice-topline', () => null);
  window.CMS.registerPreviewTemplate('mikroklima', () => null);
  window.CMS.registerPreviewTemplate('alati-materijali', () => null);
  window.CMS.registerPreviewTemplate('montaza-servis', () => null);
}

// Eksportuj funkciju za korištenje
window.sanitizeSlug = sanitizeSlug;
