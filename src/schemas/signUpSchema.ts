import { z } from "zod";

export const usernameValidatoin = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(10, "Username must not be more than 10 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidatoin,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
