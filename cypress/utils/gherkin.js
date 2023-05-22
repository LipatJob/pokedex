const Feature = describe;
const Given = (title, ...args) => context("Given " + title, ...args);
const When = (title, ...args) => beforeEach("When " + title, ...args);
const Then = (title, ...args) => it("Then " + title, ...args);
const And = (title, ...args) => it("And " + title, ...args);

export { Feature, Given, When, Then, And };
