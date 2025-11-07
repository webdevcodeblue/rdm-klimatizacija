import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');

  return rss({
    title: 'RDM Klimatizacija Blog',
    description: 'Najnoviji članci o klima uređajima, dizalicama topline, ventilaciji i energetskoj učinkovitosti.',
    site: context.site || 'https://rdm-klimatizacija.hr',
    items: blog
      .sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt || post.data.description,
        pubDate: new Date(post.data.publishDate),
        link: `/blog/${post.slug}/`,
        author: post.data.author || 'RDM Klimatizacija',
        categories: post.data.tags || [],
        content: post.body ? post.body.substring(0, 500) + '...' : undefined,
      })),
    customData: `
      <language>hr-HR</language>
      <copyright>Copyright ${new Date().getFullYear()} RDM Klimatizacija</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Astro v${import.meta.env.ASTRO_VERSION || '3.0.0'}</generator>
      <webMaster>info@rdm-klimatizacija.hr (RDM Klimatizacija)</webMaster>
      <image>
        <url>https://rdm-klimatizacija.hr/images/logo.png</url>
        <title>RDM Klimatizacija Blog</title>
        <link>https://rdm-klimatizacija.hr</link>
      </image>
      <ttl>60</ttl>
    `,
    stylesheet: '/rss/styles.xsl',
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      content: 'http://purl.org/rss/1.0/modules/content/',
      media: 'http://search.yahoo.com/mrss/',
    },
  });
}