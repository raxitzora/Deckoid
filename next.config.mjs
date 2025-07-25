/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const securityHeaders = [
      // Content Security Policy
      {
        key: 'Content-Security-Policy',
        value:
          "default-src 'self'; " +
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "img-src 'self' data: https:; " +
          "font-src 'self' https://fonts.gstatic.com; " +
          "connect-src 'self'; " +
          "frame-ancestors 'none'; " +
          "object-src 'none'; " +
          "base-uri 'self';",
      },

      // Prevent clickjacking
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },

      // MIME type sniffing protection
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },

      // Remove referrer info
      {
        key: 'Referrer-Policy',
        value: 'no-referrer',
      },

      // Enforce HTTPS
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },

      // Enable XSS Protection (legacy, mostly for IE)
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },

      // Permissions Policy (restrict browser APIs)
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },

      // Remove server info (set via Vercel or server config ideally)
      {
        key: 'Server',
        value: '',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
