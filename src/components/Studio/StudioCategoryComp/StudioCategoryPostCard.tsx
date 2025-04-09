import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryType } from "@/lib/types";

type CategoryPostCardProps = {
  info: CategoryType;
};

const StudioCategoryPostCard = async ({ info }: CategoryPostCardProps) => {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="">{info.name}</div>
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
