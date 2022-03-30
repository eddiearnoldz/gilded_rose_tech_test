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
      if (this.notAgedBrie(i) && this. notBackstagePasses(i)) {
        if (this.items[i].quality > 0) {
          if (this.notSulfuras(i)) {
            if (this.items[i].quality > 0 && this.notConjuredLizard(i)){
              this.items[i].quality = this.items[i].quality - 1;
            } else {
              if (this.items[i].quality >= 2) {
                this.reduceQualityByTwo(i);
              } else {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (!this.notBackstagePasses(i)) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.notSulfuras(i)) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.notAgedBrie(i)) {
          if (this.notBackstagePasses(i)) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                if (this.notConjuredLizard(i)) {
                  this.items[i].quality = this.items[i].quality - 1;
                } else {
                  if (this.items[i].quality == 2) {
                    this.reduceQualityByTwo(i);
                  }
                  else {
                    this.items[i].quality = this.items[i].quality - 1;
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

  notConjuredLizard(item) {
    return this.items[item].name != 'conjured lizard';
  };

  notAgedBrie(item) {
    return this.items[item].name != 'Aged Brie';
  };
  notBackstagePasses(item) {
    return this.items[item].name != 'Backstage passes to a TAFKAL80ETC concert';
  };
  notSulfuras(i) {
    return this.items[i].name != 'Sulfuras, Hand of Ragnaros';
  };
  reduceQualityByTwo(i) {
    this.items[i].quality = this.items[i].quality - 2
  }

}



module.exports = {
  Item,
  Shop
}