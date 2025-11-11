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
 * Shows warning in development mode if category doesn't exist
 */
export function getCategoryPath(category: string, productName?: string): string {
  const path = CATEGORY_PATHS[category as CategoryKey];

  // Development warning for unknown categories
  if (!path && import.meta.env.DEV) {
    console.warn(
      `⚠️ [getCategoryPath] Unknown category: "${category}"${productName ? ` for product "${productName}"` : ''}. ` +
      `Falling back to /klima-uredaji. Add this category to CATEGORY_PATHS in src/config/categories.ts!`
    );
  }

  return path || '/klima-uredaji';
}
