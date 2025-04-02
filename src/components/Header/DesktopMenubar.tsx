import { ChevronDown } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import kyServer from "@/lib/ky/kyServer";
import { CategoryType, ResponseType } from "@/lib/types";

const DesktopMenubar = async () => {
  try {
    const { data } = await kyServer
      .get("category", {
        next: { tags: ["getAllCategory"] },
      })
      .json<ResponseType<CategoryType[]>>();

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
                    className="capitalize"
                    key={item.id}
                  >
                    {item.name}
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
