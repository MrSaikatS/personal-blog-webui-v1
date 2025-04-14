import kyServer from "@/lib/ky/kyServer";
import CategorySection from "./CategorySection";
import { AllCategoryType } from "@/lib/types";

const CategorySectionGroup = async () => {
  const allCategory = await kyServer.get("category").json<AllCategoryType[]>();

  return (
    <>
      {allCategory.map((item) => {
        return (
          <CategorySection
            key={item.id}
            info={item}
          />
        );
      })}
    </>
  );
};

export default CategorySectionGroup;
