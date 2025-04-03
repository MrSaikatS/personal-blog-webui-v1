import kyServer from "@/lib/ky/kyServer";
import { CategoryType } from "@/lib/types";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

const MobileAccordition = async () => {
  try {
    const data = await kyServer
      .get("category", {
        next: { tags: ["getAllCategory"] },
      })
      .json<CategoryType[]>();

    if (data.length === 0) {
      return null;
    }

    return (
      <>
        <div className="">
          <Accordion
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="mb-1 cursor-pointer py-0 text-xl font-normal hover:no-underline data-[state=open]:font-bold">
                Category
              </AccordionTrigger>

              <AccordionContent>
                {data.map((item) => {
                  return (
                    <div
                      className="grid gap-3 ps-3 pt-3"
                      key={item.id}
                    >
                      <Link
                        className="capitalize"
                        href={"/"}
                      >
                        {item.name}
                      </Link>
                      <Separator />
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default MobileAccordition;
