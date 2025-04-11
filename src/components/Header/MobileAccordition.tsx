import getAllCategoryData from "@/hooks/getAllCategoryData";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

const MobileAccordition = async () => {
  const { data } = await getAllCategoryData();

  if (data === null) {
    return <></>;
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
};

export default MobileAccordition;
