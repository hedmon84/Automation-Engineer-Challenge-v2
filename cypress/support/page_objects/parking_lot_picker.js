export class parkingLotPicker {
  pickLot(Lot_Name, should_be) {
    cy.get("#ParkingLot").select(Lot_Name).should("contain", should_be);
    cy.wait(1000);
  }
}
export const onParkingLotPicker = new parkingLotPicker();
