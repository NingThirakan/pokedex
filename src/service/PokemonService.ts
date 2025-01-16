import { SearchPokemonReq } from "../@types/PokemonType";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokemonEffectModel } from "../model/PokemonEffectModel";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";

export class PokemonService {
  public static async getAllPokemon({
    offset,
    limit,
  }: SearchPokemonReq): Promise<PokemonModel> {
    const resPokedex = await fetch(
      `${pokemon_api}/pokemon?offset=${offset}&limit=${limit}`
    );
    const pokedex: PokedexModel = await resPokedex.json();

    const pokemons: PokemonDetailModel[] = await Promise.all(
      pokedex.results.map(async (item) => {
        const res = await fetch(`${pokemon_api}/pokemon/${item.name}`);
        return res.json();
      })
    );

    return {
      count: pokedex.count,
      pokemonList: pokemons,
    };
  }

  public static async searchPokemon({
    keyword,
  }: SearchPokemonReq): Promise<PokemonDetailModel> {
    const res = await fetch(`${pokemon_api}/pokemon/${keyword}`);
    return await res.json();
  }
}
