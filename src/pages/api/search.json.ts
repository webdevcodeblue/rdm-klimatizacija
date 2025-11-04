import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ url }) => {
  const query = url.searchParams.get('q')?.toLowerCase().trim();

  if (!query || query.length < 2) {
    return new Response(JSON.stringify({ results: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Dohvati sve proizvode iz svih kategorija
  const [
    klimaUredaji,
    multiKlima,
    dizaliceTopline,
    mikroklima,
    alatiMaterijal
  ] = await Promise.all([
    getCollection('klima-uredaji'),
    getCollection('multi-klima'),
    getCollection('dizalice-topline'),
    getCollection('mikroklima'),
    getCollection('alati-materijali')
  ]);

  // Kombiniraj sve proizvode sa info o kategoriji
  const allProducts = [
    ...klimaUredaji.map(p => ({ ...p, category: 'klima-uredaji', categoryName: 'Klima uređaji' })),
    ...multiKlima.map(p => ({ ...p, category: 'multi-klima', categoryName: 'Multi klima' })),
    ...dizaliceTopline.map(p => ({ ...p, category: 'dizalice-topline', categoryName: 'Dizalice topline' })),
    ...mikroklima.map(p => ({ ...p, category: 'mikroklima', categoryName: 'Mikroklima' })),
    ...alatiMaterijal.map(p => ({ ...p, category: 'alati-materijali', categoryName: 'Alati i materijal' }))
  ];

  // Pretraži proizvode
  const results = allProducts
    .filter(product => {
      const searchableText = [
        product.data.title,
        product.data.manufacturer,
        product.data.model,
        product.data.description,
        product.categoryName
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    })
    .map(product => ({
      title: product.data.title || `${product.data.manufacturer} ${product.data.model}`,
      manufacturer: product.data.manufacturer,
      model: product.data.model,
      price: product.data.price,
      salePrice: product.data.salePrice,
      image: product.data.images?.[0] || product.data.image,
      category: product.category,
      categoryName: product.categoryName,
      slug: product.slug,
      url: `/${product.category}/${product.slug}`
    }))
    .slice(0, 50); // Maksimalno 50 rezultata

  return new Response(JSON.stringify({ results, total: results.length }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
