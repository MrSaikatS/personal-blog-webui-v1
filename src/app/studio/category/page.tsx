import AddCategoryDialog from "@/components/Studio/StudioCategoryComp/AddCategoryDialog";
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
        <div className="flex items-center justify-between">
          <div className="text-center text-2xl">All Category</div>

          <AddCategoryDialog />
        </div>

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
