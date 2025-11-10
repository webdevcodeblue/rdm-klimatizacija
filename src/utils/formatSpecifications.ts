/**
 * Helper funkcije za formatiranje specifikacija proizvoda s mjernim jedinicama
 */

/**
 * Dodaje " kW" na kraj ako vrijednost već nema jedinicu
 */
export function formatPower(value: string | undefined): string {
  if (!value) return '';
  const str = String(value).trim();
  if (str.includes('kW') || str.includes('KW') || str.includes('kw')) {
    return str;
  }
  return `${str} kW`;
}

/**
 * Dodaje " m²" na kraj ako vrijednost već nema jedinicu
 */
export function formatArea(value: string | undefined): string {
  if (!value) return '';
  const str = String(value).trim();
  if (str.includes('m²') || str.includes('m2') || str.includes('M²')) {
    return str;
  }
  return `${str} m²`;
}

/**
 * Dodaje " cm" na kraj ako vrijednost već nema jedinicu
 */
export function formatDimensions(value: string | undefined): string {
  if (!value) return '';
  const str = String(value).trim();
  if (str.includes('cm') || str.includes('CM') || str.includes('mm') || str.includes('MM')) {
    return str;
  }
  return `${str} cm`;
}

/**
 * Dodaje " kg" na kraj ako vrijednost već nema jedinicu
 */
export function formatWeight(value: string | undefined): string {
  if (!value) return '';
  const str = String(value).trim();
  if (str.includes('kg') || str.includes('KG') || str.includes('Kg')) {
    return str;
  }
  return `${str} kg`;
}

/**
 * Dodaje " dB" na kraj ako vrijednost već nema jedinicu (za bučnost)
 */
export function formatSoundLevel(value: string | undefined): string {
  if (!value) return '';
  const str = String(value).trim();
  if (str.includes('dB') || str.includes('db') || str.includes('DB')) {
    return str;
  }
  return `${str} dB`;
}
