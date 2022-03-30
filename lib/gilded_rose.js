class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let item = 0; item < this.items.length; item++) {
      this.#updateItemWhenSellInGreaterThanZero(item)
      this.#leaveSulfursUnchanged(item);
      this.#updateItemWhenSellInLessThanZero(item)
    }

    return this.items;
  }

  #updateItemWhenSellInLessThanZero(item) {
    if (this.#sellInLessThan(item, 0)) {
      if (this.#isnotSpecificItem(item, 'Aged Brie')) {
        if (this.#isnotSpecificItem(item, 'Backstage passes to a TAFKAL80ETC concert')) {
          this.#updateNormalOrConjurelItemWhenSellInIsLessThanZero(item)
        } else {
          this.#reduceQualityToZero(item);
        }
      } else {
        this.#updateAgedBrie(item);
      }
    }
  }
  
  #updateItemWhenSellInGreaterThanZero(item) {
    this.#isNotAgedBrieOrBackstagePasses(item) ?
    this.#updateNormalOrConjurelItemWhenSellInIsGreaterThanZero(item)
    :
    this.#updateBackstagePasses(item);
  }

  #isnotSpecificItem(i, item) {
    return this.items[i].name != item;
  }

  #reduceQualityBy(i, amount) {
    this.items[i].quality = this.items[i].quality - amount
  }
  #reduceQualityToZero(item) {
    return this.items[item].quality = this.items[item].quality - this.items[item].quality;
  }

  #increaseQualityBy(i, amount) {
    this.items[i].quality = this.items[i].quality + amount
  }

  #isQualityUnderFifty(i) {
    return this.items[i].quality < 50;
  }
  #isQualityGreaterOrEqualTo(item, amount) {
    return this.items[item].quality >= 2
  }

  #isQualityGreaterThanZero(i) {
    return this.items[i].quality > 0;
  }
  #isQualityEqualTo(i, amount) {
    return this.items[i].quality === amount
  }

  #reduceSellInByOne(i) {
    return this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  #sellInLessThan(i, days) {
    return this.items[i].sellIn < days
  }

  #updateNormalOrConjurelItemWhenSellInIsGreaterThanZero(item) {
    if (this.#isQualityGreaterThanZero(item)) {
      if (this.#isnotSpecificItem(item, 'Sulfuras, Hand of Ragnaros')) {
        (this.#isQualityGreaterThanZero(item) && this.#isnotSpecificItem(item, 'conjured lizard')) ?
          this.#reduceQualityBy(item, 1)
        :
        this.#updateConjureItemWhenSellInIsGreaterThanZero(item);
        }
    }
  }

  #updateNormalOrConjurelItemWhenSellInIsLessThanZero(item) {
    if (this.#isQualityGreaterThanZero(item)) {
              if (this.#isnotSpecificItem(item, 'Sulfuras, Hand of Ragnaros')) {
                (this.#isnotSpecificItem(item, 'conjured lizard')) ?
                this.#reduceQualityBy(item, 1)
                :
                this.#updateConjureItemWhenSellInIsLessThanZero(item)
              }
            }
  }
  
  #updateBackstagePasses(item) {
    if (this.#isQualityUnderFifty(item)) {
      this.#increaseQualityBy(item, 1);
      if (!this.#isnotSpecificItem(item,'Backstage passes to a TAFKAL80ETC concert')) {
        (this.#sellInLessThan(item, 11)) && (this.#isQualityUnderFifty(item)) && this.#increaseQualityBy(item, 1);
        (this.#sellInLessThan(item, 6)) && (this.#isQualityUnderFifty(item)) && this.#increaseQualityBy(item, 1);
      }
    }
  }
  
  #updateConjureItemWhenSellInIsLessThanZero(item) {
    (this.#isQualityEqualTo(item, 2)) ? this.#reduceQualityBy(item, 2) :  this.#reduceQualityBy(item, 2);
  }

  #updateConjureItemWhenSellInIsGreaterThanZero(item) {
    (this.#isQualityGreaterOrEqualTo(item, 2)) ? this.#reduceQualityBy(item, 2) : this.#reduceQualityBy(item, 1);
  }

  #isNotAgedBrieOrBackstagePasses(item) {
    return (this.#isnotSpecificItem(item, 'Aged Brie') && this.#isnotSpecificItem(item, 'Backstage passes to a TAFKAL80ETC concert'))
  }

  #leaveSulfursUnchanged(item) {
    (this.#isnotSpecificItem(item, 'Sulfuras, Hand of Ragnaros')) && this.#reduceSellInByOne(item)
  }
  #updateAgedBrie(item) {
    (this.#isQualityUnderFifty(i)) && this.#increaseQualityBy(i, 1);
  }

}

module.exports = {
  Item,
  Shop
}