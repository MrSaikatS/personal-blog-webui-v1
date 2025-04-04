import StudioSinglePostCard from "@/components/Studio/StudioHomeComp/StudioSinglePostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Personal Blog",
  description: "Dashboard page of Personal Blog",
};

const page = () => {
  return (
    <>
      <section className="flex flex-col gap-8 py-10 lg:py-20">
        <div className="text-center">All Blogs</div>

        <div className="grid gap-3">
          <StudioSinglePostCard />

          <StudioSinglePostCard />

          <StudioSinglePostCard />
        </div>
      </section>
    </>
  );
};

export default page;
