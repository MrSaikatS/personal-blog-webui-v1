"use client";

import { categoryRevAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import deleteCategoryHook from "@/hooks/deleteCategoryHook";
import { CategoryIdType } from "@/lib/types";

const DeleteCategory = ({ id }: CategoryIdType) => {
  const deleteCategoryFnc = async () => {
    const { message, success } = await deleteCategoryHook({ id });

    if (!success) {
      console.log(message);
    }

    if (success) {
      console.log(message);

      await categoryRevAction();
    }
  };

  return (
    <>
      <Button
        className="cursor-pointer"
        onClick={deleteCategoryFnc}
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteCategory;
