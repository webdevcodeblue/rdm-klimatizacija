/**
 * Centralized category path configuration
 * Used across ProductCard, ProductShowcase, and RelatedProducts components
 *
 * When adding a new category:
 * 1. Add the category to this map
 * 2. Create the corresponding content collection
 * 3. Create the category index and [slug] pages
 *
 * No need to update individual components - they all import from here!
 */

export const CATEGORY_PATHS = {
  'klima-uredaji': '/klima-uredaji',
  'multi-klima': '/multi-klima',
  'dizalice-topline': '/dizalice-topline',
  'mikroklima': '/mikroklima',
  'alati-materijali': '/alati-materijali',
  'montaza-servis': '/montaza-servis'
} as const;

export type CategoryKey = keyof typeof CATEGORY_PATHS;

/**
 * Get category path by key with fallback
 */
export function getCategoryPath(category: string): string {
  return CATEGORY_PATHS[category as CategoryKey] || '/klima-uredaji';
}
