import { URL } from "../utils/constants";
import { Feature, Given, When, Then, And } from "../utils/gherkin";

Feature("View weakness", () => {
  beforeEach(() => {
    cy.intercept("https://pokeapi.co/api/v2/pokemon*").as("pokemon");
    cy.visit(URL).wait("@pokemon");
  });

  Given(
    "the pokemons bulbasaur, charmander, squirtle, ratata, and ekans",
    () => {
      When("when I select bulbasaur, a grass and poison type pokemon", () => {
        cy.get(".pokemon#1").click();
      });
      Then(
        "the weaknesses must be “Flying, Poison, Bug, Steel, Fire, Grass, Dragon, Ground, Rock, Ghost”",
        () => {
          const weaknesses = [
            "Flying",
            "Poison",
            "Bug",
            "Steel",
            "Fire",
            "Grass",
            "Dragon",
            "Ground",
            "Rock",
            "Ghost",
          ];
          weaknesses.forEach((weakness) => {
            cy.get(".weaknesses").contains(weakness, { matchCase: false });
          });
        }
      );
    }
  );

  Given(
    "the pokemons bulbasaur, charmander, squirtle, ratata, and ekans",
    () => {
      When("when I select charmander, a fire type pokemon", () => {
        cy.get(".pokemon#4").click();
      });
      Then("the weaknesses must be “Rock, Fire, Water, Dragon", () => {
        const weaknesses = ["Rock", "Fire", "Water", "Dragon"];
        weaknesses.forEach((weakness) => {
          cy.get(".weaknesses").contains(weakness, { matchCase: false });
        });
      });
    }
  );

  Given(
    "the pokemons bulbasaur, charmander, squirtle, ratata, and ekans",
    () => {
      When("when I select squirtle, a water type pokemon", () => {
        cy.get(".pokemon#7").click();
      });
      Then("the weaknesses must be “Water, Grass, Dragon”", () => {
        const weaknesses = ["Water", "Grass", "Dragon"];
        weaknesses.forEach((weakness) => {
          cy.get(".weaknesses").contains(weakness, { matchCase: false });
        });
      });
    }
  );

  Given(
    "the pokemons bulbasaur, charmander, squirtle, ratata, and ekans",
    () => {
      When("when I select ratata, a normal type pokemon", () => {
        cy.get(".search").type("rattata");
        cy.get(".submit-search").click();
        cy.get(".pokemon#19").click();
      });
      Then("the weaknesses must be “Rock, Ghost, Steel”", () => {
        const weaknesses = ["Rock", "Ghost", "Steel"];
        weaknesses.forEach((weakness) => {
          cy.get(".weaknesses").contains(weakness, { matchCase: false });
        });
      });
    }
  );

  Given(
    "the pokemons bulbasaur, charmander, squirtle, ratata, and ekans",
    () => {
      When("when I select ekans, a poison type pokemon", () => {
        cy.get(".search").type("ekans");
        cy.get(".submit-search").click();
        cy.get(".pokemon#23").click();
      });
      Then(
        "the weaknesses must be “Poison, Ground, Rock, Ghost, Steel”",
        () => {
          const weaknesses = ["Poison", "Ground", "Rock", "Ghost", "Steel"];
          weaknesses.forEach((weakness) => {
            cy.get(".weaknesses").contains(weakness, { matchCase: false });
          });
        }
      );
    }
  );
});
