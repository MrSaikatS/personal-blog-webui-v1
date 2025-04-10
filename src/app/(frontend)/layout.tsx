import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { LayoutProps } from "@/lib/types";

const FrontendLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header appName="Personal Blog" />

      <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>

      <Footer appName="Personal Blog" />
    </>
  );
};

export default FrontendLayout;
