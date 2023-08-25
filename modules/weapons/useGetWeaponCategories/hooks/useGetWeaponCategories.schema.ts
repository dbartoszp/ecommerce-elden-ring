import { z } from "zod";

export const useGetWeaponCategoriesReturnSchema = z.array(
  z.object({ name: z.string(), id: z.number() }),
);
