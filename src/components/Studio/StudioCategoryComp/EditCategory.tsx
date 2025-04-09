import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CategoryEditForm from "./CategoryEditForm";
import { EditCategoryProps } from "@/lib/types";

const EditCategory = ({ info }: EditCategoryProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="border-foreground cursor-pointer rounded-lg border px-4 py-1">
          Edit
        </DialogTrigger>

        <DialogContent>
          <DialogHeader className="flex flex-col items-center justify-center">
            <DialogTitle>Update Category</DialogTitle>

            <DialogDescription className="hidden"></DialogDescription>
          </DialogHeader>

          <CategoryEditForm info={info} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditCategory;
