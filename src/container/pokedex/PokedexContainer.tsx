import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../components/common/Container";
import { Loading } from "../../components/common/Loading";
import { Criteria } from "../../components/pokedex/Criteria";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import {
  searchPokemonSchema,
  SearchPokemonSchema,
} from "../../schema/SearchPokemonSchema";
import { usePokemonStore } from "../../store/PokemonStore";
import { PokemonContainer } from "../pokemon/PokemonContainer";
import { Content } from "./Content";
import { usePokedex } from "./PokedexContext";
import { PageType } from "../../constants/PageType";

export const PokedexContainer = () => {
  const { pokemon, isLoading } = usePokedex();

  const {
    pokemonList,
    pageType,
    pokemonId,
    enableGetAll,
    onChangePageType,
    onGoBack,
    onChangeKeyword,
    onChangeEnableGetAll,
    onLoadMore,
    onAddDetail,
    onChangePokemonList,
  } = usePokemonStore();

  const searchForm = useForm<SearchPokemonSchema>({
    defaultValues: { keyword: "" },
    resolver: zodResolver(searchPokemonSchema),
    mode: "all",
  });

  return (
    <>
      {isLoading && <Loading open={isLoading} />}

      {pageType === PageType.Search && (
        <Container>
          <FormProvider {...searchForm}>
            <Criteria
              pokemon={pokemon}
              onChangePokemonList={onChangePokemonList}
              onChangeKeyword={onChangeKeyword}
              onChangeEnableGetAll={onChangeEnableGetAll}
            />
          </FormProvider>

          <Content
            pokemonList={pokemonList}
            isShowLoadMore={enableGetAll}
            onChangePageType={onChangePageType}
            onLoadMore={onLoadMore}
          />
        </Container>
      )}

      {pageType === PageType.ViewDetail && pokemonList && (
        <PokemonContainer
          pokemon={
            _.find(pokemonList, {
              id: pokemonId,
            }) as PokemonDetailModel
          }
          onGoBack={onGoBack}
          onAdd={onAddDetail}
        />
      )}
    </>
  );
};
