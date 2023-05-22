const URL = "http://localhost:3000";

const Given = before;
const When = beforeEach;
const Then = it;

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit(URL);
  });
});

function cardShouldContainInformation(info) {
  cy.get(`.pokemon#${info.name}`).within(() => {
    cy.get(".id").should("contain.text", info.id);
    cy.get(".name").should("contain.text", info.name);
    cy.get(".photo").should("have.attr", "src", info.photo);
    info.types.forEach((type) => {
      cy.get(".types").children().should("contain.text", type);
    });
  });
}
context("Given Pokemons bulbasaur, ivysaur, and venusaur", () => {
  beforeEach("When I open the website", () => {
    cy.intercept("https://pokeapi.co/api/v2/pokemon").as("pokemon");
    cy.visit(URL).wait("@pokemon", { requestTimeout: 10000 });
  });
  it("Then I should be able to see a card with the following information", () => {
    cardShouldContainInformation({
      id: "1",
      name: "bulbasaur",
      photo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      types: ["grass", "poison"],
    });
  });
  it("Then I should be able to see a card with the following information", () => {
    cardShouldContainInformation({
      id: "2",
      name: "ivysaur",
      photo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      types: ["grass", "poison"],
    });
  });
  it("Then I should be able to see a card with the following information", () => {
    cardShouldContainInformation({
      id: "3",
      name: "venusaur",
      photo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      types: ["grass", "poison"],
    });
  });
});
