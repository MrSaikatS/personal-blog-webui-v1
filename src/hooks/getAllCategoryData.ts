import kyServer from "@/lib/ky/kyServer";
import { CategoryType } from "@/lib/types";

const getAllCategoryData = async () => {
  try {
    const data = await kyServer
      .get("category", {
        next: { tags: ["getAllCategory"] },
      })
      .json<CategoryType[]>();

    if (data.length === 0) {
      return {
        data: null,
      };
    }

    return {
      data: data,
    };
  } catch (error) {
    return {
      data: null,
    };
  }
};

export default getAllCategoryData;
