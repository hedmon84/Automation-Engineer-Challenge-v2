export class Submit_Form {
  Submit() {
    cy.get("form").submit();
  }
}
export const onSubmit_Form = new Submit_Form();
