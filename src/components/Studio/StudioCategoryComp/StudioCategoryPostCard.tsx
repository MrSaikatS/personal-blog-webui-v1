import { Card, CardContent } from "@/components/ui/card";
import { CategoryType } from "@/lib/types";
import DeleteCategory from "./DeleteCategory";
import EditCategory from "./EditCategory";

type CategoryPostCardProps = {
  info: CategoryType;
};

const StudioCategoryPostCard = async ({ info }: CategoryPostCardProps) => {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="capitalize">{info.name}</div>
          </div>

          <div className="flex items-center gap-5">
            <EditCategory info={info} />

            <DeleteCategory id={info.id} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StudioCategoryPostCard;
