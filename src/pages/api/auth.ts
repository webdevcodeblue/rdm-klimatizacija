import type { APIRoute } from 'astro';

const CLIENT_ID = import.meta.env.OAUTH_GITHUB_KEY;
const CLIENT_SECRET = import.meta.env.OAUTH_GITHUB_SECRET;

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  // Step 1: Redirect to GitHub OAuth
  if (!code) {
    const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
    githubAuthUrl.searchParams.set('client_id', CLIENT_ID);
    githubAuthUrl.searchParams.set('scope', 'repo,user');
    githubAuthUrl.searchParams.set('redirect_uri', `${url.origin}/api/auth`);

    return redirect(githubAuthUrl.toString());
  }

  // Step 2: Exchange code for access token
  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(JSON.stringify({ error: tokenData.error_description }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Step 3: Return token to CMS
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authenticating...</title>
</head>
<body>
  <script>
    (function() {
      const data = {
        token: "${tokenData.access_token}",
        provider: "github"
      };

      function receiveMessage(e) {
        console.log("receiveMessage %o", e);
        window.opener.postMessage(
          "authorization:github:success:" + JSON.stringify(data),
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      console.log("Sending message: %o", "github");
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>
    `.trim();

    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } catch (error) {
    console.error('OAuth error:', error);
    return new Response(JSON.stringify({ error: 'Authentication failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
