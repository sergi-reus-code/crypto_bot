
module.exports = class DataManager {

    
  constructor(symbol, shortPeriod, longPeriod, starts, ends) {
   
    this.symbol = symbol
    this.shortPeriod = shortPeriod
    this.longPeriod = longPeriod
    this.starts = starts
    this.ends = ends

    this.startTime = []
    this.open = []
    this.high = []
    this.low = []
    this.close = []
    this.volume = []
    this.quoteVolume = []

    this.lstartTime = []
    this.lopen = []
    this.lhigh = []
    this.llow = []
    this.lclose = []
    this.lvolume = []
    this.lquoteVolume = []

    this.dataReady = false

  }
    
  async updateArrays(candle) {
 
    console.log("en master" + candle);

  }




  isDataReady(){

    return this.dataReady

  }
  
}