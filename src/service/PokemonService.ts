import { GetPokemonReq } from "../@types/PokemonType";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokedexModel } from "../model/PokemonModel";

export class PokemonService {
  public static async getAllPokemon({
    offset,
    limit,
  }: GetPokemonReq): Promise<PokedexModel> {
    const res = await fetch(
      `${pokemon_api}/pokemon?offset=${offset}&limit=${limit}`
    );
    return await res.json();
  }

  public static async getPokemonByName(
    name: string
  ): Promise<PokemonDetailModel> {
    try {
      const res = await fetch(`${pokemon_api}/pokemon/${name}`);
      return await res.json();
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
}
