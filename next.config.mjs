/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/alecfut07.github.io/" : "",
};

export default nextConfig;
