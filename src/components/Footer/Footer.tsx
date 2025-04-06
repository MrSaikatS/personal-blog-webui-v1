import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Footer = ({ appName }: { appName: string }) => {
  return (
    <>
      <footer className="border-t shadow">
        <div className="container mx-auto grid grid-cols-2 place-items-center px-6 py-3">
          <Link
            href={"/"}
            className="text-[1.5rem] font-semibold"
            aria-label="App Name"
          >
            {appName}
          </Link>

          <div className="flex flex-col items-center justify-center gap-4">
            <Link href={"/auth/login"}>Login</Link>

            <LogoutButton />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
