const Binance = require('binance-api-node').default

const client = Binance({
    apiKey: process.env.APYKEY,
    apiSecret: process.env.APYSECRET
});

const indicatorsManager = require('./indicators/indicators')
const indicators = new indicatorsManager();


module.exports = class strategyIn {
  
  // Constructor
  constructor() {
    this.symbol
    this.period
    this.starts
    this.ends
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
    
  async init(symbol,period,starts,ends){

    this.symbol = symbol
    this.period = period
    this.starts = starts
    this.ends = ends

  }


  async pushCandle(candle){

    if (this.open.length < 200) {
      
      console.log("sincronizamos data");

      var candlesOptions = {"symbol" : `${this.symbol}`, 
                            "interval" : `1m`,
                            "startTime" : candle.startTime - 12000000 , 
                            "endTime" : candle.startTime }
    
      var data = await client.candles(candlesOptions)

      for (let n = 0 ; n < data.length; n++) {
        
        this.startTime.push(Number(data[n].openTime))
        this.open.push(Number(data[n].open))
        this.high.push(Number(data[n].high))
        this.low.push(Number(data[n].low))
        this.close.push(Number(data[n].close))
        this.volume.push(Number(data[n].volume))
        this.quoteVolume.push(Number(data[n].quoteVolume))

      }
      
    } else {
   

      this.startTime.shift()
      this.open.shift()
      this.high.shift()
      this.low.shift()
      this.close.shift()
      this.volume.shift()
      this.quoteVolume.shift()

      this.startTime.push(Number(candle.startTime))
      this.open.push(Number(candle.open))
      this.high.push(Number(candle.high))
      this.low.push(Number(candle.low))
      this.close.push(Number(candle.close))
      this.volume.push(Number(candle.volume))
      this.quoteVolume.push(Number(candle.quoteVolume))
   
    }

    //console.log(this.startTime.length);
    //console.log(this.startTime[this.startTime.length-1]);

    //DATA IS SYNCHRONIZED!!!!
    //Iniciamos indicadores

    indicators.updateDataIndicators(this.startTime,this.open,this.high,this.low,this.close,this.volume,this.quoteVolume)

    return this.open.length

  }


  async checkEP (){

    const psar = indicators.getPSAR(1,0.02,0.2)
    const precio = this.close[this.close.length-1];

    if (psar>precio) {
      console.log("arriba");
    }else{
      console.log("abajo");
    }

    console.log();
    console.log(psar);

  }




}