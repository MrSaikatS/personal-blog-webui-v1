"use client";

import { usePathname } from "next/navigation";

import LogoutButton from "@/components/Footer/LogoutButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const MobileHeaderStudio = () => {
  const pathname = usePathname();

  if (pathname === "/studio" || pathname === "/studio/create") {
    return (
      <>
        <Separator />

        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="mb-1 cursor-pointer py-0 text-xl font-normal hover:no-underline data-[state=open]:font-bold">
              Studio
            </AccordionTrigger>

            <AccordionContent className="grid items-start gap-3 ps-3 pt-3">
              <Link href={"/studio"}>Dashboard</Link>

              <Link href={"/studio/create"}>Create+</Link>

              <Link href={"/studio/category"}>Category+</Link>

              <Link href={"/"}>Username</Link>

              <div className="">
                <LogoutButton />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    );
  } else return <></>;
};

export default MobileHeaderStudio;
