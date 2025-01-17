import { z } from "zod";

export const pokemonDetailSchema = z.object({
  name: z.string().nonempty(),
  detail: z.string().nonempty(),
});

export type PokemonDetailSchema = z.infer<typeof pokemonDetailSchema>;
