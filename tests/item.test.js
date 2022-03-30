const {Item} = require("../lib/gilded_rose");

describe("Item class", () => {
  it("should have a name", () => {
    const sausage = new Item("sausage", 0, 1);
    expect(sausage.name).toBe("sausage");
  });
  it("should have a sellIn figure", () => {
    const sausage = new Item("sausage", 0, 1);
    expect(sausage.sellIn).toBe(0);
  });
  it("should have a quality figure", () => {
    const sausage = new Item("sausage", 0, 1);
    expect(sausage.quality).toBe(1);
  });
});