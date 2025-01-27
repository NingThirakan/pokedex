import { z } from "zod";

export const searchPokemonSchema = z.object({
  keyword: z.string(),
  // offset: z.number(),
  // limit: z.number(),
  // enabledSearchAll: z.boolean(),
});

export type SearchPokemonSchema = z.infer<typeof searchPokemonSchema>;
