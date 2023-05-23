import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";

Feature("Sort Pokemons", () => {
  beforeEach(() => {
    cy.visit(URL);
  });
  Given("three Pokemons with IDs 2, 1, and 3", () => {
    When("I sort the Pokemons by ID ascending", () => {
      cy.get(".sort").select("ID_ASC");
    });
    Then("Pokemon with ID 1 should appear first", () => {
      cy.get(".pokemon#1").should("exist");
    });
    And("Pokemon with ID 2 should appear next", () => {
      cy.get(".pokemon#1").next(".pokemon#2").should("exist");
    });
    And("followed by Pokemon with ID 3", () => {
      cy.get(".pokemon#2").next(".pokemon#3").should("exist");
    });
  });

  Given("three Pokemons with IDs 10271, 10270, and 10269", () => {
    When("I sort the Pokemons by ID descending", () => {
      cy.get(".sort").select("ID_DSC");
    });
    Then("Pokemon with ID 10271 should appear first", () => {
      cy.get(".pokemon#10271").should("exist");
    });
    And("Pokemon with ID 10270 should appear next", () => {
      cy.get(".pokemon#10271").next(".pokemon#10270").should("exist");
    });
    And("followed by Pokemon with ID 10269", () => {
      cy.get(".pokemon#10270").next(".pokemon#10269").should("exist");
    });
  });

  Given("Pokemons Abomasnow, Abra, Absol and Accelgor ", () => {
    When("I sort the Pokemons by Name ascending", () => {
      cy.wait(500).get(".sort").select("NAME_ASC");
    });
    Then("Abomasnow should come first", () => {
      cy.get(".pokemon").contains("Abomasnow").should("exist");
    });
    And("Abra should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Abomasnow")
        .nextAll()
        .contains(".pokemon", "Abra")
        .should("exist");
    });
    And("Absol should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Abra")
        .nextAll()
        .contains(".pokemon", "Absol")
        .should("exist");
    });
    And("Accelgor should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Absol")
        .nextAll()
        .contains(".pokemon", "Accelgor")
        .should("exist");
    });
  });

  Given("Pokemons Zygarde, Zweilous, Zubat and Zorua", () => {
    When("I sort the Pokemons by Name descending", () => {
      cy.wait(500).get(".sort").select("NAME_DSC");
    });
    Then("Zygardes hould come first", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Zygarde (Complete)", { matchCase: false })
        .should("exist");
    });
    And("Zweilous should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Zygarde (Complete)", { matchCase: false })
        .nextAll()
        .contains(".pokemon", "Zweilous")
        .should("exist");
    });
    And("Zubat should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Zweilous")
        .nextAll()
        .contains(".pokemon", "Zubat")
        .should("exist");
    });
    And("Zorua should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Zubat")
        .nextAll()
        .contains(".pokemon", "Zorua")
        .should("exist");
    });
  });
});
