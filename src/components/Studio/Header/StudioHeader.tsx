import LogoutButton from "@/components/Footer/LogoutButton";
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
            <Link href={"/studio"}>Dashboard</Link>

            <Link href={"/studio/create"}>Create+</Link>

            <Link href={"/studio/category"}>Category+</Link>
          </div>

          <div className="flex items-center justify-start gap-5">
            <Link href={"/studio/profile"}>Username</Link>

            <LogoutButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default StudioHeader;
