# 🚀 RDM Klimatizacija - Complete Development Plan

## 📊 AI-Assisted Development Timeline

**Estimated time with AI coding (Sonnet 4.5 + Opus 4.1): 2-3 dana (max 4 dana)**

> This plan is optimized for vibe coding with Claude AI assistants. Tasks are broken down for efficient AI execution.

---

## 🤖 AI Model Usage Strategy

### **Claude Sonnet 4.5** - Primary Workhorse
**Use for:**
- ✅ Component creation (75% of work)
- ✅ Styling (scoped CSS)
- ✅ API integrations
- ✅ CRUD operations
- ✅ Filtering logic
- ✅ Responsive design fixes
- ✅ Bug fixes
- ✅ Refactoring

**Why:** Fast, cost-effective, excellent at following instructions, great for repetitive tasks

**Estimated usage:** 80% of development time

---

### **Claude Opus 4.1** - Complex Problem Solver
**Use for:**
- ✅ Architecture decisions (Strapi schema design)
- ✅ Complex algorithm implementations
- ✅ Performance optimization strategies
- ✅ Security considerations
- ✅ Advanced filtering/search logic
- ✅ State management patterns
- ✅ Code review of critical sections

**Why:** Superior reasoning, better at complex architectural decisions, deeper understanding

**Estimated usage:** 20% of development time

---

## 📅 Development Phases

---

## **PHASE 0: Pre-Development Setup** ⏱️ 30 minutes
**AI Model:** Sonnet 4.5

### Tasks:
- [ ] Review current codebase structure
- [ ] Document all existing components
- [ ] Create component inventory
- [ ] Identify reusable patterns

**Deliverables:**
- Component inventory document
- Current architecture overview

---

## **PHASE 1: Strapi CMS Setup & Configuration** ⏱️ 4-6 hours
**AI Model:** Opus 4.1 (architecture) → Sonnet 4.5 (implementation)

### 1.1 Strapi Installation (30 min)
**AI Task for Sonnet:**
```
Install Strapi CMS:
- npx create-strapi-app@latest rdm-strapi
- Choose SQLite for development
- Configure admin panel
- Create first admin user
```

### 1.2 Content Types Design (1 hour)
**AI Task for Opus 4.1:**
```
Design optimal Strapi content type schema for:
- Products with all specs (power, area, SEER, SCOP, etc.)
- Categories (KLIMA UREĐAJI, MULTI KLIMA, etc.)
- Manufacturers (Daikin, Mitsubishi, Samsung, LG, etc.)
- Define all relationships
- Consider future scalability
```

**Expected Opus Output:**
- Complete content type schemas
- Relationship diagrams
- Field definitions with validation rules

### 1.3 Content Types Creation (2 hours)
**AI Task for Sonnet 4.5:**
```
Create following content types in Strapi:

1. **Product** (Collection Type)
   Fields:
   - name (Text, required)
   - slug (UID from name, required)
   - description (Rich Text)
   - short_description (Text, 200 chars)
   - price (Decimal, required)
   - old_price (Decimal) - for discounts
   - power_kw (Decimal) - heating/cooling power
   - area_m2 (Number) - recommended area
   - seer (Decimal) - energy efficiency cooling
   - scop (Decimal) - energy efficiency heating
   - energy_class (Enumeration: A+++, A++, A+, A, B, C)
   - noise_level_indoor (Number) - dB
   - noise_level_outdoor (Number) - dB
   - refrigerant (Text) - e.g., R32
   - wifi_enabled (Boolean)
   - features (JSON) - array of feature strings
   - specifications (JSON) - detailed specs
   - images (Media - Multiple)
   - main_image (Media - Single)
   - datasheet_pdf (Media - Single)
   - category (Relation → Category, many-to-one)
   - manufacturer (Relation → Manufacturer, many-to-one)
   - is_featured (Boolean)
   - is_on_sale (Boolean)
   - stock_status (Enumeration: in_stock, out_of_stock, pre_order)
   - meta_title (Text) - SEO
   - meta_description (Text) - SEO

2. **Category** (Collection Type)
   Fields:
   - name (Text, required)
   - slug (UID from name)
   - description (Text)
   - icon_name (Text) - for SVG icon selection
   - order (Number) - display order
   - products (Relation → Product, one-to-many)

3. **Manufacturer** (Collection Type)
   Fields:
   - name (Text, required)
   - slug (UID from name)
   - logo (Media)
   - description (Text)
   - website (Text)
   - country (Text)
   - products (Relation → Product, one-to-many)

4. **Inquiry** (Collection Type)
   Fields:
   - name (Text, required)
   - email (Email, required)
   - phone (Text)
   - message (Text)
   - product (Relation → Product, many-to-one)
   - services (JSON) - requested services
   - status (Enumeration: new, contacted, closed)
   - created_at (DateTime)
```

