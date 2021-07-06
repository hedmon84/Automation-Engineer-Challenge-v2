import { onParkingLotPicker } from "../support/page_objects/parking_lot_picker";

describe("Testing_Valet_Parking_Costs", () => {
  it("Open Application", () => {
    cy.openMainPage();
  });

  it("Parking Lot Test", () => {
    onParkingLotPicker.pickLot("Valet Parking", "Valet Parking");
  });
});
