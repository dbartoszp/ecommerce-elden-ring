import { z } from "zod";

export const useGetWeaponByIdReturnSchema = z.array(
  z.object({
    category: z.string().min(50, "error"),
    name: z.string(),
    weight: z.number(),
    image: z.string(),
  }),
);
