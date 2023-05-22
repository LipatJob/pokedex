import { URL } from "../utils/constants";

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit(URL);
  });
});
