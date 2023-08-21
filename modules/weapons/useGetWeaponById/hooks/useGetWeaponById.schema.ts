import { z } from "zod";

export const useGetWeaponByIdReturnSchema = z.array(
  z.object({
    id: z.number(),
    category: z.string(),
    name: z.string(),
    weight: z.number(),
    image: z.string(),
    price: z.number(),
    description: z.string(),
    attack: z.array(
      z.object({
        name: z.string(),
        amount: z.number(),
      }),
    ),
    defence: z.array(
      z.object({
        name: z.string(),
        amount: z.number(),
      }),
    ),
    scalesWith: z.array(
      z.object({
        name: z.string(),
        scaling: z.string(),
      }),
    ),
    requiredAttributes: z.array(
      z.object({
        name: z.string(),
        amount: z.number(),
      }),
    ),
  }),
);
