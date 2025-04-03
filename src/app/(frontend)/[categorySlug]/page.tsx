import CategoryCardSection from "@/components/CategoryPageComps/CategoryCardSection";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-10 lg:py-20">
        <div className="border-foreground mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center rounded-full border-2 px-4 py-3 text-center text-2xl font-bold">
          : Technology :
        </div>
      </section>

      {/* Category Card Section */}
      <section className="space-y-11 py-10">
        <CategoryCardSection />
      </section>
    </>
  );
};

export default page;
