import kyServer from "@/lib/ky/kyServer";
import { CategoryType } from "@/lib/types";
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
  try {
    const data = await kyServer
      .get("category", {
        next: { tags: ["getAllCategory"] },
      })
      .json<CategoryType[]>();

    if (data.length === 0) {
      return null;
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
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default DesktopMenubar;
