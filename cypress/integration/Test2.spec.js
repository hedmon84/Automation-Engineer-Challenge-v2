import { onParkingLotPicker } from "../support/page_objects/Parking_Lot_Picker";
import { onEntry_Date } from "../support/page_objects/Entry_Date";
import { onEntry_RB_AMPM } from "../support/page_objects/Entry_RB_AMPM";
import { OnLeaving_Date } from "../support/page_objects/Leaving_Date";
import { OnLeaving_Time } from "../support/page_objects/Leaving_Time";
import { onLeaving_RB_AMPM } from "../support/page_objects/Leaving_RB_AMPM";

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

  it("Radio_Button-Test", () => {
    onEntry_RB_AMPM.pickPeriod("PM");
  });
});
