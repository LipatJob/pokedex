import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";
function search(value) {
  cy.get(".search").type(value);
  cy.get(".submit-search").click();
}
Feature("Previous and Next Button", () => {
  beforeEach(() => {
    cy.intercept("https://pokeapi.co/api/v2/pokemon*").as("pokemon");
    cy.visit(URL).wait("@pokemon");
  });
  Given("that I am viewing bulbasaur", () => {
    When("I click next", () => {
      cy.get(".pokemon#1").click();
      cy.get(".next").click();
    });
    Then("the current pokemon being viewed must be Ivysaur", () => {
      cy.get(".pokemonDetails").contains("ivysaur", { matchCase: false });
    });
  });

  Given("that I am viewing Ivysaur", () => {
    When("I click next", () => {
      cy.get(".pokemon#2").click();

      cy.get(".previous").click();
    });
    Then("the current pokemon being viewed must be Ivysaur", () => {
      cy.get(".pokemonDetails").contains("bulbasaur", { matchCase: false });
    });
  });
  Given("that I am searching for char and I have selected charizard", () => {
    When("I click next", () => {
      search("char");
      cy.get(".pokemon#6").click();
      cy.get(".next").click();
    });
    Then("the current pokemon being viewed must be chimchar", () => {
      cy.get(".pokemonDetails").contains("chimchar", { matchCase: false });
    });
  });
  Given(
    "that I am have sorted the Pokemons by name ascending and I have selected Abomasnow",
    () => {
      When("I click next", () => {
        cy.get(".sort").select("NAME_ASC");
        cy.get(".pokemon#460").click();
        cy.get(".next").click();
      });
      Then("the current pokemon being viewed must be Abomasnow (mega)", () => {
        cy.get(".pokemonDetails").contains("Abomasnow (mega)", {
          matchCase: false,
        });
      });
    }
  );
});
