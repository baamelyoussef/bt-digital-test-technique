import type { NextConfig } from "next";

const nextConfig = {
	output: "export",  
	reactStrictMode: true,
	transpilePackages: [ "@trilogy-ds/react"],
	images: {
		formats: ['image/avif', 'image/webp'],
		
	  }
};

export default nextConfig;
