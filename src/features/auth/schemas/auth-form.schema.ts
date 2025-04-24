import { z } from "zod";

// Helper for either email or phone
const emailOrPhoneSchema = z.string().refine(
  (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  },
  {
    message: "Enter a valid email or phone number",
  },
);

export const registrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  emailOrPhone: emailOrPhoneSchema,
  birthDate: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    {
      message: "Enter a valid date",
    },
  ),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long"),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the Terms & Privacy",
  }),
});

export type RegistrationSchemaTypes = z.infer<typeof registrationSchema>;
