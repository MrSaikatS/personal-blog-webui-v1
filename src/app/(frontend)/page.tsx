import CategorySection from "@/components/HomeComps/CategorySection";
import HeroSection from "@/components/HomeComps/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Personal Blog",
  description: "Home page of Personal Blog",
};

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Category Section */}

      <CategorySection />
      <CategorySection />
    </>
  );
};

export default page;
