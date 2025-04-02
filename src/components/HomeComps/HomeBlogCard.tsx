import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const HomeBlogCard = () => {
  return (
    <>
      <Card>
        <CardContent className="grid gap-3">
          <Image
            src={"/home/blog-pic.jpg"}
            alt="Image"
            height={480}
            width={640}
            priority
            className="h-auto w-auto object-contain"
          />

          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <div className="">Blog Title</div>

              <div className="">X Admin</div>
            </div>

            <div className="flex flex-row items-start justify-between">
              <div className="flex flex-col gap-0.5">
                <div className="">Category Name</div>

                <div className="">32 March, 2025</div>
              </div>
              <Button className="cursor-pointer">View Post</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default HomeBlogCard;
