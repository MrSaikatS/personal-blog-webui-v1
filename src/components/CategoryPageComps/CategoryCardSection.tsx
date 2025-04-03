import SinglePostCard from "./SinglePostCard";

const CategoryCardSection = () => {
  return (
    <>
      <div className="grid gap-10">
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
      </div>
    </>
  );
};

export default CategoryCardSection;
