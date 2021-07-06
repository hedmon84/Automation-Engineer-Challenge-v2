export class Entry_Time {
  pickTime(Time) {
    cy.get("#StartingTime")
      .clear()
      .type(Time)
      .invoke("prop", "value")
      .should("contain", Time);
  }
}
export const OnEntry_Time = new Entry_Time();
