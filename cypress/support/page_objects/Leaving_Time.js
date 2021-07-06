export class Leaving_Time {
  leaveTime(Time) {
    cy.get("#LeavingTime")
      .clear()
      .type(Time)
      .invoke("prop", "value")
      .should("contain", Time);
  }
}
export const OnLeaving_Time = new Leaving_Time();
