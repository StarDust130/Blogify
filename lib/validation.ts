import { z } from "zod";

export const signupForm = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(4, { message: "Password is too short " }),
});

export const LoginForm = z.object({
  usernameOrEmail: z
    .string()
    .min(2, { message: "Invalid username or email format" }),
  password: z.string().min(4, { message: "Password is too short " }),
});