### 1.4 Sample Data Entry (1-2 hours)
**AI Task for Sonnet 4.5:**
```
Create 15-20 sample products:
- 5 klima uređaji (different manufacturers, powers)
- 3 multi klima systems
- 4 dizalice topline
- 2 mikroklima units
- 1-2 akcije (products on sale)

Include realistic data:
- Prices: 500€ - 3000€
- Power: 2.5kW - 7kW
- Area: 20m² - 100m²
- SEER: 6.5 - 8.5
- SCOP: 3.5 - 5.2
```

### 1.5 Strapi API Configuration (30 min)
**AI Task for Sonnet 4.5:**
```
Configure Strapi API:
- Enable public access to Product, Category, Manufacturer (read-only)
- Secure Inquiry endpoint (create only)
- Generate API token for Astro
- Configure CORS for localhost:4321
- Set up media upload settings
```

**Phase 1 Deliverables:**
- ✅ Fully configured Strapi CMS
- ✅ All content types created
- ✅ 15-20 sample products
- ✅ API tokens ready
- ✅ Documentation of schema

---

## **PHASE 2: Astro ↔ Strapi Integration** ⏱️ 3-4 hours
**AI Model:** Sonnet 4.5

### 2.1 Environment Setup (15 min)
**AI Task:**
```
Create .env file:
- STRAPI_URL=http://localhost:1337
- STRAPI_API_TOKEN=your-token
- Add .env to .gitignore
- Create .env.example template
```

### 2.2 API Library Creation (1 hour)
**AI Task:**
```
Create src/lib/strapi.ts with functions:
- fetchProducts(filters?: FilterOptions)
- fetchProductBySlug(slug: string)
- fetchCategories()
- fetchManufacturers()
- fetchFeaturedProducts()
- submitInquiry(data: InquiryData)

Include TypeScript types for all data structures.
Use proper error handling.
```

### 2.3 Type Definitions (30 min)
**AI Task:**
```
Create src/types/strapi.ts with interfaces:
- Product
- Category
- Manufacturer
- ProductFilters
- InquiryData
- StrapiResponse<T>
```

### 2.4 Test Integration (30 min)
**AI Task:**
```
Update /proizvodi/index.astro to:
- Fetch real products from Strapi
- Display in existing ProductCard components
- Verify images load correctly
- Test pagination
```

### 2.5 Dynamic Product Pages (1 hour)
**AI Task:**
```
Create /proizvodi/[slug].astro:
- Fetch product by slug
- Display full product details
- Image gallery
- Specifications table
- Inquiry button
- Related products section
- SEO meta tags from Strapi
```

**Phase 2 Deliverables:**
- ✅ Complete Strapi API library
- ✅ TypeScript types
- ✅ Products page showing real data
- ✅ Individual product pages working
- ✅ Images loading from Strapi

---

## **PHASE 3: Advanced Filtering & Search** ⏱️ 4-5 hours
**AI Model:** Opus 4.1 (algorithm design) → Sonnet 4.5 (implementation)

### 3.1 Filter Algorithm Design (1 hour)
**AI Task for Opus 4.1:**
```
Design efficient filtering system:
- Multi-criteria filtering (category, manufacturer, price, power, area)
- Search functionality (fuzzy search in name, description)
- Real-time filter updates
- URL state management (filters in query params)
- Performance optimization for 100+ products
```

### 3.2 Enhanced ProductFilter Component (2 hours)
**AI Task for Sonnet 4.5:**
```
Refactor src/components/products/ProductFilter.astro:
- Dynamic categories from Strapi
- Dynamic manufacturers from Strapi
- Price range slider (min/max from Strapi data)
- Power range slider
- Area range slider
- Search input with debouncing
- "Clear all filters" button
- Active filters display
- Mobile-responsive accordion filters
```

