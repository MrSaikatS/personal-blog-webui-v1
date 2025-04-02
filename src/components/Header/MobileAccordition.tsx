import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const MobileAccordition = () => {
  return (
    <>
      <div className="">
        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer py-0 text-xl hover:no-underline">
              Category
            </AccordionTrigger>

            <AccordionContent className="ps-3 pt-3">
              Technology
            </AccordionContent>

            <AccordionContent className="ps-3 pt-3">Review</AccordionContent>

            <AccordionContent className="ps-3 pt-3">Sports</AccordionContent>

            <AccordionContent className="ps-3 pt-3">News</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default MobileAccordition;
