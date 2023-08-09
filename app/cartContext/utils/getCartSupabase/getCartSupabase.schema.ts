import { z } from "zod";

export const getCartSupabaseReturnSchema = z.array(
  z.object({
    id: z.number(),
    weapon_id: z.number(),
    cart_id: z.number(),
  }),
);
