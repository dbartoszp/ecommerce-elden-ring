import { ZodError } from "zod";

export const isZodError = (error: unknown) => {
  if (error instanceof ZodError) {
    return true;
  }
  return false;
};
