import { ReactNode } from "react";
import { z } from "zod";
import { categoryFormSchema, loginSchema } from "./schemas";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
};

export type LoginDataType = z.infer<typeof loginSchema>;

export type DefaultRequestType = { message: string };

export type CategoryFormDataType = z.infer<typeof categoryFormSchema>;
