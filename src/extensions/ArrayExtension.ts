import _ from "lodash";
import { ExType } from "../@types/TestType";
import { pokemon_api } from "../config/api";
import { Ability, PokemonDetailModel } from "../model/PokemonDetailModel";
import { PokemonEffectModel } from "../model/PokemonEffectModel";

export {};

declare global {
  interface Array<T> {
    getEffect(): Promise<PokemonEffectModel[]>;
    transformPokemon(): Promise<ExType[]>;
  }
}

Array.prototype.getEffect = async function (): Promise<PokemonEffectModel[]> {
  return Promise.all(
    this.map(async (item: Ability) => {
      try {
        const res = await fetch(`${pokemon_api}/ability/${item.ability.name}`);
        return (await res.json()) as PokemonEffectModel;
      } catch (error) {
        const err = error as Error;
        throw new Error(err.message);
      }
    })
  );
};

Array.prototype.transformPokemon = async function (): Promise<ExType[]> {
  return Promise.all(
    this.map(async (pokemon: PokemonDetailModel) => {
      const effects = await pokemon.abilities.getEffect();

      return {
        name: pokemon.name,
        ability: _.map(pokemon.abilities, (ability, index) => {
          const effect = effects[index].effect_entries.find(
            (e) => e.language.name === "en"
          );

          return {
            name: ability.ability.name,
            effect: effect?.effect ?? "",
          };
        }),
      };
    })
  );
};
