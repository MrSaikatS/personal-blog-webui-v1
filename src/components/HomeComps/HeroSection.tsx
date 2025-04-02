import HomeBlogCard from "./HomeBlogCard";

const HeroSection = () => {
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
