import kyServer from "@/lib/ky/kyServer";
import { AllCategoryType, AllPostType } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import HomeBlogCard from "./HomeBlogCard";

type CategorySectionProps = {
  info: AllCategoryType;
};

const CategorySection = async ({ info }: CategorySectionProps) => {
  const allCategoryLatestPost = await kyServer
    .get(`post/latest-category-posts/${info.id}`, {
      next: { tags: ["categoryLatestPost"] },

      searchParams: {
        count: 3,
      },
    })
    .json<AllPostType[]>();

  return (
    <>
      <section className="space-y-8 py-20">
        <div className="text-center text-3xl">{info.name}</div>

        <div className="grid grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
          {allCategoryLatestPost.map((item) => {
            return (
              <HomeBlogCard
                key={item.id}
                info={item}
              />
            );
          })}
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
