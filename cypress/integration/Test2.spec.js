import { onParkingLotPicker } from "../support/page_objects/Parking_Lot_Picker";
import { onEntry_Date } from "../support/page_objects/Entry_Date";
import { OnEntry_Time } from "../support/page_objects/Entry_Time";
import { onEntry_RB_AMPM } from "../support/page_objects/Entry_RB_AMPM";
import { OnLeaving_Date } from "../support/page_objects/Leaving_Date";
import { OnLeaving_Time } from "../support/page_objects/Leaving_Time";
import { onLeaving_RB_AMPM } from "../support/page_objects/Leaving_RB_AMPM";
import { onSubmit_Form } from "../support/page_objects/Submit_Form";
import { onCheck_Price } from "../support/page_objects/Check_Price";
import { onCheck_Date } from "../support/page_objects/Check_Date";

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

  it("Starting Time Test", () => {
    OnEntry_Time.pickTime("12:00");
  });

  it("Radio_Button-Test", () => {
    onEntry_RB_AMPM.pickPeriod("PM");
  });
  it("Leaving Date Test", () => {
    OnLeaving_Date.leaveDate("7/29/2020");
  });

  it("Leaving Time Test", () => {
    OnLeaving_Time.leaveTime("1:00");
  });

  it("Leaving Time AM or PM Test", () => {
    onLeaving_RB_AMPM.pickPeriod("PM");
  });

  it("Format Submit Test", () => {
    onSubmit_Form.Submit();
  });

  it("Check Correct Price Test", () => {
    onCheck_Price.ShouldBe("$ 12.00");
  });

  it("Check Correct Date Test", () => {
    onCheck_Date.CheckDate("(0 Days, 1 Hours, 0 Minutes)");
  });
});
