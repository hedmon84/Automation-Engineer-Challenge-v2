export class Entry_Time {
  pickTime(Time) {
    cy.get("#StartingTime")
      .clear()
      .type(Time)
      .invoke("prop", "value")
      .should("contain", Time);
      cy.wait(1000);
  }
}
export const OnEntry_Time = new Entry_Time();
