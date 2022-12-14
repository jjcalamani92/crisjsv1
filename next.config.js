/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
		API_SITE: process.env.API_SITE,
		APIU_URL: process.env.APIU_URL,
		APIS_URL: process.env.APIS_URL,
		APISS_URL: process.env.APISS_URL,
		APIP_URL: process.env.APIP_URL,
		APIPP_URL: process.env.APIPP_URL,
		APIUP_URL: process.env.APIUP_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		MONGO_URL: process.env.MONGO_URL,
		PORT: process.env.PORT,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
	},
	images: {
		domains: ["res.cloudinary.com", "regalosterrakota.com", "tailwindui.com" , "lh3.googleusercontent.com"],
	},
}
// const removeImports = require('next-remove-imports')();

// module.exports = removeImports({
// 	experimental: { esmExternals: true },
// 	images: {
// 		domains: ["res.cloudinary.com", "regalosterrakota.com", "tailwindui.com" , "lh3.googleusercontent.com"],
// 	},
// 	env: {
// 		API_SITE: process.env.API_SITE,
// 		APIU_URL: process.env.APIU_URL,
// 		APIS_URL: process.env.APIS_URL,
// 		APISS_URL: process.env.APISS_URL,
// 		APIP_URL: process.env.APIP_URL,
// 		APIPP_URL: process.env.APIPP_URL,
// 		APIUP_URL: process.env.APIUP_URL,
// 		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
// 		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
// 		MONGO_URL: process.env.MONGO_URL,
// 		PORT: process.env.PORT,
// 		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
// 		NEXTAUTH_URL: process.env.NEXTAUTH_URL,

// 	},
// });
module.exports = nextConfig