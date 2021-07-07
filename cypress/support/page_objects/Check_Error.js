export class Check_Error {
  CheckErrMessage(data) {
    cy.get(
      "body > form > table > tbody > tr:nth-child(4) > td.SubHead > b"
    ).then((error) => {
      const error_message = error.text().trim();
      expect(error_message).to.equal(data);
    });
    cy.wait(1000);
  }
}
export const onCheck_Error = new Check_Error();
