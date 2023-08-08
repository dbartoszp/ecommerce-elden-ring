import { z } from "zod";

export const createCartReturnSchema = z
  .array(
    z.object({
      id: z.number(),
      user_id: z.string(),
    }),
  )
  .min(1);
