export class Leaving_Time {
  leaveTime(Time) {
    cy.get("#LeavingTime")
      .clear()
      .type(Time)
      .invoke("prop", "value")
      .should("contain", Time);
    cy.wait(1000);
  }
}
export const OnLeaving_Time = new Leaving_Time();
