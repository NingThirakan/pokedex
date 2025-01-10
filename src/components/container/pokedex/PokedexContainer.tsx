import _ from "lodash";
import { useGetAllPokemon } from "../../../hook/useGetAllPokemon";
import { usePokemonStore } from "../../../store/PokemonStore";
import { BoxContainer } from "../../common/BoxContainer";
import { Container } from "../../common/Container";
import { Loading } from "../../common/Loading";
import { PokemonContainer } from "../pokemon/PokemonContainer";
import { Criteria } from "./Criteria";
import { PokedexCard } from "./PokedexCard";
import { PokemonDetailModel } from "../../../model/PokemonDetailModel";

export const PokedexContainer = () => {
  const { data, isLoading } = useGetAllPokemon({ offset: 0, limit: 20 });

  const { isViewDetail, pokemonId, onChangeIsViewDetail, onGoBack } =
    usePokemonStore();

  if (isLoading) {
    return <Loading open={isLoading} />;
  }

  if (isViewDetail && data) {
    const pokemon = _.find(data.pokemonList, {
      id: pokemonId,
    }) as PokemonDetailModel;
    return <PokemonContainer pokemon={pokemon} onGoBack={onGoBack} />;
  }

  return (
    <Container>
      <Criteria />
      <BoxContainer>
        {_.map(data?.pokemonList, (pokemon) => (
          <PokedexCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={onChangeIsViewDetail}
          />
        ))}
      </BoxContainer>
    </Container>
  );
};
