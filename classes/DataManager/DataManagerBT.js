const DataManager = require('./DataManager')
const Binance = require('binance-api-node').default
var moment = require('moment');
moment().format();
const client = Binance({
  apiKey: process.env.APYKEY,
  apiSecret: process.env.APYSECRET
});


module.exports = class DataManagerBT extends DataManager {
  
  // Constructor
  constructor(symbol, shortPeriod, longPeriod, starts,ends) {
      super(symbol, shortPeriod, longPeriod, starts,ends)
      this.init()

  }
    
  async init() {

    console.log(``);

    var fs = require('fs'); 
    var path = `./data/${this.symbol}`
  
    if (fs.existsSync(path)) {
      console.log(`The folder data for ${this.symbol} already exist`);
      
    }else{
      fs.mkdirSync(path)
      console.log(`Created folder data for ${this.symbol}`);
      
    }
    this.downloadData()
  }


  async downloadData() {

    console.log("Iniciando descarga de datos para backtesting");
    console.log(`Start : ${this.starts}       Ends : ${this.ends}`);
    
    
    
    
    
    var startsMs = moment(this.starts+"T0000").valueOf();
    var endsMs = moment(this.ends+"T2359").valueOf();
    
    
    
    console.log(`Start : ${startsMs}       Ends : ${endsMs}`);
    const dateStarts = new Date(Number(startsMs))
    const dateEnds = new Date(Number(endsMs))
    console.log(`Start : ${dateStarts.toLocaleString()}       Ends : ${dateEnds.toLocaleString()}`);
    console.log(`Ready to download ${(endsMs-startsMs)/1000} candles for ${(endsMs-startsMs)/86400000} days`);




    for (let i = startsMs; i < endsMs; i = i+86400000) {    //86.400.000 ms que tiene 1 dia
        
      const dss = new Date(Number(i))
      const year = dss.getFullYear()
      let month = dss.getMonth() + 1
      var day = dss.getDate()
      if (day<10){
        day= "0"+day
      }
      if (month<10){
        month= "0"+month
      }

      var path = `./data/${this.symbol}/${year}${month}${day}.txt`
   
      console.log(`Downloading file ${path}`);
        
      var fs = require('fs'); 
      
      if (fs.existsSync(path)) {
        console.log(`The file data for ${path} already exist`);
        console.log(`Check consistency of data for ${path}`);
        //return "check"
      }else{
        //Primera linia -> module.exports.data = [
        //const linia1 = `[`
        //fs.appendFileSync(path,linia1)
        var endsMsf = endsMs

        for (let n = i; n < i+86400000;n = n+60000000) {         //60.000.000 ms -> 1000 candles a la vez

          if ((i+86400000) <(n+60000000)) {
            endsMsf = n + (86400000-60000000-1)
          }

          var candlesOptions = {"symbol" : `${this.symbol}`, 
            "limit" : 1000, 
            "interval" : `1m`,
            "startTime" : n,
            "endTime" : endsMsf
          }
        
          var data = await client.candles(candlesOptions)
        
          data.forEach(cc => {
        
            var linia2 = `["${cc.openTime.toString()}",`+
                         `"${cc.open.toString()}",`+
                         `"${cc.high.toString()}",`+
                         `"${cc.low.toString()}",`+
                         `"${cc.close.toString()}",`+
                         `"${cc.volume.toString()}",`+
                         `"${cc.quoteVolume.toString()}"]`

            fs.appendFileSync(path,linia2+",\n")
          
          });
        
        }
 
      }

    }

  }


  // Method
  getCandle() {
    return "toma candle";
  }
  
}