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
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      });

      it("quality does not decrease", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
      });
    });

    describe("Aged Brie", () => {
      it("quality increases every day", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(2);
      });
      it("quality does not increase if quality == 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(50);
      });
      it("sellIn reduces each day", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
      });
    })

    describe('Backstage passes to a TAFKAL80ETC concert', () => {

      it("quality increases by 1 every day if sellIn greater than 10", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(2);
      });

      it("quality does not increase if quality is 50", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(50);
      });

      it("quality increase by 2 if sellIn equals 10", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(4);
      });

      it("quality increase by 2 if sellIn equals 6", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(4);
      });

      it("quality increase by 3 if sellIn equals 5", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(5);
      });

      it("quality increase by 3 if sellIn equals 1", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(5);
      });

      it("quality is 0 if sellIn equals 0", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
      });
      it("sellIn reduces by 1 each day", () => {
        const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
      });
    })

    describe("conjured lizard", () =>{
      it("quality reduces by 2 if quality is greater than 1", () => {
        const gildedRose = new Shop([new Item('conjured lizard', 0, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
      });
      it("sellIn reduces by 1 ", () => {
        const gildedRose = new Shop([new Item('conjured lizard', 1, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
      });
      // it("quality reduces by 1 if quality is equal to 1", () => {
      //   const gildedRose = new Shop([new Item('conjured lizard', 0, 3)]);
      //   const items = gildedRose.updateQuality();
      //   expect(items[0].quality).toBe(1);
      // });
    })
  
});