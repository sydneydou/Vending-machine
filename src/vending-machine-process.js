class VendingMachine {
  constructor(itemInventory, changeInventory) {
    this._itemInventory = itemInventory;
    this._changeInventory = changeInventory;
  }

  dispenseItem(selection, changeInput) {
    const item = this._itemInventory.items;
    const change = this._changeInventory.change;
    const price = item[selection].price;
    const name = item[selection].name;
    if (!item[selection])
      throw new Error("Sorry, this is not a valid selection");
    if (price === changeInput) {
      if (item[selection].currentQuantity === 0) {
        throw new Error("Sorry, this item is sold out");
      }
      item[selection].currentQuantity -= 1;
      return name;
    }
    let changeRequired = price - changeInput;
    if (price > changeInput) {
      throw new Error(
        "Sorry, you must put $" +
          changeRequired +
          " more to purchase" +
          " a " +
          name
      );
    } else if (price < changeInput) {
      let changeReturned = changeInput - price;
      if ((changeReturned * 100) % 25 === 0) {
        return (
          "You bought a " +
          name +
          ", and get 1 " +
          change.quarter.name +
          " back in change"
        );
      }
    }
  }
  restockItem(restockItem) {
    const item = this._itemInventory.items;
    const maxQuantity = item[restockItem].maxQuantity;
    const currentQuantity = item[restockItem].currentQuantity;
    if (!item[restockItem]) throw new Error("This item does not exist");
    if (currentQuantity === maxQuantity) {
      throw new Error("Inventory count is already full (" + maxQuantity + ")");
    }
    const possibleRestock = maxQuantity - currentQuantity;
    const itemRestock = currentQuantity + possibleRestock;
    return "Inventory count is now full (" + itemRestock + ") for this item";
  }

  resupplyChange(restockChange) {
    const change = this._changeInventory.change;
    const currentQuantity = change[restockChange].currentQuantity;
    const maxQuantity = change[restockChange].maxQuantity;
    const possibleRestock = maxQuantity - currentQuantity;
    const changeRestock = currentQuantity + possibleRestock;
    if (currentQuantity === maxQuantity) {
      throw new Error(
        "Inventory count is already full (" +
          maxQuantity +
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
