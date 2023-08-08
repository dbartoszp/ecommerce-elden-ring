import { z } from "zod";

export const useGetCartByUserIdReturnSchema = z.array(
  z.object({
    id: z.number(),
    user_id: z.string(),
  }),
);
