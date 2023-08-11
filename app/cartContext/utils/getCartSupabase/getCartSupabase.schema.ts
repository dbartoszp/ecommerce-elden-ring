import { z } from "zod";

export const getCartSupabaseReturnSchema = z.array(
  z.object({
    id: z.number(),
    weaponId: z.number(),
    cartId: z.number(),
  }),
);
