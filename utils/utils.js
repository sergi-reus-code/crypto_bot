const Binance = require('binance-api-node').default
  //Api Endpoints publicos
  const client = Binance();

  //Api Endpoints privados
  const client2 = Binance({
      apiKey: '7zJLormkUBluCs3hSuqhx2tezKolwLezvyEH5fMl42K74qwps3cAtUeMpoCXgh5Z',
      apiSecret: 'fUfo1uN2ZuGndo7TDnChbBXJC6EEPJDKjYAKazE0Ee2zGHcHty22NjVKOSVa8R1E'
      
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
  
      listado2.sort(function(a, b){return b - a})
  
      for (let i = 0; i < numSymbols; i++) {   //cojo los 10 simbolos con mas valor
        
          for (let y = 0; y < listado.length; y++) {
            
            if (listado2[i] === listado[y][2] ) {
                          
              listadodef.push(listado[y][1])
  
            }
            
          }
       
      }
  
      //console.log(listadodef);
      return listadodef
  
}
   
module.exports = {

    getMostVolatileSymbols

}