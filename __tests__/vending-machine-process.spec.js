const VendingMachine = require("../src/vending-machine-process");
const itemInventory = require("../data/vending-machine-inventory");
const changeInventory = require("../data/coin-inventory");
const vm = new VendingMachine(itemInventory, changeInventory);

//create 10 methods
//TODO: print vending machine inventory
//TODO: refill vending machine inventory
//TODO: resupply vending machine change
//TODO: dispense inventory based on payment
//TODO: return change as coins

// NEED ONE MORE TEST
describe("Vending Machine:", () => {
  describe("Purchase Item:", () => {
    //when item is available and perfect input
    describe("When selection = 'A1' with exact change ", () => {
      it("should return Lollipop with no change", () => {
        expect(vm.dispenseItem("A1", 1.25)).toEqual("Lollipop");
      });
    });
    //when item is sold out
    describe("When selection = 'B1' with exact change", () => {
      it("should throw an error 'Sorry, this item is sold out' and return all change", () => {
        expect(() => vm.dispenseItem("B1", 10)).toThrow(
          "Sorry, this item is sold out"
        );
      });
    });
    // //when there is insufficient funds to buy the item
    describe("When selection = 'A3', changeInput='2.5'", () => {
      it("should throw an error 'Sorry, you must put 0.25 more to purchase'", () => {
        expect(() => vm.dispenseItem("A3", 2.5)).toThrow(
          "Sorry, you must put $0.25 more to purchase"
        );
      });
    });

    //when there is change returned
    // describe("When selection = 'A3', changeInput='3'", () => {
    //     it("should return item name and change back", () => {
    //       expect(() => vm.dispenseItem("A3", 3)).toEqual("You bought a Cookies n Cream Bar, and get 1 quarter back in change");
    //     });
    //   });

    //when incorrect code is inputted(item doesnt exist)
    describe("When selection = 'A6'", () => {
      it("should throw an error 'Sorry, this is not a valid selection'", () => {
        expect(() => vm.dispenseItem("A6", null)).toThrow(
          "Sorry, this is not a valid selection"
        );
      });
    });
  });

  describe("Restock Inventory:", () => {
    //     //     //when item needs restocking
    describe("When restockItem = 'A3' ", () => {
      it("should return 'Inventory count is now full (15) for this item'", () => {
        expect(vm.restockItem("A3")).toEqual(
          "Inventory count is now full (15) for this item"
        );
      });
    });
    //     //     //when item already has max inventory
    describe("When restockItem = 'B3' ", () => {
      it("should throw an error 'Inventory count is already full (10)'", () => {
        expect(() => vm.restockItem("B3")).toThrow(
          "Inventory count is already full (10)"
        );
      });
    });
    //     //when item does not exist in inventory
    describe("When restockItem = 'B5' ", () => {
      it("should throw an error 'This item does not exist'", () => {
        expect(() => vm.restockItem("B5")).toThrow("This item does not exist");
      });
    });
  });
  //   describe("Resupply Inventory Change:", () => {
  //     //     //when change needs restocking
  //     describe("When restocking 5c ", () => {
  //       it("should return new current quantity of 5c", () => {
  //         expect(() => vm.restockChangeCount("5c")).toEqual(
  //           "Inventory count is now full (50) for this change"
  //         );
  //       });
  //     });
  //     //     //when change already has max inventory
});
