const {Shop, Item} = require("../lib/gilded_rose");

describe("Gilded Rose", function() {
    describe("normal item", () => {

      //Normal item: sellIn = 0 quality = 0
      it("should return the name of the item", function() {
        const gildedRose = new Shop([new Item("sausage", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("sausage");
      });

      it("should remove a day from sellIn for sauasge", function() {
        const gildedRose = new Shop([new Item("sausage", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
      });

      it("should not degrade quality after sellIn reaches 0", function() {
        const gildedRose = new Shop([new Item("sausage", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
      });

      //Normal item: sellIn = 0 quality = 2
      it("should degrade quality by 2 after sellIn reaches 0 if quality is 2 or more ", function() {
        const gildedRose = new Shop([new Item("sausage", 0, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
      });

      //Normal item: sellIn = 0 quality = 1
      it("should degrade quality by 1 after sellIn reaches 0 if quality is 1 ", function() {
        const gildedRose = new Shop([new Item("sausage", 0, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
      });

      //Normal item: sellIn = 1 quality = 1
      it("should degrade quality by 1 if sellIn is greater than 0 ", function() {
      const gildedRose = new Shop([new Item("sausage", 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      });
    });

    describe("Sulfuras, Hand of Ragnaros item", () => {
      it("sellIn does not decrease", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      })
      it("quality does not decrease", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      })
    })
  
});