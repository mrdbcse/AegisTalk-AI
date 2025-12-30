import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid Email"),
  password: z.string().min(8, "Password should have minimum 8 characters"),
  userType: z.enum(
    ["ADMIN", "USER"],
    "User type should be either ADMIN or USER"
  ),
  rememberMe: z.boolean().optional(),
});
export type LoginFormData = z.infer<typeof loginSchema>;
