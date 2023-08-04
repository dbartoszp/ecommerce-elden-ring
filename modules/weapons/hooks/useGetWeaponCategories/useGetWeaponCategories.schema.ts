import { z } from "zod";

export const useGetWeaponCategoriesReturnSchema = z.array(
  z.object({ category: z.string() }),
);
