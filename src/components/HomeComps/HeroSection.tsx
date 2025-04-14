import { AllPostType } from "@/lib/types";
import HomeBlogCard from "./HomeBlogCard";
import kyServer from "@/lib/ky/kyServer";

const HeroSection = async () => {
  const allPost = await kyServer
    .get("post/latest", {
      searchParams: {
        count: 3,
      },
    })
    .json<AllPostType[]>();

  // console.log(allPost);

  return (
    <>
      <section className="grid grid-cols-1 place-items-center gap-3 py-20 lg:grid-cols-3">
        {allPost.map((item) => {
          return (
            <HomeBlogCard
              key={item.id}
              info={item}
            />
          );
        })}
      </section>
    </>
  );
};

export default HeroSection;
