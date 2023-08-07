import { z } from "zod";

export const useGetWeaponsByIdsReturnSchema = z.array(
  z.object({
    id: z.number(),
    category: z.string(),
    name: z.string(),
    weight: z.number(),
    image: z.string(),
    price: z.number(),
  }),
);
