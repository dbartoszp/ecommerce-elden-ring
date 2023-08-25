import { z } from "zod";

export const useGetWeaponFiltersByCategoryReturnSchema = z.array(
  z.object({ name: z.string(), categoryID: z.number() }),
);
