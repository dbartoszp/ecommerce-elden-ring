import { z } from "zod";

export const useGetCategoryIDByNameReturnSchema = z.array(
  z.object({ id: z.number() }),
);
