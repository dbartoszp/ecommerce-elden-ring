import { z } from "zod";

export const useGetCollectionsByIdsReturnSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    items: z.array(z.number()),
  }),
);
