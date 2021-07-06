/// <reference types="cypress" />

describe("Tests is only to check if calendar , dropdown, radiobutton works", () => {
  it("Open Application", () => {
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

  it("Testing   Starting date", () => {
    cy.get("form")
      .find("tbody")
      .then((table) => {
        cy.wrap(table)
          .find("tr")
          .eq(1)
          .get("[name=StartingDate]")
          .then((date) => {
            cy.wrap(date)
              .clear()
              .type("8/30/2020")
              .invoke("prop", "value")
              .then((Value) => {
                expect(Value).to.equal("8/30/2020");
              });
          });
      });
  });

  it("Testing  Starting Time", () => {
    cy.get("#StartingTime")
      .clear()
      .type("1:00")
      .invoke("prop", "value")
      .should("contain", "1:00");
  });

  it("Testing  Radio Button", () => {
    cy.get(
      "body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=radio]:nth-child(4)"
    )
      .check({ force: true })
      .wait(1000);
    cy.get(
      "body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=radio]:nth-child(5)"
    )
      .check({ force: true })
      .wait(1000);
  });

  it("Testing  Leaving Date", () => {
    cy.get("#LeavingDate")
      .clear()
      .type("8/30/2020")
      .invoke("prop", "value")
      .should("contain", "8/30/2020");
  });
});
