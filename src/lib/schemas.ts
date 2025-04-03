import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),

  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});
