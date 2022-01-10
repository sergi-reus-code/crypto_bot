const Binance = require('binance-api-node').default
  //Api Endpoints publicos
  const client = Binance();

  //Api Endpoints privados
  const client2 = Binance({
      apiKey: `${process.env.APIKEY}`,
      apiSecret: `${process.env.APISECRET}`
      
  });
  
  
async function getMostVolatileSymbols(numSymbols) {
  
    console.log(`Searching the ${numSymbols} most volatile symbols`);

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
  
      //console.log(listadodef);
      return listadodef
  
}
   





module.exports = {

    getMostVolatileSymbols

}