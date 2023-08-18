import { z } from "zod";

export const parseContextReturnSchema = z.object({
  currentCart: z.array(
    z.object({
      id: z.number(),
      weaponId: z.number(),
      cartId: z.number(),
    }),
  ),
});
