/** @type {import('next').NextConfig} */
const nextConfig = {
    emotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '**',
        },
      ],
};

export default nextConfig;
