const Binance = require('binance-api-node').default
  //Api Endpoints publicos
  const client = Binance();

//Api Endpoints privados
const client2 = Binance({
      apiKey: `${process.env.APIKEY}`,
      apiSecret: `${process.env.APISECRET}`
});

var fs = require('fs'); 
  
async function createDirs(numSymbols){

  numSymbols.forEach(element => {
    
    var path = `./data/${element[1]}`

    if (fs.existsSync(path)) {
      //console.log('The path exists.');
      }else{
    
        fs.mkdirSync(path)
      }
  });
 
  return "created"  

}

async function syncDirs(numSymbols){


  numSymbols.forEach(element => {
    
    //var candlesOptions = {"symbol" : `${symbol}` , "limit" : `${process.env.numCandles}` , "interval" : `${process.env.shortPeriod}`}

    //var data = await client.candles(candlesOptions)
  
  
  });
 
  return "created"  

}


async function syncSymbols(numSymbols) {
  
    //console.log(`Searching the ${numSymbols} most volatile symbols`);
    //const cc = await createDirs(numSymbols);
    //const cc = await syncDirs(numSymbols);
    

/*

      const data = await client.dailyStats()
      const listado = []
      const listado2 = []
      const listadodef = []  
  
      for (let i = 0; i < data.length; i++) {
        const datin = data[i];
  
        if (datin.symbol.endsWith('USDT')) {
          listado.push([i,datin.symbol,datin.count])
          listado2.push(datin.count)
        }
      }
      var cc = 0
      listado2.sort(function(a, b){return b - a})
  
      for (let i = 0; i < numSymbols; i++) {   //cojo los 10 simbolos con mas valor
        
          
          for (let y = 0; y < listado.length; y++) {
            
            if (listado2[i] === listado[y][2] ) {
              

              //console.log(listado[y] + "-" + cc);
              
              listado[y][0] = cc

              listadodef.push(listado[y])
              cc++
            }
            
          }
       
      }


      */
  
      //console.log(listadodef);
      return "hola"
  
}
   

async function syncSymbol(symbol) {
  
  //console.log(`Searching the ${symbol} data`);
  //const cc = await createDirs(symbol);
  //console.log(cc);

  var candlesOptions = {"symbol" : `${symbol}` , "limit" : 10 , "interval" : `${process.env.shortPeriod}`}

  var data = await client.candles(candlesOptions)

  console.log(data);




  return "hola"

}



module.exports = {

    syncSymbols,
    syncSymbol

}