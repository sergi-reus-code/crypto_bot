require('dotenv').config()

const dataManager = require('./classes/datamanager/dataManager')
const strategyIn = require('./classes/strategys/strategyIn')
const strategyOut = require('./classes/strategys/strategyIn')
const orderManager = require('./classes/orderManager/orderManager')
const accountManager = require('./classes/accountManager/accountManager')
const serverManager = require('./classes/serverManager/serverManager')

const Binance = require('binance-api-node').default

const client = Binance({
    apiKey: process.env.APYKEY,
    apiSecret: process.env.APYSECRET
});


console.clear();
console.log("Wellcome to Crypto Bot 2022..... v.1.0 " + "\n");


async function init() {

  const dataM = new dataManager('ETHUSDT');
  const straIn = new strategyIn();
  const straOut = new strategyOut();
  const oderM = new orderManager();
  const accountM = new accountManager();
  const serverM = new serverManager();
  
  const dataSymbol1 = await client.ws.candles('ETHUSDT','1m', candle => {

  

  //newTick
    if (candle.isFinal) {

      const dataArrays = dataM.updateTick(candle)

      const entryPoint = straIn.updateStrategy(dataArrays)






  }



})
    
}


init()
