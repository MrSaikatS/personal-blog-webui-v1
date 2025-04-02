import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";

const MobileAccordition = () => {
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

            <AccordionContent className="grid gap-3 ps-3 pt-3">
              <Link href={"/"}>Technology</Link>

              <Separator />

              <Link href={"/"}>Review</Link>

              <Separator />

              <Link href={"/"}>Sports</Link>

              <Separator />

              <Link href={"/"}>News</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default MobileAccordition;
