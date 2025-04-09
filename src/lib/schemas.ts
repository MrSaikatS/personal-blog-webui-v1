import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),

  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});

export const categoryFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(25, { message: "Name must be at most 25 characters long" }),
});
