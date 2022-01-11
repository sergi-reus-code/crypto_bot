module.exports = class dataManager {
  
    // Constructor
    constructor(symbol) {

      this.symbol = symbol


      this.timeShort = []
      this.openShort   = []
      this.highShort   = []
      this.lowShort    = []
      this.closeShort  = []
      this.volShort    = []
      this.amountShort = []
      
      this.timeLong   = []
      this.openLong   = []
      this.highLong   = []
      this.lowLong    = []
      this.closeLong  = []
      this.volLong    = []
      this.amountLong = []
      this.update
    }
    
    async initREST(symbol) {

        var candlesOptions = {"symbol" : `${symbol}` , "limit" : `${process.env.numCandles}` , "interval" : `${process.env.shortPeriod}`}

        var data = await client.candles(candlesOptions)
      
        for (let n = 0; n < data.length-1; n++) {
          //Me cargo la ultima pq no esta sincronizada
          this.timeShort.push(data[n].openTime)
          this.openShort.push(data[n].open)
          this.highShort.push(data[n].high)
          this.lowShort.push(data[n].low)
          this.closeShort.push(data[n].close)
          this.volShort.push(data[n].volume)
          this.amountShort.push(data[n].quoteVolume)
        }

        var candlesOptions = {"symbol" : `${symbol}` , "limit" : `${process.env.numCandles}` , "interval" : `${process.env.longPeriod}`}

        var data = await client.candles(candlesOptions)
      
        for (let n = 0; n < data.length-1; n++) {
          //Me cargo la ultima pq no esta sincronizada
          this.timeLong.push(data[n].openTime)
          this.openLong.push(data[n].open)
          this.highLong.push(data[n].high)
          this.lowLong.push(data[n].low)
          this.closeLong.push(data[n].close)
          this.volLong.push(data[n].volume)
          this.amountLong.push(data[n].quoteVolume)
        }     

        return "done"



    }

  async initWSS(symbol) {

      client.ws.candles(symbol,process.env.shortPeriod, candle => {    
                       
        if (candle.isFinal) {
          //Update Short Arrays
          this.timeShort.push(candle.startTime)
          this.openShort.push(candle.open)
          this.highShort.push(candle.high)
          this.lowShort.push(candle.low)
          this.closeShort.push(candle.close)
          this.volShort.push(candle.volume)
          this.amountShort.push(candle.quoteVolume)
        
        }
      })
 
      client.ws.candles(symbol,process.env.longPeriod, candle => {    
        
        if (candle.isFinal) {
          //Update Short Arrays
          this.timeLong.push(candle.startTime)
          this.openLong.push(candle.open)
          this.highLong.push(candle.high)
          this.lowLong.push(candle.low)
          this.closeLong.push(candle.close)
          this.volLong.push(candle.volume)
          this.amountLong.push(candle.quoteVolume)
        }
 
      })

    return "done"

  }

  update(){

   
  
  /*
    tulind.indicators.rsi.indicator([c[i]],[14], (err,res) => {
      if(err) return console.log(err);
        console.log(`${s}_${s_l} rsi -> ` + res[0].slice(-1)[0]);
        //iShort[0] = res[0].slice(-1)[0]
    })
  
    */
  /*
    tulind.indicators.sma.indicator([c[i]],[25], (err,res) => {
      if(err) return console.log(err);
        console.log(`${s}_${s_l} sma -> ` + res[0].slice(-1)[0]);
    })
    
    tulind.indicators.macd.indicator([c[i]],[12,26,9], (err,res) => {
      if(err) return console.log(err);
        console.log(`${s}_${s_l} macd1 -> ` + res[0].slice(-1)[0]);
        console.log(`${s}_${s_l} macd2 -> ` + res[1].slice(-1)[0]);
        console.log(`${s}_${s_l} macd3 -> ` + res[2].slice(-1)[0]);
    })
    
    tulind.indicators.psar.indicator([h[i],l[i]],[0.02,0.2], (err,res) => {
      if(err) return console.log(err);
        console.log(`${s}_${s_l} psar -> ` + res[0].slice(-1)[0]);
    })
  
    tulind.indicators.stoch.indicator([h[i],l[i],c[i]],[14,1,3], (err,res) => {
      if(err) return console.log(err);
        console.log(`${s}_${s_l} stoch1 -> ` + res[0].slice(-1)[0]);
        console.log(`${s}_${s_l} stoch2 -> ` + res[1].slice(-1)[0]);
    })
  */
  }







 



    // Getter
    get getLastCandles() {
      //return [this.calcArea(),0];
    }
    
  
    
    // Method
    getLastCandle() {
      return [this.timeShort[this.timeShort.length - 1]];
    }
  
    // Static method
    static calcArea(width, height) {
      return "pepe";
    }
  }

