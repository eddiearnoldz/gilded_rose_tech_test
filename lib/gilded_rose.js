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
    for (let i = 0; i < this.items.length; i++) {
      if (this.notSpecificItem(i, 'Aged Brie') && this.notSpecificItem(i, 'Backstage passes to a TAFKAL80ETC concert')) {
        if (this. qualityGreaterThanZero(i)) {
          if (this.notSpecificItem(i, 'Sulfuras, Hand of Ragnaros')) {
            if (this.qualityGreaterThanZero(i) && this.  notSpecificItem(i, 'conjured lizard')){
              this.reduceQualityBy(i, 1);
            } else {
              if (this.items[i].quality >= 2) {
                this.reduceQualityBy(i, 2);
              } else {
                this.reduceQualityBy(i, 1);
              }
            }
          }
        }
      } else {
        if (this.qualityUnderFifty(i)) {
          this.increaseQualityBy(i, 1);
          if (!this.notSpecificItem(i,'Backstage passes to a TAFKAL80ETC concert')) {
            if (this.sellInLessThan(i, 11)) {
              if (this.qualityUnderFifty(i)) {
                this.increaseQualityBy(i, 1);
              }
            }
            if (this.sellInLessThan(i, 6)) {
              if (this.qualityUnderFifty(i)) {
                this.increaseQualityBy(i, 1);
              }
            }
          }
        }
      }
      if (this.notSpecificItem(i, 'Sulfuras, Hand of Ragnaros')) {
        this.reduceSellInByOne(i);
      }
      if (this.sellInLessThan(i, 0)) {
        if (this.notSpecificItem(i, 'Aged Brie')) {
          if (this.notSpecificItem(i, 'Backstage passes to a TAFKAL80ETC concert')) {
            if (this.qualityGreaterThanZero(i)) {
              if (this.notSpecificItem(i, 'Sulfuras, Hand of Ragnaros')) {
                if (this.  notSpecificItem(i, 'conjured lizard')) {
                  this.reduceQualityBy(i, 1);
                } else {
                  if (this.items[i].quality == 2) {
                    this.reduceQualityBy(i, 2);
                  }
                  else {
                    this.reduceQualityBy(i, 2);
                  }
                }
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }

  notSpecificItem(i, item) {
    return this.items[i].name != item;
  }

  reduceQualityBy(i, amount) {
    this.items[i].quality = this.items[i].quality - amount
  }

  increaseQualityBy(i, amount) {
    this.items[i].quality = this.items[i].quality + amount
  }

  qualityUnderFifty(i) {
    return this.items[i].quality < 50;
  }

  qualityGreaterThanZero(i) {
    return this.items[i].quality > 0;
  }

  reduceSellInByOne(i) {
    return this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  sellInLessThan(i, days) {
    return this.items[i].sellIn < days
  }

}



module.exports = {
  Item,
  Shop
}