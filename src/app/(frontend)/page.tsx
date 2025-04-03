import CategorySectionGroup from "@/components/HomeComps/CategorySectionGroup";
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
      <CategorySectionGroup />
    </>
  );
};

export default page;
