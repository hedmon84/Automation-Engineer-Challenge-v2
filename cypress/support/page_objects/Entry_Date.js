export class Entry_Date {
  pickDate(Date) {
    cy.get("#StartingDate")
      .clear()
      .type(Date)
      .invoke("prop", "value")
      .should("contain", Date);
  }
}
export const onEntry_Date = new Entry_Date();
