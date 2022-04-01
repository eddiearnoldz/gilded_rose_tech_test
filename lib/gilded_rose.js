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
      this.#updateSpecificItem(item)
    }

    return this.items;
  }

  #updateSpecificItem(item) {
    const shopItem = this.items[item].name

    if (shopItem.includes("conjured")) {
      this.updateConjureItem(item)
    } else if (shopItem.includes("Aged Brie")) {
      return this.updateAgedBrie(item)
    }  else if (shopItem.includes("Backstage passes")) {
      return this.updateBackstagePasses(item)
    } else if (shopItem.includes("Sulfuras")) {
      return this.#updateSulfuras(item)
    } else if (shopItem.includes("Sulfuras")){
      return item
    } else { 
      return this.updateNormalItem(item)
    }
  }


  updateAgedBrie(item) {
    this.updateItemQuality(item, 1);
    this.qualityLimiter(item)
    this.#reduceSellInByOne(item)
  }

  updateNormalItem(item) {
    if (this.#isSellInlessThanZero(item)) {
      this.updateItemQuality(item, -1)
    }
    this.updateItemQuality(item, -1)
    this.qualityLimiter(item)
    this.#reduceSellInByOne(item)
  }
  updateConjureItem(item) {
    if (this.#isSellInlessThanZero(item)) {
      this.updateItemQuality(item, -2)
    }
    this.updateItemQuality(item, -2)
    this.qualityLimiter(item)
    this.#reduceSellInByOne(item)
  }

  updateBackstagePasses(item) {
    this.updateItemQuality(item, 1);
    (this.#sellInLessThan(item, 11)) && this.updateItemQuality(item, 1);
    this.#sellInLessThan(item, 6) && this.updateItemQuality(item, 1);
    (this.#isSellInlessThanZero(item)) && this.#reduceBackstagePassesQualityToZero(item)
    this.qualityLimiter(item)
    this.#reduceSellInByOne(item)
  }

  qualityLimiter(item) {
    if(this.items[item].quality > 50) {
      this.items[item].quality = 50
    } else if ((this.items[item].quality < 0)) {
      return  this.items[item].quality = 0
    }
  }

  #isSellInlessThanZero(item) {
    return this.items[item].sellIn <= 0
  }

  #reduceSellInByOne(i) {
    return this.items[i].sellIn  --;
  }

  #updateSulfuras(item) {
    (this.#isnotSpecificItem(item, 'Sulfuras, Hand of Ragnaros')) && this.#reduceSellInByOne(item)
  }

  #sellInLessThan(i, days) {
    return this.items[i].sellIn < days
  }
  #reduceBackstagePassesQualityToZero(item) {
    return this.items[item].quality = this.items[item].quality - this.items[item].quality;
  }
  #isnotSpecificItem(i, item) {
    return this.items[i].name != item;
  }
  updateItemQuality(i, amount) {
    this.items[i].quality = this.items[i].quality += amount
  }

}

module.exports = {
  Item,
  Shop
}