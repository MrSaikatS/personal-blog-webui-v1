import Header from "@/components/Header/Header";
import StudioHeader from "@/components/Studio/Header/StudioHeader";
import { LayoutProps } from "@/lib/types";

const StudioLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header appName="Personal Blog" />

      <StudioHeader />

      <main className="container mx-auto px-6 py-3">{children}</main>
    </>
  );
};

export default StudioLayout;
