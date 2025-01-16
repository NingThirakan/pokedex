import { Button } from "@mui/material";
import _ from "lodash";
import { useEffect } from "react";
import { useGetAllPokemon } from "../../hook/useGetAllPokemon";
import { useSearchPokemon } from "../../hook/useSearchPokemon";
import { PokemonDetailModel } from "../../model/PokemonDetailModel";
import { usePokemonStore } from "../../store/PokemonStore";
import { BoxContainer } from "../../components/common/BoxContainer";
import { Container } from "../../components/common/Container";
import { Loading } from "../../components/common/Loading";
import { PokemonContainer } from "../pokemon/PokemonContainer";
import { Criteria } from "../../components/pokedex/Criteria";
import { PokemonCard } from "../../components/pokemon/PokemonCard";
import { useUserProfile } from "../../store/UserProfileStore";
import { useNavigate } from "react-router-dom";

export const PokedexContainer = () => {
  const { userProfile } = useUserProfile();
  const {
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
  } = usePokemonStore();

  const navigate = useNavigate();

  const { data, isFetching: isFetchingGetAllPokemon } = useGetAllPokemon();

  const { data: pokemon, isFetching: isisFetchingSearchPokemon } =
    useSearchPokemon();

  useEffect(() => {
    if (!userProfile) navigate("/login");
  }, [userProfile]);

  useEffect(() => {
    if (data?.pokemonList) {
      onChangePokemonList(data.pokemonList);
    }
  }, [data]);

  if (isFetchingGetAllPokemon || isisFetchingSearchPokemon) {
    return <Loading open={true} />;
  }

  if (isViewDetail && pokemonList) {
    const pokemon = _.find(pokemonList, {
      id: pokemonId,
    }) as PokemonDetailModel;

    return <PokemonContainer pokemon={pokemon} onGoBack={onGoBack} />;
  }

  return (
    <Container>
      <Criteria
        pokemon={pokemon}
        onChangePokemonList={onChangePokemonList}
        onChangeKeyword={onChangeKeyword}
        onChangeEnableGetAll={onChangeEnableGetAll}
      />
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
