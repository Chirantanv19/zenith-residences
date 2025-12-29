/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Generates an /out folder
  images: {
    unoptimized: true, // Required for static export when not using a dedicated Image Loader
  },
};

export default nextConfig;