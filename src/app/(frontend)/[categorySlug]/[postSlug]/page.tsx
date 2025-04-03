import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="flex flex-col gap-5 py-10 lg:py-20">
        <div className="text-center text-4xl font-bold lg:text-5xl">
          Blog Title - Technology
        </div>

        <div className="mx-auto flex w-4/5 justify-center lg:w-1/2">
          <Image
            src={"/home/blog-pic.jpg"}
            alt="Image"
            width={640}
            height={480}
            priority
            className="h-auto w-auto rounded-lg object-contain"
          />
        </div>

        <div className="">Dated: 25th May, 2023</div>

        <div className="flex items-center gap-5">
          <div className="font-bold italic">Technology</div>

          <Link
            href={""}
            className="border-foreground flex items-center gap-2 rounded-full border px-3 py-1"
          >
            Share
            <ArrowUpRight />
          </Link>
        </div>

        <div className="flex flex-col gap-1 text-justify text-base md:text-xl lg:text-2xl">
          <div className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            excepturi labore, quibusdam assumenda vitae adipisci placeat. Ut
            tempora facere amet beatae iusto quisquam est dolorum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sapiente praesentium
            laboriosam eos quae iste aut obcaecati alias dolorum, eaque earum
            repellendus natus voluptatem distinctio veniam omnis nobis esse in
            fugit itaque quia repellat sunt dignissimos minus! Ut rerum non
            expedita illum assumenda odit quam animi totam quibusdam, ullam
            laboriosam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error corrupti sapiente animi saepe, ut repellat?
            Natus ea animi odio voluptatibus rerum corporis architecto
            provident, optio modi voluptate? Aperiam ullam dignissimos dolor
            fugiat ratione. Facilis, sit necessitatibus asperiores ab autem ex
            velit itaque delectus distinctio nesciunt saepe iusto pariatur
            quaerat quibusdam.
          </div>

          <div className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            excepturi labore, quibusdam assumenda vitae adipisci placeat. Ut
            tempora facere amet beatae iusto quisquam est dolorum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sapiente praesentium
            laboriosam eos quae iste aut obcaecati alias dolorum, eaque earum
            repellendus natus voluptatem distinctio veniam omnis nobis esse in
            fugit itaque quia repellat sunt dignissimos minus! Ut rerum non
            expedita illum assumenda odit quam animi totam quibusdam, ullam
            laboriosam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error corrupti sapiente animi saepe, ut repellat?
            Natus ea animi odio voluptatibus rerum corporis architecto
            provident, optio modi voluptate? Aperiam ullam dignissimos dolor
            fugiat ratione. Facilis, sit necessitatibus asperiores ab autem ex
            velit itaque delectus distinctio nesciunt saepe iusto pariatur
            quaerat quibusdam.
          </div>

          <div className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            excepturi labore, quibusdam assumenda vitae adipisci placeat. Ut
            tempora facere amet beatae iusto quisquam est dolorum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sapiente praesentium
            laboriosam eos quae iste aut obcaecati alias dolorum, eaque earum
            repellendus natus voluptatem distinctio veniam omnis nobis esse in
            fugit itaque quia repellat sunt dignissimos minus! Ut rerum non
            expedita illum assumenda odit quam animi totam quibusdam, ullam
            laboriosam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error corrupti sapiente animi saepe, ut repellat?
            Natus ea animi odio voluptatibus rerum corporis architecto
            provident, optio modi voluptate? Aperiam ullam dignissimos dolor
            fugiat ratione. Facilis, sit necessitatibus asperiores ab autem ex
            velit itaque delectus distinctio nesciunt saepe iusto pariatur
            quaerat quibusdam.
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
