import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ filter, pokemons }) {
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/pokemon')
  //     .then((response) => response.json())
  //     .then((pokemons) => setPokemons(pokemons));
  // }, []);

  function handlePokemonData() {
    if (filter) return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase()));

    return pokemons;
  }

  return (
    <Card.Group itemsPerRow={6}>
      { handlePokemonData().map((pokemon) => (
        <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
