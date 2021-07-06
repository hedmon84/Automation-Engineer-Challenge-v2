/// <reference types="cypress" />

describe("Tests is only to check if calendar , dropdown, radiobutton works", () => {
  beforeEach("Open Application", () => {
    cy.openMainPage();
  });

  it(" Choose a Parking Lot Dropdown Test", () => {
    cy.get("form")
      .find("tbody")
      .then((table) => {
        cy.wrap(table)
          .find("tr")
          .first()
          .get("select")
          .select("Short-Term Parking")
          .should("contain", " Short-Term Parking")
          .wait(1000)
          .select("Economy Parking")
          .should("contain", "Economy Parking")
          .wait(1000)
          .select("Valet Parking")
          .should("contain", "Valet Parking")
          .wait(1000)
          .select("Long-Term Garage Parking")
          .should("contain", "Long-Term Garage Parking")
          .wait(1000)
          .select("Long-Term Surface Parking")
          .should("contain", "Long-Term Surface Parking")
          .wait(1000);
      });
  });
});
