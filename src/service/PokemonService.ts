import { SearchPokemonReq } from "../@types";
import { pokemon_api } from "../config/api";
import { PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokedexModel, PokemonModel } from "../model/PokemonModel";

export class PokemonService {
  public static async getAllPokemon({
    offset,
    limit,
  }: SearchPokemonReq): Promise<PokemonModel> {
    const resPokedex = await fetch(
      `${pokemon_api}?offset=${offset}&limit=${limit}`
    );
    const pokedex: PokedexModel = await resPokedex.json();

    const pokemons: PokemonDetailModel[] = await Promise.all(
      pokedex.results.map(async (item) => {
        const res = await fetch(`${pokemon_api}/${item.name}`);
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
    const res = await fetch(`${pokemon_api}/${keyword}`);
    return await res.json();
  }
}
