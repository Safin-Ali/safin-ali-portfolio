/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
			},
			
		],
	},
	reactStrictMode: false
};

export default nextConfig;
