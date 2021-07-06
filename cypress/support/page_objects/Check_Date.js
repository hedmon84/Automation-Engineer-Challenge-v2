export class Check_Date {
  CheckDate(data) {
    cy.get(
      "body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.BodyCopy > b"
    ).then((date) => {
      const day = date.text().trim();
      expect(day).to.equal(data);
    });
  }
}
export const onCheck_Date = new Check_Date();
