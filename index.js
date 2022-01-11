require('dotenv').config()
const Binance = require('binance-api-node').default

const client = Binance({
    apiKey: process.env.APYKEY,
    apiSecret: process.env.APYSECRET
});

//Clase para guardar datos en HD
const saveDataManager = require('./classes/saveDataManager/saveDataManager')
const saveData = new saveDataManager()

//Live Data Manager
const liveDataManager = require('./classes/liveDataManager/liveDataManager')
const liveDataM = new liveDataManager();

//Backtesting Data Manager
const btDataManager = require('./classes/btDataManager/btDataManager')
const btDataM = new btDataManager();

//
const strategyIn = require('./classes/strategys/strategyIn')
const straIn = new strategyIn();

//
const strategyOut = require('./classes/strategys/strategyIn')
const straOut = new strategyOut();

//
const orderManager = require('./classes/orderManager/orderManager')
const oderM = new orderManager();

//
const accountManager = require('./classes/accountManager/accountManager')
const accountM = new accountManager();

//
const serverManager = require('./classes/serverManager/serverManager')
const serverM = new serverManager();






/**
 * Inicio programa
 */


console.clear();
console.log("Wellcome to Crypto Bot 2022..... v.1.0 " + "\n");





async function initLive() {
  
  //coger los datos de un websocket propio
  const dataSymbol1 = await client.ws.candles('ETHUSDT','1m', candle => {

    //newTick
      if (candle.isFinal) {
        
        console.log(candle);

        //normal path
        //const dataArrays = dataM.updateTick(candle)
        //const entryPoint = straIn.updateStrategy(dataArrays)
    }
  })
   
}



async function saveDataBT(symbol,starts,ends) {

     var result = await saveData.init(symbol,"1m",starts,ends)  //Creamos el directorio si no existe
         
     if (result == "check") {
        console.log("check data");
        saveData.downloadData()
     }else {
        console.log("download data");
        saveData.downloadData()
     }

}





async function initBackTesting() {

  const resp = btDataM.isSinchronized()
  
  if (resp) {
  
    const candle = btDataM.getCandle()
    
    straIn.pushCandle(candle)

    







  }else{

    console.log("wait");

  }

}



const program = process.argv[2]
const symbol = process.argv[3]
const starts = process.argv[4]
const ends = process.argv[5]

switch (program) {
  case "dd":
    console.log("Starting program in Downloading Data \n");
    saveDataBT(symbol,starts,ends)
    break;

  case "bt":
    console.log("Starting program in Backtesting Mode \n");
    const resp = btDataM.init(symbol,"1m",starts,ends)
    setInterval(initBackTesting,1000)
    break;

  case "live":
    console.log("Starting program in Live Mode \n");
    initLive()
    break;
  default:
    break;
}