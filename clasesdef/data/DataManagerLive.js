const DataManager = require('./DataManager')
const Binance = require('binance-api-node').default
var moment = require('moment');
moment().format();
const client = Binance({
  apiKey: process.env.APYKEY,
  apiSecret: process.env.APYSECRET
});


module.exports = class DataManagerLive extends DataManager {
  // Constructor
  constructor(symbol, shortPeriod, longPeriod, starts, ends) {
    super(symbol, shortPeriod, longPeriod, starts, ends);
  }

  async init() {
    console.log("sincronizando symbolo.....Short");

    var candlesOptions = {
      symbol: `${this.symbol}`,
      limit: 200,
      interval: `1m`,
    };

    var data = await client.candles(candlesOptions);

    data.forEach((cc) => {
      this.startTime.push(Number(cc.openTime));
      this.open.push(Number(cc.open));
      this.high.push(Number(cc.high));
      this.low.push(Number(cc.low));
      this.close.push(Number(cc.close));
      this.volume.push(Number(cc.volume));
      this.quoteVolume.push(Number(cc.quoteVolume));
    });

    var candlesOptions = {
      symbol: `${this.symbol}`,
      limit: 200,
      interval: `${this.longPeriod}m`,
    };

    var data = await client.candles(candlesOptions);

    data.forEach((cc) => {
      this.lstartTime.push(Number(cc.openTime));
      this.lopen.push(Number(cc.open));
      this.lhigh.push(Number(cc.high));
      this.llow.push(Number(cc.low));
      this.lclose.push(Number(cc.close));
      this.lvolume.push(Number(cc.volume));
      this.lquoteVolume.push(Number(cc.quoteVolume));
    });

    this.dataReady = true;

  }

  update(cc) {
    this.startTime.shift();
    this.open.shift();
    this.high.shift();
    this.low.shift();
    this.close.shift();
    this.volume.shift();
    this.quoteVolume.shift();

    this.startTime.push(Number(cc.openTime));
    this.open.push(Number(cc.open));
    this.high.push(Number(cc.high));
    this.low.push(Number(cc.low));
    this.close.push(Number(cc.close));
    this.volume.push(Number(cc.volume));
    this.quoteVolume.push(Number(cc.quoteVolume));
  }

  updateLong(cc) {

    //coger los ultimos, hay que calcular los ultimos n array... es el mismo que en BT













    this.lstartTime.shift();
    this.lopen.shift();
    this.lhigh.shift();
    this.llow.shift();
    this.lclose.shift();
    this.lvolume.shift();
    this.lquoteVolume.shift();

    this.lstartTime.push(Number(cc.openTime));
    this.lopen.push(Number(cc.open));
    this.lhigh.push(Number(cc.high));
    this.llow.push(Number(cc.low));
    this.lclose.push(Number(cc.close));
    this.lvolume.push(Number(cc.volume));
    this.lquoteVolume.push(Number(cc.quoteVolume));
  }




  // Getter
  get getLastCandles() {
    //return [this.calcArea(),0];
  }

  // Method
  getLastCandle() {
    return [this.timeShort[this.timeShort.length - 1]];
  }

  // Static method
  static calcArea(width, height) {
    return "pepe";
  }
};