### 3.3 Filter State Management (1 hour)
**AI Task for Sonnet 4.5:**
```
Implement client-side filtering:
- URL query params for filter state
- Browser history navigation
- Filter persistence on page reload
- Loading states during filtering
- "No results" message
- Results count display
```

### 3.4 Search Functionality (1 hour)
**AI Task for Sonnet 4.5:**
```
Add search features:
- Search in product name, description
- Highlight search terms in results
- Search suggestions/autocomplete
- Recent searches (localStorage)
```

**Phase 3 Deliverables:**
- ✅ Working multi-criteria filters
- ✅ Search functionality
- ✅ URL state management
- ✅ Mobile-responsive filters
- ✅ Performance optimized

---

## **PHASE 4: Product Pages Enhancement** ⏱️ 3-4 hours
**AI Model:** Sonnet 4.5

### 4.1 Product Detail Page (2 hours)
**AI Task:**
```
Enhance /proizvodi/[slug].astro:

Layout sections:
1. Hero section
   - Image gallery (main + thumbnails)
   - Product name & category
   - Price (with old price if on sale)
   - Stock status badge
   - Quick specs (power, area, SEER, energy class)
   - "Send Inquiry" CTA button

2. Tabs section
   - Overview (description, features)
   - Specifications (full table)
   - Downloads (datasheet PDF)

3. Related products carousel
   - Same category
   - Similar power range

All fully responsive with scoped styles.
```

### 4.2 Image Gallery Component (1 hour)
**AI Task:**
```
Create src/components/products/ProductGallery.astro:
- Main image display
- Thumbnail navigation
- Lightbox on click
- Zoom on hover
- Mobile swipe support
- Lazy loading
```

### 4.3 Specifications Component (30 min)
**AI Task:**
```
Create src/components/products/SpecificationsTable.astro:
- Display all product specs in organized table
- Grouped by category (General, Performance, Energy, etc.)
- Icons for key specs
- Responsive table (cards on mobile)
```

### 4.4 Related Products (30 min)
**AI Task:**
```
Add related products logic:
- Fetch 4-6 similar products
- Display in carousel
- Same ProductCard component
- Navigation arrows
```

**Phase 4 Deliverables:**
- ✅ Complete product detail pages
- ✅ Image gallery with lightbox
- ✅ Specifications display
- ✅ Related products working
- ✅ Fully responsive

---

## **PHASE 5: Inquiry Form & Contact** ⏱️ 2-3 hours
**AI Model:** Sonnet 4.5

### 5.1 Enhanced Inquiry Modal (1 hour)
**AI Task:**
```
Update src/components/InquiryModal.astro:
- Pre-fill product name if opened from product page
- Form validation (client-side)
- GDPR consent checkbox
- reCAPTCHA (optional)
- Submit to Strapi API
- Success/error messages
- Loading state
```

### 5.2 Contact Page (1 hour)
**AI Task:**
```
Create /kontakt.astro:
- Contact form (same as inquiry modal)
- Company info (address, phone, email)
- Google Maps embed
- Working hours
- Social media links
- Scoped responsive styles
```

### 5.3 Form Submission Handling (30 min)
**AI Task:**
```
Implement form submission:
- POST to Strapi API
- Email notification setup (Strapi email plugin)
- Form validation
- Error handling
- Success confirmation
```

**Phase 5 Deliverables:**
- ✅ Working inquiry forms
- ✅ Contact page
- ✅ Form validation
- ✅ Email notifications
- ✅ Success/error states

---

## **PHASE 6: Additional Pages** ⏱️ 2-3 hours
**AI Model:** Sonnet 4.5

### 6.1 About Page (45 min)
**AI Task:**
```
Create /o-nama.astro:
- Company history
- Team section (optional)
- Mission & values
- Certifications
- Awards/achievements
- Image gallery
- Scoped responsive styles
```

### 6.2 Services Pages (1 hour)
**AI Task:**
```
Create pages:
- /montaza.astro - Installation services
- /servis.astro - Maintenance & repair services
- /savjetovanje.astro - Consultation services

Each with:
- Service description
- Process steps
- Pricing info (if applicable)
- CTA to contact
- FAQ section
```

