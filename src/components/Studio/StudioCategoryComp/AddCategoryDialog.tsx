"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CategoryForm from "./CategoryForm";

const AddCategoryDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="border-foreground cursor-pointer rounded-lg border px-4 py-2">
          Add New
        </DialogTrigger>

        <DialogContent>
          <DialogHeader className="flex flex-col items-center justify-center">
            <DialogTitle>NEW CATEGORY</DialogTitle>

            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>

          <CategoryForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCategoryDialog;
