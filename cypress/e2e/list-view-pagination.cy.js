import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";

Feature("Pokemon Card List View ", () => {
  Given("some Pokemons ", () => {
    When("I go to the home page", () => {
      cy.visit(URL);
    });
    Then("there are exactly 10 cards of Pokemon loaded", () => {
      cy.get(".pokemon-list").find(".pokemon").should("have.length", 10);
    });
  });
  Given("that I am at the home page ", () => {
    before(() => {
      cy.intercept("https://pokeapi.co/api/v2/pokemon/*").as("pokemon");
      cy.visit(URL).wait("@pokemon");
    });
    When("I scroll down at the end of the page", () => {
      cy.scrollTo("bottom");
    });
    Then("there are now 20 cards of Pokemon loaded", () => {
      cy.get(".pokemon-list").find(".pokemon").should("have.length", 20);
    });
  });
});
