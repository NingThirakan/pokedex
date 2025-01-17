import { Type } from "typescript";
import {
  Cries,
  Form,
  Index,
  HeldItem,
  Mfe,
  Species,
  Sprites,
  Stat,
} from "./PokemonDetailModel";

export type TestModel = {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Form[];
  game_indices: Index[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Mfe[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type Ability = {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
};

export type Ability2 = {
  name: string;
  url: string;
  effect: PokemonEffectModel;
};

export type Language = {
  name: string;
  url: string;
};

export type Effectentry = {
  effect: string;
  language: Language;
  short_effect: string;
};

export type Flavortextentry = {
  flavor_text: string;
  language: Language;
  version_group: Language;
};

export type Name = {
  language: Language;
  name: string;
};

export type Pokemon = {
  is_hidden: boolean;
  pokemon: Language;
  slot: number;
};

export type PokemonEffectModel = {
  effect_changes: any[];
  effect_entries: Effectentry[];
  flavor_text_entries: Flavortextentry[];
  generation: Language;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
};
