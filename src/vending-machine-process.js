class VendingMachine {
  constructor(itemInventory, changeInventory) {
    this._itemInventory = itemInventory;
    this._changeInventory = changeInventory;
  }

  dispenseItem(selection, changeInput) {
    const item = this._itemInventory.items;
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
        "Sorry, you must put $" + changeRequired + " more to purchase"
      );
    } else if (item[selection].price < changeInput) {
      let changeReturned = changeInput - item[selection].price;
      console.log(changeReturned);
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

  //   restockChangeCount(restockChange) {
  //     const change = this._changeInventory.change;
  //     const possibleRestock =
  //       change[restockChange].maxQuantity - change[restockChange].currentQuantity;
  //     const changeRestock =
  //       change[restockChange].currentQuantity + possibleRestock;
  //     console.log(changeRestock);
  //     return (
  //       "Inventory count is now full (" + changeRestock + ") for this change"
  //     );
  //   }
}
module.exports = VendingMachine;
