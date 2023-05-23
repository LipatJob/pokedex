import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";

Feature("Search and Filter Pokemon", () => {
  beforeEach(() => {
    cy.intercept("https://pokeapi.co/api/v2/pokemon*").as("pokemon");
    cy.visit(URL).wait("@pokemon");
  });

  function search(value) {
    cy.get(".search").type(value);
    cy.get(".submit-search").click();
  }

  Given("Pokemon with IDs 1, 2, 10 and 24", () => {
    When("I search for 1", () => {
      search("1");
    });
    Then("I should get Pokemon with IDs 1 and 10", () => {
      cy.get(".pokemon#1").should("exist");
      cy.get(".pokemon#10").should("exist");
    });
  });

  Given("Pokemon with IDs 1, 2, 10 and 24", () => {
    When("I search for 10", () => {
      search("10");
    });
    Then("I should get Pokemon with the ID 10", () => {
      cy.get(".pokemon#10").should("exist");
    });
  });

  Given(
    "Pokemon with names bulbasaur, ivysaur, charmander and charmeleon",
    () => {
      When("I search for bulbasaur", () => {
        search("bulbasaur");
      });
      Then("I should get Pokemon with the name bulbasaur", () => {
        cy.get(".pokemon")
          .contains("bulbasaur", { matchCase: false })
          .should("exist");
      });
    }
  );

  Given(
    "Pokemon with names bulbasaur, ivysaur, charmander and charmeleon",
    () => {
      When("I search for charm", () => {
        search("charm");
      });
      Then(
        "I should get Pokemon with the names charmander and charmeleon",
        () => {
          cy.get(".pokemon")
            .contains("charmander", { matchCase: false })
            .should("exist")
            .get(".pokemon")
            .contains("charmeleon", { matchCase: false })
            .should("exist");
        }
      );
    }
  );
});
