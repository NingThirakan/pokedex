import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("required").email("invalid email format"),
  password: z.string().nonempty("required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
