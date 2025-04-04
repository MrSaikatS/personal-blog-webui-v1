import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const StudioSinglePostCard = () => {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src={"/home/blog-pic.jpg"}
              alt="Image"
              height={45}
              width={80}
              priority
              className="h-auto w-auto rounded-lg object-contain"
            />
            <div className="">Blog Title</div>

            <div className="">Blog-Category</div>

            <div className="">Blog-Date</div>
          </div>

          <Button>Preview</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default StudioSinglePostCard;
