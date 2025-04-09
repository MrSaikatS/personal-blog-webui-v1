"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const addCategoryAction = async () => {
  await revalidateTag("getAllCategory");

  await revalidatePath("/studio/category");
};
