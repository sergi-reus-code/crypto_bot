
module.exports = class DataManager {

    
  constructor(symbol,shortPeriod,longPeriod,starts,ends) {
      this.symbol = symbol
      this.shortPeriod = shortPeriod
      this.longPeriod = longPeriod
      this.starts = starts
      this.ends = ends

      this.data = [1,2,3,4,5]

      console.log(this.shortPeriod);
      


  }
    
  async init() {
 
  }


  async downloadData() {


  }


  // Method
  getCandle() {
    return "toma candle";
  }
  
}