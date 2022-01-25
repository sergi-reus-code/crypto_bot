const DataManagerBT = require ('./DataManagerBT')
const DataManagerLive = require ('./DataManagerLive')
const StrategyIn = require ('./strategyIn')
const StrategyOut = require ('./strategyOut')
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
        //this.accountObject
        //this.orderObject

      


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

        for (let i = 200; i < this.dataObject.startTime.length; i++) {
            
            /**
             * Bucle principal
             */

            //check if exist order
            const existOrder = false

            if (existOrder == true) {
                //Hay orden


            } else {
                //No hay orden
                const data200 = this.dataObject.getLast200Candles()
                this.entryPoint = await this.strategyObjectIn.checkStrategyIn(data200)

            }


        
        

      
        }
   }

    async runnerLive(){

        client.ws.candles(this.symbol,this.shortPeriod,(candle) =>{

            /**
             * Bucle principal
             */

             const existOrder = false

             if (existOrder == true) {
                 //Hay orden
 
 
             } else {
                 //No hay orden
                 const data200 = this.dataObject.getLast200Candles()
                 this.entryPoint = await this.strategyObjectIn.checkStrategyIn(data200)
 
             }





            
            if(candle.isFinal==true){

                this.dataObject.update(candle)
      
            }



        })

    }


    async checkEP(entryPoint, candle){

            //if tatatatat




            //do nothing




            //create Order




    }







}