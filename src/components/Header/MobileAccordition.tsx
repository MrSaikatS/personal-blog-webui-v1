import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

const MobileAccordition = () => {
  const demo = [
    { id: 1, name: "technology" },
    { id: 2, name: "review" },
    { id: 3, name: "sports" },
    { id: 4, name: "news" },
  ];

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
              {demo.map((item) => {
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
