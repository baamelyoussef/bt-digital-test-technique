import type { NextConfig } from "next";

const nextConfig = {
	output: "export",  
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		loader: "custom",
    imageSizes: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	  },
	  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "80",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default nextConfig;
