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

const MobileSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="space-y-8">
            <SheetTitle className="text-center text-3xl">Menu</SheetTitle>

            <SheetDescription className="flex flex-col items-center justify-center gap-5 text-xl">
              <Link href={"/"}>Home</Link>

              <Link href={"/about"}>About</Link>

              <Link href={"/contact"}>Conatct</Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSheet;
