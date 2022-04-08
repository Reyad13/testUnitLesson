describe("Calculator", () => {
    it("Test addition", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("+").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
});

describe("Calculator", () => {
    it("Test substraction", () => {
      cy.visit("http://localhost:3000");
      cy.contains("2").click();
      cy.contains("-").click();
      cy.contains("1").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
});


describe("Calculator", () => {
    it("Test division", () => {
      cy.visit("http://localhost:3000");
      cy.contains("8").click();
      cy.contains("/").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("4");
    });
});


describe("Calculator", () => {
    it("Test square", () => {
      cy.visit("http://localhost:3000");
      cy.contains("9").click();
      cy.contains("√x").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
});


describe("Calculator", () => {
    it("Test modublo", () => {
      cy.visit("http://localhost:3000");
      cy.contains("5").click();
      cy.contains("%").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
});
