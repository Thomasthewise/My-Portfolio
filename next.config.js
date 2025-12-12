/** @type {import('next').NextConfig} */
const nextConfig = {
eslint: {
// Only lint your app code, not vendor docs
dirs: ['app', 'components', 'lib', 'hooks'],
// ignoreDuringBuilds: true, // use only as a temporary bypass if needed
},
images: {
remotePatterns: [
{ protocol: 'https', hostname: 'images.unsplash.com' },
// { protocol: 'https', hostname: '<your-supabase-project>.supabase.co' },
],
},
};
module.exports = nextConfig;
