import { z } from "zod";

export const useGetCartReturnSchema = z.array(
  z.object({
    id: z.number(),
    user_id: z.string(),
  }),
);