### 6.3 FAQ Page (45 min)
**AI Task:**
```
Create /cesta-pitanja.astro:
- Accordion component for questions
- Categories (Montaža, Servis, Proizvodi, Jamstvo)
- Search in FAQs
- Structured data for SEO
```

### 6.4 Legal Pages (30 min)
**AI Task:**
```
Create:
- /privatnost.astro - Privacy policy
- /uvjeti-koristenja.astro - Terms of use
- Simple text pages with proper formatting
```

**Phase 6 Deliverables:**
- ✅ About page
- ✅ Services pages
- ✅ FAQ page
- ✅ Legal pages
- ✅ All responsive

---

## **PHASE 7: Optimization & Polish** ⏱️ 3-4 hours
**AI Model:** Opus 4.1 (strategy) → Sonnet 4.5 (implementation)

### 7.1 Image Optimization (1 hour)
**AI Task for Sonnet 4.5:**
```
Optimize images:
- Use Astro Image component
- WebP format conversion
- Responsive image sizes
- Lazy loading
- Placeholder blur effect
- Optimize Strapi media uploads
```

### 7.2 SEO Enhancement (1 hour)
**AI Task for Sonnet 4.5:**
```
Improve SEO:
- Dynamic meta tags from Strapi
- OpenGraph images
- Structured data (Product schema)
- Sitemap generation
- Robots.txt
- Canonical URLs
- Alt text for all images
```

### 7.3 Performance Optimization (1 hour)
**AI Task for Opus 4.1 (analysis) then Sonnet 4.5:**
```
Optimize performance:
- Code splitting
- CSS minification
- Remove unused CSS
- Optimize bundle size
- Add loading skeletons
- Implement caching strategies
- Lighthouse score optimization (target: 90+)
```

### 7.4 Accessibility (30 min)
**AI Task for Sonnet 4.5:**
```
Accessibility improvements:
- ARIA labels
- Keyboard navigation
- Focus indicators
- Color contrast check
- Screen reader testing
- Skip to content link
```

### 7.5 Cross-browser Testing (30 min)
**AI Task for Sonnet 4.5:**
```
Test and fix issues in:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
```

**Phase 7 Deliverables:**
- ✅ Optimized images
- ✅ SEO enhanced
- ✅ 90+ Lighthouse score
- ✅ Accessibility compliant
- ✅ Cross-browser compatible

---

## **PHASE 8: Final Testing & Deployment Prep** ⏱️ 2-3 hours
**AI Model:** Sonnet 4.5

### 8.1 Comprehensive Testing (1 hour)
**AI Task:**
```
Test all functionality:
- All pages load correctly
- All links work
- Forms submit successfully
- Filters work with edge cases
- Search returns accurate results
- Responsive on all breakpoints
- Mobile menu works perfectly
- Images load from Strapi
- No console errors
```

### 8.2 Content Review (30 min)
**AI Task:**
```
Review:
- All text in Croatian
- No Lorem Ipsum
- Proper grammar
- Consistent tone
- All phone numbers, emails correct
- Company info accurate
```

### 8.3 Documentation (1 hour)
**AI Task:**
```
Create documentation:
- Deployment guide
- Strapi admin guide for client
- How to add products
- How to manage categories
- Troubleshooting guide
- Update README.md with final info
```

### 8.4 Deployment Preparation (30 min)
**AI Task:**
```
Prepare for deployment:
- Environment variables for production
- Build and test production build
- Optimize for hosting
- Database migration strategy (SQLite → PostgreSQL)
- SSL certificate setup notes
```

**Phase 8 Deliverables:**
- ✅ Fully tested application
- ✅ Complete documentation
- ✅ Deployment ready
- ✅ Client handoff package

---

## 📋 Estimated Timeline Summary

### **With AI Vibe Coding (Sonnet 4.5 + Opus 4.1):**

| Phase | Tasks | Estimated Time | AI Model |
|-------|-------|----------------|----------|
| Phase 0 | Pre-Development Setup | 30 min | Sonnet |
| Phase 1 | Strapi CMS Setup | 4-6 hours | Opus + Sonnet |
| Phase 2 | Astro Integration | 3-4 hours | Sonnet |
| Phase 3 | Filtering & Search | 4-5 hours | Opus + Sonnet |
| Phase 4 | Product Pages | 3-4 hours | Sonnet |
| Phase 5 | Forms & Contact | 2-3 hours | Sonnet |
| Phase 6 | Additional Pages | 2-3 hours | Sonnet |
| Phase 7 | Optimization | 3-4 hours | Opus + Sonnet |
| Phase 8 | Testing & Deploy | 2-3 hours | Sonnet |
| **TOTAL** | **All Features** | **24-32 hours** | **~3-4 days** |

