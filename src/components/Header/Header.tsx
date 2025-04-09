import Link from "next/link";
import ThemeToggleButton from "../ui/ThemeToggleButton";
import DesktopMenubar from "./DesktopMenubar";
import MobileSheet from "./MobileSheet";

const Header = async ({ appName }: { appName: string }) => {
  return (
    <header
      className="border-b shadow"
      aria-label="app-header"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className="text-[1.5rem] font-semibold"
            aria-label="App Name"
          >
            {appName}
          </Link>

          <div className="hidden lg:flex">
            <ThemeToggleButton />
          </div>
        </div>

        <nav className="hidden gap-8 lg:flex lg:items-center">
          <Link href={"/"}>Home</Link>

          <DesktopMenubar />

          <Link href={"/about"}>About</Link>

          <Link href={"/contact"}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggleButton />

          <MobileSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
