describe("Form Tets", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("abass@gmail.com");
    cy.contains(/Successfully subbed: abass@gmail.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: abass@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: abass@gmail.com!/i).should("not.exist");

    cy.get("@subscribe-input").type("abass@gmail.io");
    cy.contains(/Invalid email: abass@gmail.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: abass@gmail.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: abass@gmail.io!/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();

    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
