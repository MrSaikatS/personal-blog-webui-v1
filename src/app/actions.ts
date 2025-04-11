"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const categoryRevAction = async () => {
  await revalidateTag("getAllCategory");

  await revalidatePath("/studio/category");
};
