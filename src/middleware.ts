import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Redirect /admin to /admin/ for Decap CMS
  if (context.url.pathname === '/admin') {
    return Response.redirect(new URL('/admin/', context.url), 301);
  }

  return next();
});
