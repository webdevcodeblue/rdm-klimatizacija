import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_CONFIG, getImageUrl } from '../config/site';

export async function GET(context) {
  const blog = await getCollection('blog');

  return rss({
    title: `${SITE_CONFIG.company.name} Blog`,
    description: 'Najnoviji članci o klima uređajima, dizalicama topline, ventilaciji i energetskoj učinkovitosti.',
    site: SITE_CONFIG.url,
    items: blog
      .sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt || post.data.description,
        pubDate: new Date(post.data.publishDate),
        link: `/blog/${post.slug}/`,
        author: post.data.author || SITE_CONFIG.company.name,
        categories: post.data.tags || [],
        content: post.body ? post.body.substring(0, 500) + '...' : undefined,
      })),
    customData: `
      <language>hr-HR</language>
      <copyright>Copyright ${new Date().getFullYear()} ${SITE_CONFIG.company.name}</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Astro v${import.meta.env.ASTRO_VERSION || '3.0.0'}</generator>
      <webMaster>${SITE_CONFIG.contact.email} (${SITE_CONFIG.company.name})</webMaster>
      <image>
        <url>${getImageUrl(SITE_CONFIG.brand.logo)}</url>
        <title>${SITE_CONFIG.company.name} Blog</title>
        <link>${SITE_CONFIG.url}</link>
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