import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(4, { message: "Password is too short " }),
  usernameOrEmail: z.string().nonempty("Username or Email is required"),
});
