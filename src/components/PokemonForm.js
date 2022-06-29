import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddNewPokemon }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      hp: event.target.hp.value,
      sprites: {
        front: event.target.frontUrl.value, //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back: event.target.backUrl.value //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((newPokemon) => onAddNewPokemon(newPokemon));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={ handleSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
