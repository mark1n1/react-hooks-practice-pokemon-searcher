import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [filter, setFilter] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons));
  }, []);

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  function handleAddNewPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNewPokemon={ handleAddNewPokemon }/>
      <br />
      <Search onFilterChange={ handleFilterChange }/>
      <br />
      <PokemonCollection filter={ filter } pokemons={ pokemons }/>
    </Container>
  );
}

export default PokemonPage;
