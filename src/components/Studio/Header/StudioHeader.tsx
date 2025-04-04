import { Button } from "@/components/ui/button";
import Link from "next/link";

const StudioHeader = () => {
  return (
    <>
      <header
        className="hidden border-b shadow lg:flex"
        aria-label="app-header"
      >
        <div className="container mx-auto flex items-center justify-between gap-3 px-6 py-1.5">
          <div className="flex items-center justify-start gap-5">
            <Link href={"/"}>Dashboard</Link>

            <Link href={"/"}>Post+</Link>

            <Link href={"/"}>Category+</Link>
          </div>

          <div className="flex items-center justify-start gap-5">
            <Link href={"/"}>Username</Link>

            <Button>Logout</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default StudioHeader;
