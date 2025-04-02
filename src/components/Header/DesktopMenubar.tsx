import { ChevronDown } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

const DesktopMenubar = () => {
  return (
    <>
      <Menubar className="cursor-pointer border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="group flex cursor-pointer items-center">
            Category
            <ChevronDown className="scale-y transition-all duration-300 ease-in-out group-data-[state=open]:scale-y-[-1]" />
          </MenubarTrigger>

          <MenubarContent align="center">
            <MenubarItem>Technology</MenubarItem>

            <MenubarItem>Review</MenubarItem>

            <MenubarItem>News</MenubarItem>

            <MenubarItem>Sport</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default DesktopMenubar;
