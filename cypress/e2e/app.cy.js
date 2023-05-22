const URL = "http://localhost:3000";

const Feature = describe;
const Given = (title, ...args) => context("Given " + title, ...args);
const When = (title, ...args) => beforeEach("When " + title, ...args);
const Then = (title, ...args) => it("Then " + title, ...args);
const And = (title, ...args) => it("And " + title, ...args);

beforeEach(() => {
  cy.fixture("pokemon.json").then((value) => {
    localStorage.setItem("pokemons", JSON.stringify(value));
  });
});

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit(URL);
  });
});

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
        .contains(".pokemon", "Zygarde (Complete)")
        .should("exist");
    });
    And("Zweilous should appear next", () => {
      cy.get(".pokemon")
        .contains(".pokemon", "Zygarde (Complete)")
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
