# Product Adapters System

## Overview

The Product Adapters system provides a unified interface for accessing product data across different product categories. Each category (klima-uredaji, multi-klima, dizalice-topline, etc.) has its own schema with different field names and structures. The adapters normalize these differences so that templates can work with all product types.

## Problem

Originally, the product listing and detail pages were designed specifically for `klima-uredaji` which has a complex schema with nested objects like:
- `pricing.salePrice` and `pricing.regularPrice`
- `availability.inStock` and `availability.stockQuantity`
- `featuredImage.url` and `featuredImage.alt`

Other categories have simpler schemas:
- `price` (single number, not an object)
- `inStock` (boolean, not an object)
- `image` (string URL, not an object)

This caused errors when trying to display products from other categories.

## Solution

Created adapter functions in `product-adapters.ts` that extract data from any product type and return it in a normalized format.

## Available Adapters

### `getProductPrice(product: ProductEntry): ProductPrice`

Returns normalized price information:
```typescript
{
  current: number;          // Current price (sale price if available, otherwise regular)
  original?: number;        // Original price (only if on sale)
  discountPercentage?: number;  // Discount percentage (only if on sale)
  currency: string;         // Currency code (default: 'EUR')
  vatIncluded: boolean;     // Whether VAT is included
}
```

### `getProductImage(product: ProductEntry): ProductImage | null`

Returns normalized image information:
```typescript
{
  url: string;    // Image URL
  alt: string;    // Alt text
}
```

Returns `null` if no image is available.

### `getProductAvailability(product: ProductEntry): ProductAvailability`

Returns normalized availability information:
```typescript
{
  inStock: boolean;
  stockQuantity?: number;
}
```

### `getProductDescription(product: ProductEntry): string`

Returns the product description. Checks both `shortDescription` and `description` fields.

### `isProductFeatured(product: ProductEntry): boolean`

Checks if a product is featured. Looks at both `displayControl.featured` and `featured` fields.

### `formatPrice(price: number, currency?: string): string`

Formats a price number into a localized currency string (e.g., "2.499,00 €").

## Usage Examples

### In Product Listing Page

```typescript
import {
  getProductPrice,
  getProductImage,
  getProductAvailability,
  isProductFeatured
} from '@/lib/content/product-adapters';

// Get normalized data
const priceInfo = getProductPrice(product);
const imageInfo = getProductImage(product);
const availability = getProductAvailability(product);
const featured = isProductFeatured(product);

// Use the data
<OptimizedImage src={imageInfo.url} alt={imageInfo.alt} />
<span>{formatPrice(priceInfo.current)}</span>
{priceInfo.original && <span>{formatPrice(priceInfo.original)}</span>}
{availability.inStock && <span>Dostupno</span>}
```

### In Product Detail Page

```typescript
// Get normalized product data
const priceInfo = getProductPrice(product);
const imageInfo = getProductImage(product);
const availability = getProductAvailability(product);

// Display price with optional sale markup
<span>{formatPrice(priceInfo.current)}</span>
{priceInfo.original && (
  <>
    <span>{formatPrice(priceInfo.original)}</span>
    <span>-{priceInfo.discountPercentage}%</span>
  </>
)}
```

## Updated Modules

The following modules have been updated to use the adapter functions:

1. **Product Listing Page** (`src/pages/proizvodi/[category]/index.astro`)
   - Uses adapters for rendering product cards
   - All categories now work correctly

2. **Product Detail Page** (`src/pages/proizvodi/[category]/[...slug].astro`)
   - Uses adapters for main product display
   - Uses adapters for related products section

3. **Filters Module** (`src/lib/content/filters.ts`)
   - `filterByPrice()` - uses `getProductPrice()`
   - `filterByStock()` - uses `getProductAvailability()`
   - `filterBySale()` - uses `getProductPrice()`
   - Helper functions updated

## Schema Compatibility

### klima-uredaji Schema
```yaml
pricing:
  regularPrice: 2499
  salePrice: 1999
  currency: EUR
  vatIncluded: true
availability:
  inStock: true
  stockQuantity: 5
featuredImage:
  url: /images/product.jpg
  alt: Product image
shortDescription: "Product description"
displayControl:
  status: active
  featured: true
```

### multi-klima, dizalice-topline, mikroklima Schema
```yaml
price: 4499
image: /images/product.jpg
description: "Product description"
# No explicit availability field - defaults to in stock
# No explicit featured field
```

### alati-materijali Schema
```yaml
price: 299
image: /images/tool.jpg
description: "Tool description"
inStock: true
```

## Future Improvements

1. **Sort Module**: Still needs to be updated to use adapters for sorting by price and availability
2. **Collections Module**: The `isOnSale()` helper function needs to use adapters
3. **Additional Adapters**: Could add adapters for:
   - Specifications (different structures per category)
   - Gallery images
   - Documents/PDFs
   - Videos

## Testing

All product categories have been tested and verified to work:
- ✅ klima-uredaji - Complex schema with nested objects
- ✅ multi-klima - Simple schema with basic fields
- ✅ dizalice-topline - Simple schema
- ✅ mikroklima - Simple schema
- ✅ alati-materijali - Simple schema with inStock field

Both listing pages and detail pages work correctly for all categories.
