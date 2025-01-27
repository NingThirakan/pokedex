import { useEffect, useState } from "react";
import { ExType } from "../../@types/TestType";
import { useGetAllPokemon } from "../../hook/useGetAllPokemon";
import "../../extensions/ArrayExtension";
import { Box, Typography } from "@mui/material";
import _ from "lodash";

export const TestContainer = () => {
  // const [pokemon, setPokemon] = useState<ExType[]>([]);

  // const { data } = useGetAllPokemon({ offset: 0, limit: 10 });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (data) {
  //       const result = await data.pokemonList.transformPokemon();
  //       setPokemon(result);
  //     }
  //   };

  //   fetchData();
  // }, [data]);

  // useEffect(() => {
  //   console.log(pokemon);
  // }, []);

  // return (
  //   <Box p={2} pt={0}>
  //     {pokemon.map((item, index) => (
  //       <Box key={index} pt={2}>
  //         <Typography>Pokemon name: {_.upperFirst(item.name)}</Typography>
  //         {item.ability.map((a, i) => (
  //           <Box key={i}>
  //             <Typography>Ability name: {a.name}</Typography>
  //             <Typography>Effect: {a.effect}</Typography>
  //           </Box>
  //         ))}
  //       </Box>
  //     ))}
  //   </Box>
  // );

  return <></>;
};
