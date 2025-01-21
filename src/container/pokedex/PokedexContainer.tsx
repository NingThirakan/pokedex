import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../components/common/Container";
import { Criteria } from "../../components/pokedex/Criteria";
import {
  searchPokemonSchema,
  SearchPokemonSchema,
} from "../../schema/SearchPokemonSchema";
import { usePokemonStore } from "../../store/PokemonStore";
import { Content } from "./Content";
import { usePokedex } from "./PokedexContext";
import { Loading } from "../../components/common/Loading";
import { Button } from "@mui/material";

export const PokedexContainer = () => {
  const { pokemon, isLoading } = usePokedex();

  const {
    pokemonList,
    isViewDetail,
    pokemonId,
    enableGetAll,
    onChangeIsViewDetail,
    onGoBack,
    onChangeKeyword,
    onChangeEnableGetAll,
    onLoadMore,
    onAddDetail,
    // query,
    // pokemonList,
    // isViewDetail,
    // pokemonId,
    // enableGetAll,
    onChangePokemonList,
    // onChangeIsViewDetail,
    // onGoBack,
    // onChangeKeyword,
    // onChangeEnableGetAll,
    // onLoadMore,
    // onAddDetail,
  } = usePokemonStore();

  const searchForm = useForm<SearchPokemonSchema>({
    defaultValues: { keyword: "" },
    resolver: zodResolver(searchPokemonSchema),
    mode: "all",
  });

  // if (isFetchingGetAllPokemon || isisFetchingSearchPokemon) {
  //   return <Loading open={true} />;
  // }

  // if (isViewDetail && pokemonList) {
  //   const pokemon = _.find(pokemonList, {
  //     id: pokemonId,
  //   }) as PokemonDetailModel;

  //   return (
  //     <PokemonContainer
  //       pokemon={pokemon}
  //       onGoBack={onGoBack}
  //       onAdd={onAddDetail}
  //     />
  //   );
  // }

  return (
    <>
      {isLoading && <Loading open={isLoading} />}
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
          onChangeIsViewDetail={onChangeIsViewDetail}
          onLoadMore={onLoadMore}
        />
      </Container>
    </>
  );
};
