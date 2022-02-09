
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
    
  async updateArrays(mode,candle) {
 

    console.log("epepep");

    switch (mode) {
      case "BT":
        console.log("en bt");
        break;

        case "Live":
          console.log("en live");
          break;
    
      default:
        console.log("error");
      //error
        break;
    }

    

   return "ok"

  }




  isDataReady(){

    return this.dataReady

  }
  
}