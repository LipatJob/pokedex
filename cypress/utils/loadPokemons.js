const loadPokemons = () => {
  cy.fixture("pokemon.json").then((value) => {
    localStorage.setItem("pokemons", JSON.stringify(value));
  });
};
export default loadPokemons;
