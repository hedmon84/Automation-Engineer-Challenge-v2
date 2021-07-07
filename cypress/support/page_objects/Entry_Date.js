export class Entry_Date {
  pickDate(Date) {
    cy.get("#StartingDate")
      .clear()
      .type(Date)
      .invoke("prop", "value")
      .should("contain", Date);
    cy.wait(1000);
  }
}
export const onEntry_Date = new Entry_Date();
