import HomeBlogCard from "./HomeBlogCard";

const HeroSection = async () => {
  // const allPost = await kyServer
  //   .get("post", {
  //     searchParams: {
  //       count: 1,
  //     },
  //   })
  //   .json<AllPostType[]>();

  // console.log(allPost);

  return (
    <>
      <section className="grid grid-cols-1 place-items-center gap-3 py-20 lg:grid-cols-3">
        <HomeBlogCard />
        <HomeBlogCard />
        <HomeBlogCard />
      </section>
    </>
  );
};

export default HeroSection;
