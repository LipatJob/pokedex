import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";

Feature("Pokemon Card List View ", () => {
  function cardShouldContainInformation(info) {
    cy.get(`.pokemon#${info.id}`).within(() => {
      cy.get(".id").contains(info.id);
      cy.get(".name").contains(info.name, { matchCase: false });
      cy.get(".photo").should("have.attr", "src", info.photo);
      info.types.forEach((type) => {
        cy.get(".types").contains(type, { matchCase: false });
      });
    });
  }

  Given("Pokemons bulbasaur, ivysaur, and venusaur", () => {
    When("I open the website", () => {
      cy.visit(URL);
    });
    Then(
      "I should be able to see a card with the following information",
      () => {
        cardShouldContainInformation({
          id: "1",
          name: "bulbasaur",
          photo:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          types: ["grass", "poison"],
        });
      }
    );
    And("I should be able to see a card with the following information", () => {
      cardShouldContainInformation({
        id: "2",
        name: "ivysaur",
        photo:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        types: ["grass", "poison"],
      });
    });
    And("I should be able to see a card with the following information", () => {
      cardShouldContainInformation({
        id: "3",
        name: "venusaur",
        photo:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        types: ["grass", "poison"],
      });
    });
  });
});
