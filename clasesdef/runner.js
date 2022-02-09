const DataManagerBT = require ('./data/DataManagerBT')
const DataManagerLive = require ('./data/DataManagerLive')
const StrategyIn = require ('./strategy/strategyIn')
const StrategyOut = require ('./strategy/strategyOut')
const MoneyManager = require ('./money/MoneyManager')
const OrderBuy = require ('./orders/OrdersBuy')
const OrderSell = require ('./orders/OrdersSell')

//const client = require ('../config/configBinance')

const Binance = require('binance-api-node').default


const client = Binance({
  apiKey: process.env.APYKEY,
  apiSecret: process.env.APYSECRET
});

async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
}



module.exports = class runner {

    constructor({mode,symbol,shortPeriod, longPeriod, starts, ends}){

        this.mode = mode
        this.symbol = symbol
        this.shortPeriod = shortPeriod
        this.longPeriod = longPeriod
        this.starts = starts
        this.ends = ends
        this.entryPoint
        this.exitPoint
  
        if (this.mode === "Live") {
            this.dataObject = new DataManagerLive(this.symbol, this.shortPeriod, this.longPeriod,this.starts, this.ends)
        } else {
            this.dataObject = new DataManagerBT(this.symbol, this.shortPeriod, this.longPeriod,this.starts, this.ends)
        }
 
        this.strategyObjectIn = new StrategyIn()
        this.strategyObjectOut = new StrategyOut()
        this.moneyObject = new MoneyManager()
        this.orderBuyObject = new OrderBuy()
        this.orderBuyObject = new OrderSell()
      
    }

    async init(){

        await this.dataObject.init()

        while(this.dataObject.isDataReady()==false ){
            console.log(this.dataObject.isDataReady());
            await delay(2000)
        }

        if (this.mode === "Live") {
            this.runnerLive()
        } else {
            this.runnerBT()
        }
        
    }



    async runnerBT(){

        for (let i = 0; i < this.dataObject.startTime.length; i++) {
            
            var candle = {
                
                    symbol: this.symbol,
                    startTime: this.dataObject.startTime[i],
                    open: this.dataObject.open[i],
                    high: this.dataObject.high[i],
                    low: this.dataObject.low[i],
                    close: this.dataObject.close[i],
                    volume: this.dataObject.volume[i],
                    quoteVolume: this.dataObject.quoteVolume[i],

            }

            await this.dataObject.updateArrays("BT", candle)
            this.botLogic(candle);

        }
   }

    async runnerLive(){

        client.ws.candles(this.symbol,this.shortPeriod,(candle) =>{

            if(candle.isFinal==true){
                
                //update short candle & long candle
                await this.dataObject.updateArrays("Live", candle)



                
            } 
            
            this.botLogic(candle);
        
        })

    }


 
    async botLogic(currentCandle){

            /**
             * Bucle principal -> Llega una candle......
             */
/*
            var divisor = this.longPeriod*60*1000

            var result = currentCandle.startTime % divisor;
           
            if (result === 0 ) {

                //actualizar ultima candela de long period
                console.log(currentCandle.startTime);
                this.dataObject.updateLong(candle)

            }
*/

            //check if exist order
            //const existOrder = false
            //const data200 = this.dataObject.getLast200Candles()

/*
            if (existOrder == true) {
                //Hay orden
                this.existPoint = await this.strategyObjectOut.checkStrategyIn(data200)

            } else {
                //No hay orden
                this.entryPoint = await this.strategyObjectIn.checkStrategyIn(data200)

            }
*/

    }

}