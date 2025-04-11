import getAllCategoryData from "@/hooks/getAllCategoryData";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

const DesktopMenubar = async () => {
  const { data } = await getAllCategoryData();

  if (data === null) {
    return <></>;
  }

  return (
    <>
      <Menubar className="cursor-pointer border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="group flex cursor-pointer items-center">
            Category
            <ChevronDown className="scale-y transition-all duration-300 ease-in-out group-data-[state=open]:scale-y-[-1]" />
          </MenubarTrigger>

          <MenubarContent align="center">
            {data.map((item) => {
              return (
                <MenubarItem
                  className="cursor-pointer capitalize"
                  key={item.id}
                >
                  <Link href={"/"}>{item.name}</Link>
                </MenubarItem>
              );
            })}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default DesktopMenubar;
