import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const StudioCategoryPostCard = () => {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="">Blog Title</div>

            <div className="">Blog-Category</div>

            <div className="">Blog-Date</div>
          </div>

          <div className="flex items-center gap-5">
            <Button className="cursor-pointer">Edit</Button>

            <Button className="cursor-pointer">Delete</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StudioCategoryPostCard;
