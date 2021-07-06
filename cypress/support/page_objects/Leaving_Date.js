export class Leaving_Date {
  leaveDate(Date) {
    cy.get("#LeavingDate")
      .clear()
      .type(Date)
      .invoke("prop", "value")
      .should("contain", Date);
  }
}
export const OnLeaving_Date = new Leaving_Date();
