import { z } from "zod";

export const createCartReturnSchema = z.array(
  z.object({
    id: z.number(),
    userId: z.string(),
  }),
);
