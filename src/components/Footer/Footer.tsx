import Link from "next/link";

const Footer = ({ appName }: { appName: string }) => {
  return (
    <>
      <footer className="border-t py-10 shadow">
        <div className="container mx-auto grid grid-cols-2 place-items-center px-6 py-3">
          <Link
            href={"/"}
            className="text-[1.5rem] font-semibold"
            aria-label="App Name"
          >
            {appName}
          </Link>

          <div className="flex flex-col items-center justify-start gap-4">
            <Link href={"/auth/login"}>Login</Link>

            <Link href={"/studio"}>Studio</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
