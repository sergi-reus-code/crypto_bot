const Binance = require('binance-api-node').default

const client = Binance({
    apiKey: process.env.APYKEY,
    apiSecret: process.env.APYSECRET
});

const indicatorsManager = require('./indicators/indicators')
const indicators = new indicatorsManager();


module.exports = class StrategyManager {
  
  // Constructor
  constructor() {

  }
    
  async init(){

 

  }


  async pushCandle(candle){



  }


  async checkEP (){

    const psar = indicators.getPSAR(2,0.02,0.2)
    const precio = this.close[this.close.length-1];

    


    if (psar[1]>precio) {
      const psarA = psar[1] - (psar[0] - psar[1])  
      console.log("arriba" + psarA);



    }else{
      //console.log("abajo");
    }

   

  }




}