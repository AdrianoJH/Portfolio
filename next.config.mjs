/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // SWC transforma o styled-components (SSR, nomes de classe estáveis, minificação).
    // displayName/fileName só em dev: prod sai com classes hash enxutas e sem vazar nomes.
    styledComponents: {
      ssr: true,
      displayName: process.env.NODE_ENV === "development",
      fileName: process.env.NODE_ENV === "development",
    },
  },
};

export default nextConfig;
