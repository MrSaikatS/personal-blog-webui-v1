import { ReactNode } from "react";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export type ResponseType<T> = {
  data: T;
};

export type CategoryType = {
  id: string;
  name: string;
};
