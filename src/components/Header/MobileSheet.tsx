import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import MobileAccordition from "./MobileAccordition";
import { Separator } from "../ui/separator";
import MobileHeaderStudio from "../Studio/Header/MobileHeaderStudio";

const MobileSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <Menu />
        </SheetTrigger>

        <SheetContent className="flex w-[90%] flex-col gap-4 px-4">
          <SheetHeader className="">
            <SheetTitle className="text-center text-3xl">Menu</SheetTitle>

            <SheetDescription className=""></SheetDescription>
          </SheetHeader>

          <Link
            className="text-xl"
            href={"/"}
          >
            Home
          </Link>

          <Separator />

          <MobileAccordition />

          <MobileHeaderStudio />

          <Separator />

          <Link
            className="text-xl"
            href={"/about"}
          >
            About
          </Link>

          <Separator />

          <Link
            className="text-xl"
            href={"/contact"}
          >
            Contact
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSheet;
