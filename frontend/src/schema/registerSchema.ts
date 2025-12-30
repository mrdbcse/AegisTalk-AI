import z from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    email: z.email("Invalid Email"),
    password: z.string().min(8, "Password should have minimum 8 characters"),
    organization: z.string().min(3, "Organization is required"),
    userType: z.enum(
      ["ADMIN", "USER"],
      "User type should be either ADMIN or USER"
    ),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
