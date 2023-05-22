import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";
import loadPokemons from "../utils/loadPokemons";

beforeEach(loadPokemons);

Feature("Detailed Info View", () => {
  beforeEach(() => {
    cy.visit(URL);
  });
  function containsFollowingInformation(info) {
    cy.get(".pokemonDetails").within(() => {
      cy.get(".id").contains(info.id);
      cy.get(".name").contains(info.name, { matchCase: false });
      cy.get(".height").contains(info.height);
      cy.get(".weight").contains(info.weight);
      info.types.forEach((type) => {
        cy.get(".types").contains(type, { matchCase: false });
      });
      cy.get(".stat#hp").contains(info.stats.hp);
      cy.get(".stat#attack").contains(info.stats.attack);
      cy.get(".stat#defense").contains(info.stats.defense);
      cy.get(".stat#specialAttack").contains(info.stats.specialAttack);
      cy.get(".stat#specialDefense").contains(info.stats.specialDefense);
      cy.get(".stat#speed").contains(info.stats.speed);
      info.weaknesses.forEach((weakness) => {
        cy.get(".weaknesses").contains(weakness, { matchCase: false });
      });
    });
  }

  Given("the pokemons bulbasaur, ivysaur, charmander and charmeleon", () => {
    When("when I select bulbasaur", () => {
      cy.get(".pokemon#1").click();
    });
    Then("I should get the following information:", () => {
      containsFollowingInformation({
        id: 1,
        name: "bulbasaur",
        height: 7,
        weight: 69,
        types: ["grass", "poison"],
        stats: {
          hp: 45,
          attack: 49,
          defense: 49,
          specialAttack: 65,
          specialDefense: 65,
          speed: 45,
        },
        weaknesses: [
          "flying",
          "poison",
          "bug",
          "steel",
          "fire",
          "grass",
          "dragon",
          "ground",
          "rock",
          "ghost",
        ],
      });
    });
  });

  Given("the pokemons bulbasaur, ivysaur, charmander and charmeleon", () => {
    When("when I select charmander", () => {
      cy.get(".pokemon#4").click();
    });
    Then("I should get the following information:", () => {
      containsFollowingInformation({
        id: 4,
        name: "charmander",
        height: 6,
        weight: 85,
        types: ["fire"],
        stats: {
          hp: 39,
          attack: 52,
          defense: 43,
          specialAttack: 60,
          specialDefense: 50,
          speed: 65,
        },
        weaknesses: ["rock", "fire", "water", "dragon"],
      });
    });
  });
});
