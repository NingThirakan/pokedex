import { GetPokemonReq } from "../@types/PokemonType";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";

export class PokemonService {
  public static async getAllPokemon({
    offset,
    limit,
  }: GetPokemonReq): Promise<PokemonModel> {
    const resPokedex = await fetch(
      `${pokemon_api}/pokemon?offset=${offset}&limit=${limit}`
    );
    const pokedex: PokedexModel = await resPokedex.json();

    const pokemons: PokemonDetailModel[] = await Promise.all(
      pokedex.results.map(async (item) => {
        try {
          const res = await fetch(`${pokemon_api}/pokemon/${item.name}`);
          return res.json();
        } catch (error) {
          const err = error as Error;
          throw new Error(err.message);
        }
      })
    );

    return {
      count: pokedex.count,
      pokemonList: pokemons,
    };
  }

  public static async searchPokemon({
    keyword,
  }: GetPokemonReq): Promise<PokemonDetailModel> {
    try {
      const res = await fetch(`${pokemon_api}/pokemon/${keyword}`);
      return await res.json();
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
}
