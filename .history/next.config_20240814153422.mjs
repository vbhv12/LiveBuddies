/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname: '**',
        },
      ],
};

export default nextConfig;
