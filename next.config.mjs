/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Habilita o SWC a transformar o styled-components (SSR, nomes de classe estáveis, minificação)
    styledComponents: true,
  },
};

export default nextConfig;
