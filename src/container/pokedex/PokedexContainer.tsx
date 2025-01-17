import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import _ from "lodash";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../../components/common/BoxContainer";
import { Container } from "../../components/common/Container";
import { Loading } from "../../components/common/Loading";
import { Criteria } from "../../components/pokedex/Criteria";
import { PokemonCard } from "../../components/pokemon/PokemonCard";
import { useGetAllPokemon } from "../../hook/useGetAllPokemon";
import { useSearchPokemon } from "../../hook/useSearchPokemon";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import {
  searchPokemonSchema,
  SearchPokemonSchema,
} from "../../schema/SearchPokemonSchema";
import { usePokemonStore } from "../../store/PokemonStore";
import { useUserProfile } from "../../store/UserProfileStore";
import { PokemonContainer } from "../pokemon/PokemonContainer";

export const PokedexContainer = () => {
  const { userProfile } = useUserProfile();
  const {
    query,
    pokemonList,
    isViewDetail,
    pokemonId,
    enableGetAll,
    onChangePokemonList,
    onChangeIsViewDetail,
    onGoBack,
    onChangeKeyword,
    onChangeEnableGetAll,
    onLoadMore,
    onAddDetail,
  } = usePokemonStore();

  const navigate = useNavigate();

  const { data: allPokemonData, isFetching: isFetchingGetAllPokemon } =
    useGetAllPokemon({ ...query });

  const { data: pokemon, isFetching: isisFetchingSearchPokemon } =
    useSearchPokemon(query.keyword ?? "");

  const searchForm = useForm<SearchPokemonSchema>({
    defaultValues: { keyword: "" },
    resolver: zodResolver(searchPokemonSchema),
    mode: "all",
  });

  useEffect(() => {
    if (!userProfile) navigate("/login");
  }, [userProfile]);

  useEffect(() => {
    if (allPokemonData?.pokemonList) {
      onChangePokemonList(allPokemonData.pokemonList);
    }
  }, [allPokemonData]);

  if (isFetchingGetAllPokemon || isisFetchingSearchPokemon) {
    return <Loading open={true} />;
  }

  if (isViewDetail && pokemonList) {
    const pokemon = _.find(pokemonList, {
      id: pokemonId,
    }) as PokemonDetailModel;

    return (
      <PokemonContainer
        pokemon={pokemon}
        onGoBack={onGoBack}
        onAdd={onAddDetail}
      />
    );
  }

  return (
    <Container>
      <FormProvider {...searchForm}>
        <Criteria
          pokemon={pokemon}
          onChangePokemonList={onChangePokemonList}
          onChangeKeyword={onChangeKeyword}
          onChangeEnableGetAll={onChangeEnableGetAll}
        />
      </FormProvider>

      <BoxContainer>
        {_.map(pokemonList, (pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={onChangeIsViewDetail}
          />
        ))}
        {enableGetAll && (
          <Button onClick={onLoadMore} sx={{ mt: 1 }}>
            Load more
          </Button>
        )}
      </BoxContainer>
    </Container>
  );
};
