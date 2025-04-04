import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create | Personal Blog",
  description: "Create page of Personal Blog",
};

const page = () => {
  return (
    <>
      <section className="grid h-[80dvh] place-items-center">
        <div className="bg-gradient-to-tr from-rose-600 to-violet-600 bg-clip-text p-2">
          <span className="text-5xl font-bold text-transparent">Create</span>
        </div>
      </section>
    </>
  );
};

export default page;
