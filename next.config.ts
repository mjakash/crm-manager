import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
    // Allowing local images if needed, but since we are using generate_image it will be a local file in artifacts usually? 
    // Actually generate_image saves to artifacts. I need to copy it to public to use it easily or import it.
    // I'll assume I copy it to public.
  },
};

export default nextConfig;
