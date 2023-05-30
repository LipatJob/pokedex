import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";

Feature("Loading Screen ", () => {
  Given("Given some Pokémon on the website ", () => {
    When("When I open the website", () => {
      cy.intercept("https://pokeapi.co/api/v2/pokemon*").as("pokemon");
      cy.visit(URL).wait("@pokemon");
    });
    Then("Then the website should show a loading screen", () => {
        cy.get(".loading").should("be.visible");
    });
    And("And the website should show the Pokemon after the website has loaded", () => {
        cy.get(".pokemon-list").find(".pokemon").should("have.length", 10);
    })
  });
});
