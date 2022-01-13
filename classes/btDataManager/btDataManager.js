const Binance = require('binance-api-node').default
var moment = require('moment');
moment().format();

const nReadlines = require('n-readlines');

const client = Binance({
    apiKey: process.env.APYKEY,
    apiSecret: process.env.APYSECRET
});

const dumpCandle = {
  eventType: 'kline',
  eventTime: 1641839580001,
  symbol: 'ETHUSDT',
  startTime: 1641839520000,
  closeTime: 1641839579999,
  firstTradeId: 727703489,
  lastTradeId: 727705886,
  open: '3045.87000000',
  high: '3045.87000000',
  low: '3032.32000000',
  close: '3034.63000000',
  volume: '1184.34190000',
  trades: 2398,
  interval: '1m',
  isFinal: true,
  quoteVolume: '3600024.21976700',  
  buyVolume: '503.78450000',        
  quoteBuyVolume: '1531192.30404500'
}

const dumpTick =   {
  openTime: 1641833580000,
  open: '3066.82000000',
  high: '3069.70000000',
  low: '3063.75000000',
  close: '3066.51000000',
  volume: '255.16630000',
  closeTime: 1641833639999,
  quoteVolume: '782288.94779700',
  trades: 583,
  baseAssetVolume: '146.56370000',
  quoteAssetVolume: '449281.53959700'
}



module.exports = class backTesting {
  
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
    
  async init(symbol,period,starts,ends) {

    this.symbol = symbol
    this.period = period
    this.starts = starts
    this.ends = ends
    
    console.log("Iniciando sincronizacion de datos para backtesting");
    console.log(`Start : ${this.starts}       Ends : ${this.ends}`);
    var startsMs = moment(this.starts).valueOf();
    var endsMs = moment(this.ends).valueOf();
    console.log(`Start : ${startsMs}       Ends : ${endsMs}`);
    const dateStarts = new Date(Number(startsMs))
    const dateEnds = new Date(Number(endsMs))
    console.log(`Start : ${dateStarts.toLocaleString()}       Ends : ${dateEnds.toLocaleString()}`);

    for (let i = startsMs; i < endsMs; i = i+86400000) {    //86.400.000 ms que tiene 1 dia
          
      const dss = new Date(Number(i))
      const year = dss.getFullYear()
      const month = dss.getMonth() + 1
      var day = dss.getDate()
      if (day<10){day= "0" + day}

      var path = `./data/${this.symbol}/${year}${month}${day}.txt`

      console.log(`Sinchronicing file ${path}`);

      
      const linereader = new nReadlines(path);
      
      let line;
            
      while (line = linereader.next()) {
        
        var linia = line.toString()

        var c1 = linia.indexOf(",")    
        var linia1 = linia.slice(2,c1-1)

        var c2 = linia.indexOf(",",c1+1)    
        var linia2 = linia.slice(c1+2,c2-1)

        var c3 = linia.indexOf(",",c2+1)    
        var linia3 = linia.slice(c2+2,c3-1)

        var c4 = linia.indexOf(",",c3+1)    
        var linia4 = linia.slice(c3+2,c4-1)

        var c5 = linia.indexOf(",",c4+1)    
        var linia5 = linia.slice(c4+2,c5-1)

        var c6 = linia.indexOf(",",c5+1)    
        var linia6 = linia.slice(c5+2,c6-1)

        var c7 = linia.indexOf(",",c6+1)    
        var linia7 = linia.slice(c6+2,c7-2)


        this.startTime.push(Number(linia1))
        this.open.push(Number(linia2))
        this.high.push(Number(linia3))
        this.low.push(Number(linia4))
        this.close.push(Number(linia5))
        this.volume.push(Number(linia6))
        this.quoteVolume.push(Number(linia7))


      }

    }
    this.syncro = true
    return "ok"

  }
  
  
  isSinchronized() {

          return this.syncro
  
        }

  









  
    
    // Method
    getCandle() {

      const dumpCandle = {
        "eventType" : 'kline', 
        "eventTime" : `${this.index}`,
        "symbol" : `${this.symbol}`,
        "startTime" : `${this.startTime[this.index]}`,
        "closeTime" : `${this.startTime[this.index]+59999}`,
        "firstTradeId" : 727703489,
        "lastTradeId" : 727705886,
        "open" : `${this.open[this.index]}`,
        "high" : `${this.high[this.index]}`,
        "low" : `${this.low[this.index]}`,
        "close" : `${this.close[this.index]}`,
        "volume" : `${this.close[this.index]}`,
        "trades" : 2398,
        "interval" : `${this.period}`,
        "isFinal" : true,
        "quoteVolume" : `${this.quoteVolume[this.index]}`,  
        "buyVolume" : 503.78450000,        
        "quoteBuyVolume" : 1531192.30404500
      }

      this.index = this.index + 1

      return dumpCandle;
    }

    getLastItems(long){

      var temp_startTime = this.startTime
      var temp_open = this.open
      var temp_high = this.high
      var temp_low = this.low
      var temp_close = this.close
      var temp_volume = this.volume
      var temp_quoteVolume = this.quoteVolume
      
      
      
      temp_startTime.splice(0,temp_startTime.length-long)
      temp_open.splice(0,temp_open.length-long)
      temp_high.splice(0,temp_high.length-long)
      temp_low.splice(0,temp_low.length-long)
      temp_close.splice(0,temp_close.length-long)
      temp_volume.splice(0,temp_volume.length-long)
      temp_quoteVolume.splice(0,temp_quoteVolume.length-long)
          
  

      var arrayToSend = [temp_startTime,temp_open,temp_high,temp_low,temp_close,temp_volume,temp_quoteVolume]

      return arrayToSend



    }  







  }


