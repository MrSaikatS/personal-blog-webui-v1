import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Personal Blog",
  description: "Contact page of Personal Blog",
};

const page = () => {
  return (
    <>
      <section className="grid h-[80dvh] place-items-center">
        <div className="bg-gradient-to-tr from-rose-600 to-violet-600 bg-clip-text p-2">
          <span className="text-5xl font-bold text-transparent">
            Contact page
          </span>
        </div>
      </section>
    </>
  );
};

export default page;
