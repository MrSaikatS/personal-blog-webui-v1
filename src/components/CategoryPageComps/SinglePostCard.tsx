import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SinglePostCard = () => {
  return (
    <>
      <Card>
        <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Image
            src={"/home/blog-pic.jpg"}
            alt="Image"
            width={640}
            height={480}
            priority
            className="h-auto w-auto rounded-lg object-contain"
          />

          <div className="flex flex-col items-start gap-5">
            <div className="text-3xl font-bold lg:text-5xl">Blog Title</div>

            <div className="flex gap-5 italic">
              <div className="">Technology</div>

              <div className="">25-05-2023</div>
            </div>

            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              cum praesentium sed aliquam quam eveniet, non perferendis? Ullam,
              alias corrupti, dolorum tempore accusantium dolor modi fugit
              facere, sunt molestiae numquam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Iusto quis, voluptate laudantium
              doloremque nemo assumenda quidem voluptatum quod beatae iste
              facere quaerat numquam nam ut?
            </div>

            <Link
              href={""}
              className="border-foreground flex items-center gap-2 rounded-full border px-5 py-2"
            >
              Read More
              <ArrowUpRight />
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SinglePostCard;
