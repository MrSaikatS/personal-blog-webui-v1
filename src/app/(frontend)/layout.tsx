import Header from "@/components/Header/Header";
import { LayoutProps } from "@/lib/types";

const FrontendLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header appName="Personal Blog" />

      <main className="container mx-auto px-6 py-3">{children}</main>
    </>
  );
};

export default FrontendLayout;
