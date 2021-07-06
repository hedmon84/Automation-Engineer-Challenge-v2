import { onParkingLotPicker } from "../support/page_objects/Parking_Lot_Picker";
import { onEntry_Date } from "../support/page_objects/Entry_Date";

describe("Testing_Valet_Parking_Costs", () => {
  it("Open Application", () => {
    cy.openMainPage();
  });

  it("Parking Lot Test", () => {
    onParkingLotPicker.pickLot("Valet Parking", "Valet Parking");
  });

  it("Entry Date Test", () => {
    onEntry_Date.pickDate("7/29/2020");
  });
});