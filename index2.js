require('dotenv').config()
const Binance = require('binance-api-node').default

const client = Binance({
    apiKey: process.env.APYKEY,
    apiSecret: process.env.APYSECRET
});

//Clase para guardar datos en HD
const DataManagerBT = require('./classes/DataManager/DataManagerBT')




function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}












async function initLive() {
  
  straIn.init(symbol,"1m",starts,ends)

  const dataSymbol1 = await client.ws.candles(symbol,'1m', candle => {

    //newTick
    if (candle.isFinal) {
        
      //---------------------------------------------------------
      var res = straIn.pushCandle(candle)
      var resEP = straIn.checkEP()

      //----------------------------------------------------------

    }

  })
   
}

async function initBackTesting() {

  const Data = new DataManagerBT(symbol, shortPeriod, longPeriod, starts,ends)

  straIn.init(symbol,"1m",starts,ends)
  const resp = btDataM.isSinchronized()
  
  if (resp) {
  
    const candle = btDataM.getCandle()
    
    //---------------------------------------------------------
    var res = straIn.pushCandle(candle)
    var resEP = straIn.checkEP()

    //----------------------------------------------------------
  }else{

    console.log("wait");

  }

}






/**
 * Inicio programa
 */

async function main(){

  console.clear();
  console.log("Wellcome to Crypto Bot 2022..... v.1.1 " + "\n");
  await sleep(500)
  
  //
  let program = process.argv[2]
  program = "bt"
  console.log(`1.- MODO: ${program}`);
  
  //
  let symbol = process.argv[3]
  symbol = "BTCUSDT"
  console.log(`2.- SIMBOLO: ${symbol}`);
  
  //
  let shortPeriod = process.argv[4]
  shortPeriod = "1m"
  console.log(`3.- PERIODO CORTO: ${shortPeriod}`);
  
  //
  let longPeriod = process.argv[5]
  longPeriod = "15m"
  console.log(`4.- PERIODO LARGO: ${longPeriod}`);
  
  //
  let starts = process.argv[5]
  starts = "20211201"
  console.log(`5.- STARTS: ${starts}`);

  //
  let ends = process.argv[6]
  ends = "20220120"
  console.log(`6.- ENDS: ${ends}`);
  await sleep(500)
  
  
  switch (program) {
  
    case "bt":
      console.log("\n" + "Starting program in Backtesting Mode \n");
      
      
      //setInterval(initBackTesting,100)
      break;
  
    case "live":
      console.log("Starting program in Live Mode \n");
      //initLive(symbol,period,starts,ends)
  
      break;
  
      default:
      break;
  }





}



main()


















