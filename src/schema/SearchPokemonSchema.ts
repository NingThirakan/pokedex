import { z } from "zod";

export const searchPokemonSchema = z.object({
  keyword: z.string().nullable(),
});

export type SearchPokemonSchema = z.infer<typeof searchPokemonSchema>;
