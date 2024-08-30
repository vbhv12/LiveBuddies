/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utif.io',
          pathname: '**',
        },
      ],
};

export default nextConfig;
