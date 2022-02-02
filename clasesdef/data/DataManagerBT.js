const DataManager = require('./DataManager')
//const client = require('../config/configBinance')
const nReadlines = require('n-readlines');
const Binance = require('binance-api-node').default

const client = Binance({
  apiKey: process.env.APYKEY,
  apiSecret: process.env.APYSECRET
});


var moment = require('moment');
moment().format();



module.exports = class DataManagerBT extends DataManager {
  
  // Constructor
  constructor(symbol, shortPeriod, longPeriod, starts, ends) {
      super(symbol, shortPeriod, longPeriod, starts, ends)
      this.startsMs 
      this.endsMs  

    
      
      
  }
    
  async init() {


    //TODO//if symbol or short period undefined or raro trhoew erro

    console.log(`Checking ${this.shortPeriod} data integrity for ${this.symbol}`);
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
            
    this.startsMs = moment(this.starts+"T0000").valueOf();
    this.endsMs = moment(this.ends+"T2359").valueOf();
    
    
    
    console.log(`Start : ${this.startsMs}       Ends : ${this.endsMs}`);
    const dateStarts = new Date(Number(this.startsMs))
    const dateEnds = new Date(Number(this.endsMs))
    console.log(`Start : ${dateStarts.toLocaleString()}       Ends : ${dateEnds.toLocaleString()}`);
    console.log(`Ready to download ${(this.endsMs - this.startsMs)/1000} candles for ${Number((this.endsMs - this.startsMs)/86400000).toFixed(0)} days`);




    for (let i = this.startsMs; i < this.endsMs; i = i+86400000) {    //86.400.000 ms que tiene 1 dia
        
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
        var endsMsf = this.endsMs

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


    this.sincroDataShort()

  }


  async sincroDataShort(){


    for (let i = this.startsMs; i < this.endsMs; i = i+86400000) {    //86.400.000 ms que tiene 1 dia
        
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
   
      console.log(`Importing data from file ${path} to memory`);
        
      var fs = require('fs'); 
      
      if (fs.existsSync(path)) {
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

        
      }else{
  
 
        //TODOERROR!!!!!!!!!!!!!!!!
      }

    }

    
    this.sincroDataLong()
    

  }



  




async sincroDataLong(){

  var divisor = this.longPeriod*60*1000

  console.log(divisor);
  let starts = 0

  for (let ends = 0; ends < this.startTime.length; ends++) {
    
    var result = this.startTime[ends] % divisor;

    if (result === 0 && ends > 0) {

      console.log(result + " " + starts + " " + ends);
    
      const sa_startTime = this.startTime.slice(starts,ends)
      const sa_open = this.open.slice(starts,ends)
      const sa_high = this.high.slice(starts,ends)
      const sa_low = this.low.slice(starts,ends)
      const sa_close = this.close.slice(starts,ends)
      const sa_volume = this.volume.slice(starts,ends)
      const sa_quoteVolume = this.quoteVolume.slice(starts,ends)
      
      starts = ends;







      //console.log(sa_startTime);


      //splice de array i pasarlo a update longterm




    }



    



    
  }


/*
  const dateObject = new Date(Number(this.startTime[this.startTime.length-15]))

  const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

  console.log(humanDateFormat);
  console.log(dateObject.getMinutes());
  console.log((this.startTime[this.startTime.length-15]));
*/

  this.dataReady = true

  

}


async calcLong(){




}








}
