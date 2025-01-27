import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../components/common/Container";
import { Criteria } from "../../components/pokedex/Criteria";
import { PageType } from "../../constants/PageType";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import {
  searchPokemonSchema,
  SearchPokemonSchema,
} from "../../schema/SearchPokemonSchema";
import { usePokemonStore } from "../../store/PokemonStore";
import { PokemonContainer } from "../pokemon/PokemonContainer";
import { Content } from "./Content";
import { usePokedex } from "./PokedexContext";

export const PokedexContainer = () => {
  const {
    query,
    pokemonList,
    pageType,
    selectedPokemon,
    isSearch,
    onSetKeyword,
    onSetIsSearch,
    onLoadMore,
    onGoBack,
    onAddDetail,
  } = usePokemonStore();

  const { pokemonData, open, onOpenForm, onClose } = usePokedex();

  const searchForm = useForm<SearchPokemonSchema>({
    defaultValues: { keyword: "" },
    resolver: zodResolver(searchPokemonSchema),
    mode: "all",
  });

  return (
    <>
      {pageType === PageType.Search && (
        <Container>
          <FormProvider {...searchForm}>
            <Criteria
              onSetKeyword={onSetKeyword}
              onSetIsSearch={onSetIsSearch}
            />
          </FormProvider>

          <Content
            pokemonList={pokemonData}
            isSearch={isSearch}
            pokemonName={query.keyword}
            onLoadMore={onLoadMore}
          />
        </Container>
      )}

      {pageType === PageType.ViewDetail && pokemonList && (
        <PokemonContainer
          pokemon={
            _.find(pokemonList, {
              name: selectedPokemon,
            }) as PokemonDetailModel
          }
          open={open}
          onGoBack={onGoBack}
          onSubmit={onAddDetail}
          onAdd={onOpenForm}
          onClose={onClose}
        />
      )}
    </>
  );
};
