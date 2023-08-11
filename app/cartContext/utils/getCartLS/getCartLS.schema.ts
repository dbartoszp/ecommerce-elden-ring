import { z } from "zod";

export const getCartLSReturnSchema = z.array(
  z.object({
    weaponId: z.number(),
  }),
);