### **Reality Check:**
- **Best case (focused work):** 2-3 dana (8-10h/day)
- **Realistic (with breaks, testing, fixes):** 3-4 dana
- **With contingency (unexpected issues):** max 5 dana

---

## 🎯 Success Metrics

### Must-Have Features (MVP):
- [x] Responsive website (mobile/tablet/desktop)
- [ ] Strapi CMS fully configured
- [ ] 50+ products in database
- [ ] Working filters (category, manufacturer, price, power, area)
- [ ] Search functionality
- [ ] Individual product pages
- [ ] Inquiry form working
- [ ] Contact page
- [ ] All core pages (About, Services, FAQ)

### Performance Targets:
- [ ] Lighthouse Performance Score: 90+
- [ ] Lighthouse Accessibility Score: 95+
- [ ] Lighthouse Best Practices: 100
- [ ] Lighthouse SEO: 100
- [ ] Page load time: < 2 seconds
- [ ] First Contentful Paint: < 1 second

### Quality Targets:
- [ ] Zero console errors
- [ ] All links working
- [ ] All forms validated
- [ ] Responsive on all devices
- [ ] Cross-browser compatible
- [ ] SEO optimized
- [ ] Accessible (WCAG 2.1 AA)

---

## 🚨 Common Pitfalls to Avoid

1. **Don't skip Strapi setup** - Frontend depends on proper data structure
2. **Don't hardcode data** - Everything should come from Strapi
3. **Test mobile early** - Don't wait until the end for responsive testing
4. **Use TypeScript types** - Prevents bugs with Strapi data
5. **Keep scoped styles** - Don't break the styling approach
6. **Test filters with real data** - Use 20+ products to test edge cases
7. **Don't skip image optimization** - Large images kill performance
8. **Document as you go** - Don't wait until the end

---

## 🎓 Tips for Efficient AI Vibe Coding

### When using **Sonnet 4.5:**
1. **Be specific with prompts:**
   - ✅ "Create ProductCard component with scoped styles, 400px width, border-radius-lg, show price, image, name, power. Must be responsive at 768px breakpoint."
   - ❌ "Make a product card"

2. **Break complex tasks into steps:**
   - ✅ "First create the HTML structure, then add scoped styles, then add responsive breakpoints"
   - ❌ "Create entire component at once"

3. **Reference existing code:**
   - ✅ "Use same styling approach as Hero.astro"
   - ✅ "Follow the pattern from ProductCard.astro"

4. **Iterate quickly:**
   - If something doesn't work, immediately ask for fix
   - Show screenshots for visual issues
   - Copy exact error messages

### When using **Opus 4.1:**
1. **Use for architecture decisions:**
   - "Design the optimal Strapi schema for product management"
   - "What's the best filtering algorithm for 100+ products?"

2. **Use for complex problem-solving:**
   - "How to implement real-time search without degrading performance?"
   - "Best approach for image optimization in Astro + Strapi setup?"

3. **Use for code review:**
   - "Review this filtering logic for edge cases"
   - "Check this component for accessibility issues"

### Switching between models:
- **Start with Opus** for planning and architecture
- **Switch to Sonnet** for implementation
- **Back to Opus** if you hit complex bugs or need optimization strategy
- **Sonnet** for final polish and small fixes

---

## 📞 Next Steps

1. **Confirm plan** - Review and approve this development plan
2. **Start Phase 1** - Begin with Strapi CMS setup
3. **Daily check-ins** - Review progress at end of each phase
4. **Iterate** - Adjust plan based on real-world progress

---

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Strapi Documentation](https://docs.strapi.io)
- [Astro + Strapi Guide](https://strapi.io/blog/build-a-blog-with-astro-strapi)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [BEM Methodology](https://getbem.com/)

---

**Last Updated:** 2025-01-28
**Status:** Ready for Phase 1 - Strapi CMS Setup
