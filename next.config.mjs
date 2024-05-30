/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"https",
            hostname:"portfolio-pjqy.vercel.app",
            
        }]
    }
};

export default nextConfig;
