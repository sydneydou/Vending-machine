const changeInventory = {
  change: {
    "5c": {
      name: "nickel",
      maxQuantity: 50,
      currentQuantity: 20,
      value: 0.05
    },
    "10c": {
      name: "dime",
      maxQuantity: 50,
      currentQuantity: 20,
      value: 0.1
    },
    "25c": {
      name: "quarter",
      maxQuantity: 25,
      currentQuantity: 20,
      value: 0.25
    },
    "1 dollar": {
      name: "loonie",
      maxQuantity: 25,
      currentQuantity: 10,
      value: 1.0
    },
    "2 dollars": {
      name: "twoonie",
      maxQuantity: 10,
      currentQuantity: 2,
      value: 2.0
    },
    "5 dollars": {
      name: "$5",
      maxQuantity: 2,
      currentQuantity: 1,
      value: 5.0
    },
    "10 dollars": {
      name: "$10",
      maxQuantity: 2,
      currentQuantity: 1,
      value: 10.0
    }
  }
};
module.exports = changeInventory;
