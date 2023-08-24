import { z } from "zod";

export const useGetWeaponsByReturnSchema = z.array(
  z.object({
    id: z.number(),
    filter: z.string(),
    name: z.string(),
    weight: z.number(),
    image: z.string(),
    price: z.number(),
  }),
);
export type Weapon = z.infer<typeof useGetWeaponsByReturnSchema>;
