import { z } from "zod";

export const getCartLSReturnSchema = z.array(
  z.object({
    weapon_id: z.number(),
  }),
);
