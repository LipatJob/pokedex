const URL = "http://localhost:3000";

const Given = it;
const When = it;
const Then = it;

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit(URL);
  });
});
describe("Pokemon Card List View", () => {
  Given("Given Pokemons bulbasaur, ivysaur, and venusaur", () => {});
  When("When I open the website", () => {
    cy.visit(URL);
  });
  Then(
    "Then I should be able to see a card with the following information",
    () => {
      const info = {
        idno: "1",
        name: "bulbasaur",
        photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/1",
        types: ["grass", "poison"],
      };
      const pokemon = cy.get(`.pokemon#${info.name}`);
      pokemon.get(".idno").should("contain.text", info.idno);
      pokemon.get(".name").should("contain.text", info.name);
      pokemon.get(".photo").should("contain.text", info.photo);
      info.types.forEach((type) => {
        pokemon.get(".type").contains(type).should("exist");
      });
    }
  );
  Then(
    "Then I should be able to see a card with the following information",
    () => {
      const info = {
        idno: "2",
        name: "ivysaur",
        photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/2",
        types: ["grass", "poison"],
      };

      const pokemon = cy.get(`.pokemon#${info.name}`);
      pokemon.get(".idno").should("contain.text", info.idno);
      pokemon.get(".name").should("contain.text", info.name);
      pokemon.get(".photo").should("contain.text", info.photo);
      info.types.forEach((type) => {
        pokemon.get(".type").contains(type).should("exist");
      });
    }
  );
  Then(
    "Then I should be able to see a card with the following information",
    () => {
      const info = {
        idno: "3",
        name: "venusaur",
        photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/3",
        types: ["grass", "poison"],
      };

      const pokemon = cy.get(`.pokemon#${info.name}`);
      pokemon.get(".idno").should("contain.text", info.idno);
      pokemon.get(".name").should("contain.text", info.name);
      pokemon.get(".photo").should("contain.text", info.photo);
      info.types.forEach((type) => {
        pokemon.get(".type").contains(type).should("exist");
      });
    }
  );
});
