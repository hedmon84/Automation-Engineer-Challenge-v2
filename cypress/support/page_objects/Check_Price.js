export class Check_Price {
  ShouldBe(data) {
    cy.get(
      "body > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > span.SubHead > b"
    ).then((price) => {
      const value = price.text().trim();
      expect(value).to.equal(data);
    });
    cy.wait(1000);
  }
}
export const onCheck_Price = new Check_Price();
