import * as z from "zod";

const LETTERS_ONLY_REGEX = /^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$/;

export const RegisterFormSchema = z
  .object({
    firstName: z.string().regex(LETTERS_ONLY_REGEX),
    lastName: z.string().regex(LETTERS_ONLY_REGEX),
    emailSignup: z.string().email(),
    passwordSignup: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .refine((data) => data.passwordSignup === data.passwordConfirm, {
    message: "Passwords need to match",
    path: ["passwordConfirm"],
  });
