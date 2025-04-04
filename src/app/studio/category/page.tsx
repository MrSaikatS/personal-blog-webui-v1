import StudioCategoryPostCard from "@/components/Studio/StudioCategoryComp/StudioCategoryPostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category | Personal Blog",
  description: "Category page of Personal Blog",
};

const page = () => {
  return (
    <>
      <section className="flex flex-col gap-8 py-10 lg:py-20">
        <div className="text-center">All Category</div>

        <div className="grid gap-3">
          <StudioCategoryPostCard />
          <StudioCategoryPostCard />
          <StudioCategoryPostCard />
        </div>
      </section>
    </>
  );
};

export default page;
