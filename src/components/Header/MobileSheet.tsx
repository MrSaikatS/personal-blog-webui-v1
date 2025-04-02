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

const MobileSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="">
            <SheetTitle className="text-center text-3xl">Menu</SheetTitle>

            <SheetDescription className=""></SheetDescription>
          </SheetHeader>

          <div className="flex flex-col items-start justify-center gap-5 px-3 text-xl">
            <Link href={"/"}>Home</Link>

            <MobileAccordition />

            <Link href={"/about"}>About</Link>

            <Link href={"/contact"}>Conatct</Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSheet;
