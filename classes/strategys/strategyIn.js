module.exports = class strategyIn {
  
    // Constructor
    constructor(symbol,period,starts,ends) {
      this.symbol = symbol
      this.period = period
      this.starts = starts
      this.ends = ends
      this.startTime = []
      this.open = []
      this.high = []
      this.low = []
      this.close = []
      this.volume = []
      this.quoteVolume = []
      this.syncro = false
      this.index = 0
  
    }

    async pushCandle(candle){

      this.startTime.push(Number(candle.startTime))
      this.open.push(Number(candle.open))
      this.high.push(Number(candle.high))
      this.low.push(Number(candle.low))
      this.close.push(Number(candle.close))
      this.volume.push(Number(candle.volume))
      this.quoteVolume.push(Number(candle.quoteVolume))
      this.startTime.push(Number(candle.startTime))
      this.startTime.push(Number(candle.startTime))
      console.log(this.open);


    }

    








  }