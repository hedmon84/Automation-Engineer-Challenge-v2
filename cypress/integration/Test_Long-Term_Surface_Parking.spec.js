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

describe("Testing  the Long-Term Surface Parking (North Lot) Parking cost should be $2.00 per hour", () => {
  it("Open Application", () => {
    cy.openMainPage();
  });

  it("Parking Lot Test", () => {
    onParkingLotPicker.pickLot(
      "Long-Term Surface Parking",
      "Long-Term Surface Parking"
    );
  });

  it("Entry Date Test", () => {
    onEntry_Date.pickDate("7/29/2021");
  });

  it("Starting Time Test", () => {
    OnEntry_Time.pickTime("12:00");
  });

  it("Radio_Button-Test", () => {
    onEntry_RB_AMPM.pickPeriod("PM");
  });
  it("Leaving Date Test", () => {
    OnLeaving_Date.leaveDate("7/29/2021");
  });

  it("Leaving Time Test", () => {
    OnLeaving_Time.leaveTime("3:00");
  });

  it("Leaving Time AM or PM Test", () => {
    onLeaving_RB_AMPM.pickPeriod("PM");
  });

  it("Format Submit Test", () => {
    onSubmit_Form.Submit();
  });

  it("Check Correct Price Test", () => {
    onCheck_Price.ShouldBe("$ 6.00");
  });

  it("Check Correct Date Test", () => {
    onCheck_Date.CheckDate("(0 Days, 3 Hours, 0 Minutes)");
  });
});

describe("Testing  the Long-Term Surface Parking (North Lot)  cost should be $10.00 daily maximum", () => {
  it("Open Application", () => {
    cy.openMainPage();
  });

  it("Parking Lot Test", () => {
    onParkingLotPicker.pickLot(
      "Long-Term Surface Parking",
      "Long-Term Surface Parking"
    );
  });

  it("Entry Date Test", () => {
    onEntry_Date.pickDate("7/29/2021");
  });

  it("Starting Time Test", () => {
    OnEntry_Time.pickTime("12:00");
  });

  it("Radio_Button-Test", () => {
    onEntry_RB_AMPM.pickPeriod("AM");
  });
  it("Leaving Date Test", () => {
    OnLeaving_Date.leaveDate("7/29/2021");
  });

  it("Leaving Time Test", () => {
    OnLeaving_Time.leaveTime("12:00");
  });

  it("Leaving Time AM or PM Test", () => {
    onLeaving_RB_AMPM.pickPeriod("PM");
  });

  it("Format Submit Test", () => {
    onSubmit_Form.Submit();
  });

  it("Check Correct Price Test", () => {
    onCheck_Price.ShouldBe("$ 10.00");
  });

  it("Check Correct Date Test", () => {
    onCheck_Date.CheckDate("(0 Days, 12 Hours, 0 Minutes)");
  });
});

describe("Testing  the Long-Term Surface Parking (North Lot)  Parking cost should be $60.00 per week (7th day free)", () => {
  it("Open Application", () => {
    cy.openMainPage();
  });

  it("Parking Lot Test", () => {
    onParkingLotPicker.pickLot(
      "Long-Term Surface Parking",
      "Long-Term Surface Parking"
    );
  });

  it("Entry Date Test", () => {
    onEntry_Date.pickDate("7/5/2021");
  });

  it("Starting Time Test", () => {
    OnEntry_Time.pickTime("12:00");
  });

  it("Radio_Button-Test", () => {
    onEntry_RB_AMPM.pickPeriod("AM");
  });
  it("Leaving Date Test", () => {
    OnLeaving_Date.leaveDate("7/12/2021");
  });

  it("Leaving Time Test", () => {
    OnLeaving_Time.leaveTime("12:00");
  });

  it("Leaving Time AM or PM Test", () => {
    onLeaving_RB_AMPM.pickPeriod("AM");
  });

  it("Format Submit Test", () => {
    onSubmit_Form.Submit();
  });

  it("Check Correct Price Test", () => {
    onCheck_Price.ShouldBe("$ 60.00");
  });

  it("Check Correct Date Test", () => {
    onCheck_Date.CheckDate("(7 Days, 0 Hours, 0 Minutes)");
  });
});
