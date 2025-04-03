import Link from "next/link";
import HomeBlogCard from "./HomeBlogCard";
import { ArrowUpRight } from "lucide-react";

const CategorySection = () => {
  return (
    <>
      <section className="space-y-8 py-20">
        <div className="text-center text-3xl">Technology</div>

        <div className="grid grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
          <HomeBlogCard />

          <HomeBlogCard />

          <HomeBlogCard />
        </div>

        <div className="flex justify-end">
          <Link
            href={"/"}
            className="border-foreground flex items-center gap-2 rounded-full border px-5 py-2"
          >
            View More
            <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
