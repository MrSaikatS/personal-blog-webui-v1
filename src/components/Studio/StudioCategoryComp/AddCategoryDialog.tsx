import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

          <div className="">Add new category</div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCategoryDialog;
