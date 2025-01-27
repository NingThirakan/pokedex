import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../components/common/Container";
import { Criteria } from "../../components/pokedex/Criteria";
import { PageType } from "../../constants/PageType";
import {
  searchPokemonSchema,
  SearchPokemonSchema,
} from "../../schema/SearchPokemonSchema";
import { usePokemonStore } from "../../store/PokemonStore";
import { Content } from "./Content";
import { usePokedex } from "./PokedexContext";
import { PokemonContainer } from "../pokemon/PokemonContainer";
import _ from "lodash";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";

export const PokedexContainer = () => {
  const { pokemonData, open, onOpenForm, onClose } = usePokedex();

  const {
    pokemonList,
    pageType,
    selectedPokemon,
    enableGetAll,
    onSetKeyword,
    onSetEnableGetAll,
    onLoadMore,
    onGoBack,
    onAddDetail,
  } = usePokemonStore();

  const searchForm = useForm<SearchPokemonSchema>({
    defaultValues: { keyword: "" },
    resolver: zodResolver(searchPokemonSchema),
    mode: "all",
  });

  console.log("pokemonList", pokemonList);

  return (
    <>
      {pageType === PageType.Search && (
        <Container>
          <FormProvider {...searchForm}>
            <Criteria
              onSetKeyword={onSetKeyword}
              onSetEnableGetAll={onSetEnableGetAll}
            />
          </FormProvider>

          <Content
            pokemonList={pokemonData}
            isShowLoadMore={enableGetAll}
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
