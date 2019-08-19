class VendingMachine {
  constructor(itemInventory, changeInventory) {
    this._itemInventory = itemInventory;
    this._changeInventory = changeInventory;
  }

  dispenseItem(selection, changeInput) {
    const item = this._itemInventory.items;
    const change = this._changeInventory.change;
    if (!item[selection])
      throw new Error("Sorry, this is not a valid selection");
    if (item[selection].price === changeInput) {
      if (item[selection].currentQuantity === 0) {
        throw new Error("Sorry, this item is sold out");
      }
      item[selection].currentQuantity -= 1;
      return item[selection].name;
    }
    let changeRequired = item[selection].price - changeInput;
    if (item[selection].price > changeInput) {
      throw new Error(
        "Sorry, you must put $" +
          changeRequired +
          " more to purchase" +
          " a " +
          item[selection].name
      );
    } else if (item[selection].price < changeInput) {
      let changeReturned = changeInput - item[selection].price;

      if ((changeReturned * 100) % 25 === 0) {
        return (
          "You bought a " +
          item[selection].name +
          ", and get 1 " +
          change.quarter.name +
          " back in change"
        );
      }
    }
  }
  restockItem(restockItem) {
    const item = this._itemInventory.items;
    if (!item[restockItem]) throw new Error("This item does not exist");
    if (item[restockItem].currentQuantity === item[restockItem].maxQuantity) {
      throw new Error(
        "Inventory count is already full (" +
          item[restockItem].maxQuantity +
          ")"
      );
    }
    const possibleRestock =
      item[restockItem].maxQuantity - item[restockItem].currentQuantity;
    const itemRestock = item[restockItem].currentQuantity + possibleRestock;
    return "Inventory count is now full (" + itemRestock + ") for this item";
  }

  resupplyChange(restockChange) {
    const change = this._changeInventory.change;
    //return change[restockChange];
    const possibleRestock =
      change[restockChange].maxQuantity - change[restockChange].currentQuantity;
    const changeRestock =
      change[restockChange].currentQuantity + possibleRestock;
    if (
      change[restockChange].currentQuantity ===
      change[restockChange].maxQuantity
    ) {
      throw new Error(
        "Inventory count is already full (" +
          change[restockChange].maxQuantity +
          ") for " +
          change[restockChange].name
      );
    }
    return (
      "Inventory count is now full (" + changeRestock + ") for this change"
    );
  }
}
module.exports = VendingMachine;
