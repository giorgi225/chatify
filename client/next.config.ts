import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL + "/api";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "lh3.googleusercontent.com",
			}
		]
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${API_URL}/:path*`,
			},
		]

	},

}


export default nextConfig;
