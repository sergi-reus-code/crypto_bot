require('dotenv').config()

const initBot = require('./classes/init_sync/init_sync')

/*
const Data = require('./classes/data/dataIn3');
const initProgram = require('./classes/init/init3.js');
*/

/**
 * Inicio programa
 */


console.clear();
console.log("Wellcome to Crypto Bot 2022..... v.1.0 " + "\n");


async function init() {
  
  //Buscar 10 valores con mas volatilidad
  const bestSymbols = await initBot.getMostVolatileSymbols(process.env.numSymbols)
  

/*


  for (let i = 0; i < bestSymbols.length; i++) {
    
    const resREST = await arrayData[i].initREST(bestSymbols[i]);
    console.log("  Get symbols ----> " + resREST + "\n");
    
  }

  for (let i = 0; i < bestSymbols.length; i++) {
    
      //Abrir websockets
  const resWSS = await arrayData[i].initWSS(bestSymbols[i]);
  console.log("\n" + "  Open Websocket to stream input data ----> " + resWSS + "\n");

    
  }
*/
}



init()
