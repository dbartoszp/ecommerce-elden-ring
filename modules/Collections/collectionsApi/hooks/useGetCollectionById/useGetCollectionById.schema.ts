import { z } from "zod";

export const useGetCollectionByIdReturnSchema = z.array(
  z.object({
    title: z.string(),
    image: z.string(),
    items: z.array(z.number()),
  }),
);
