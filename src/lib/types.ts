import { ReactNode } from "react";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
};
