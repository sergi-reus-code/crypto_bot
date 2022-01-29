const utils = require ('./utils/utils')

const runner = require ('./clasesdef/runner')

const runners = []


async function mainLive(){

    const symbols = await utils.getMostVolatileSymbols(1)
    console.log(symbols);

    symbols.forEach(symbol => {

        runners.push(new runner({mode:"Live", 
        symbol: `${symbol}`,
        shortPeriod : "1m",
        longPeriod : 15,
        starts : 20210121,
        ends : 20220122 }).init())
        
    });
    
}


async function mainBT(){

    const symbols = await utils.getMostVolatileSymbols(1)
    console.log(symbols);

    symbols.forEach(symbol => {

        runners.push(new runner({mode:"BT", 
        symbol: `${symbol}`,
        shortPeriod : "1m",
        longPeriod : 15,
        starts : 20220121,
        ends : 20220122 }).init())
        
    });
        
}


mainBT()
//mainLive()















