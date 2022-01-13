var tulind = require('tulind');


module.exports = class indicators {
  
  // Constructor
  constructor() {

    this.startTime = []
    this.open = []
    this.high = []
    this.low = []
    this.close = []
    this.volume = []
    this.quoteVolume = []
  
  }
    
  async init(){


  }

  async updateDataIndicators(startTime,open,high,low,close,volume,quoteVolume){

    this.startTime = startTime
    this.open = open
    this.high = high
    this.low = low
    this.close = close
    this.volume = volume
    this.quoteVolume = quoteVolume
    
  }

  getLog(){

    const fs = require('fs')
    console.log(tulind.indicators.psar);

    const st = tulind.indicators

    //console.log(st);

    Object.keys(st).forEach(
      key => {
        console.log(st[key])

        var ss = JSON.stringify(st[key])

        let result = ss.replace(/,/g , "\n");

        console.log(result);

        fs.appendFileSync("tt.txt",result)
        //fs.appendFileSync("tt.txt","\n")
      } 
    )
  }



  getABS(count){
    /*"name":"abs"
    "full_name":"Vector Absolute Value"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["abs"]*/
    var results = []

    tulind.indicators.abs.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
  }
    
  getACOS(count){
    /*"name":"acos"
    "full_name":"Vector Arccosine"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["acos"]*/
    var results = []

    tulind.indicators.acos.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
  
  
  }
    
  getAD(count){
    /*"name":"ad"
    "full_name":"Accumulation/Distribution Line"
    "type":"indicator"
    "inputs":4
    "options":0
    "outputs":1
    "input_names":["high","low","close","volume"]
    "option_names":[]
    "output_names":["ad"]*/
    var results = []

    tulind.indicators.ad.indicator([this.high , this.low , this.close, this.volume] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
  
  }
    
  
  getADOSC(count,opt1,opt2){
    
    /*"name":"adosc"
    "full_name":"Accumulation/Distribution Oscillator"
    "type":"indicator"
    "inputs":4
    "options":2
    "outputs":1
    "input_names":["high","low","close","volume"]
    "option_names":["short period","long period"]
    "output_names":["adosc"]*/
    var results = []

    tulind.indicators.adosc.indicator([this.high,this.low,this.close,this.volume] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
  getADX(count,opt1){
    /*"name":"adx"
    "full_name":"Average Directional Movement Index"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["dx"]*/
    var results = []

    tulind.indicators.adx.indicator([this.high , this.low, this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
  getADXE(count,opt1){
    /*"name":"adxr"
    "full_name":"Average Directional Movement Rating"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["dx"]*/
    var results = []

    tulind.indicators.adxr.indicator([this.high , this.low, this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
  }
    
  getAO(count){
    /*"name":"ao"
    "full_name":"Awesome Oscillator"
    "type":"indicator"
    "inputs":2
    "options":0
    "outputs":1
    "input_names":["high","low"]
    "option_names":[]
    "output_names":["ao"]*/
    var results = []

    tulind.indicators.ao.indicator([this.high , this.low ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
  }
    
  getAPO(count,opt1,opt2){
    /*"name":"apo"
    "full_name":"Absolute Price Oscillator"
    "type":"indicator"
    "inputs":1
    "options":2
    "outputs":1
    "input_names":["real"]
    "option_names":["short period","long period"]
    "output_names":["apo"]*/
    var results = []

    tulind.indicators.apo.indicator([this.close ] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getAROON(count,opt1){
    /*"name":"aroon"
    "full_name":"Aroon"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":2
    "input_names":["high","low"]
    "option_names":["period"]
    "output_names":["aroon_down","aroon_up"]*/
    var results = []

    tulind.indicators.aroon.indicator([this.high , this.low ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      results = [res[0],res[1]]

    });

    return results
    }
    
  getAROONOSC(count,opt1){
    /*"name":"aroonosc"
    "full_name":"Aroon Oscillator"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":1
    "input_names":["high","low"]
    "option_names":["period"]
    "output_names":["aroonosc"]*/
    var results = []

    tulind.indicators.aroonosc.indicator([this.high , this.low ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
  getASIN(count){
    /*"name":"asin"
    "full_name":"Vector Arcsine"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["asin"]*/
    var results = []

    tulind.indicators.asin.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
  getATAN(count){
    /*"name":"atan"
    "full_name":"Vector Arctangent"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["atan"]*/
    var results = []

    tulind.indicators.atan.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
  getATR(count,opt1){
    
    /*"name":"atr"
    "full_name":"Average True Range"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["atr"]*/
    var results = []

    tulind.indicators.atr.indicator([this.high , this.low , this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getAVGPRICE(count){
    /*"name":"avgprice"
    "full_name":"Average Price"
    "type":"overlay"
    "inputs":4
    "options":0
    "outputs":1
    "input_names":["open","high","low","close"]
    "option_names":[]
    "output_names":["avgprice"]*/
    var results = []

    tulind.indicators.avgprice.indicator([this.open, this.high , this.low, this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getBBANDS(count,opt1,opt2){
    
    /*"name":"bbands"
    "full_name":"Bollinger Bands"
    "type":"overlay"
    "inputs":1
    "options":2
    "outputs":3
    "input_names":["real"]
    "option_names":["period","stddev"]
    "output_names":["bbands_lower","bbands_middle","bbands_upper"]*/
    var results = []

    tulind.indicators.bbands.indicator([this.close ] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      res[2].splice(0,res[2].length-count)      
      results = [res[0],res[1],res[2]]

    });

    return results
    }
    
    getBOP(count){
    /*"name":"bop"
    "full_name":"Balance of Power"
    "type":"indicator"
    "inputs":4
    "options":0
    "outputs":1
    "input_names":["open","high","low","close"]
    "option_names":[]
    "output_names":["bop"]*/
    var results = []

    tulind.indicators.bop.indicator([this.open, this.high , this.low, this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getCCI(count,opt1){
    /*"name":"cci"
    "full_name":"Commodity Channel Index"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["cci"]*/
    var results = []

    tulind.indicators.cci.indicator([this.high , this.low, this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getCEIL(count){
    /*"name":"ceil"
    "full_name":"Vector Ceiling"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["ceil"]*/
    var results = []

    tulind.indicators.ceil.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getCMO(count,opt1){
    /*"name":"cmo"
    "full_name":"Chande Momentum Oscillator"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["cmo"]*/
    var results = []

    tulind.indicators.cmo.indicator([this.close] , [opt1 ], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getCOS(count){
    
    /*"name":"cos"
    "full_name":"Vector Cosine"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["cos"]*/
    var results = []

    tulind.indicators.cos.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getCOSH(count){
    /*"name":"cosh"
    "full_name":"Vector Hyperbolic Cosine"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["cosh"]*/
    var results = []

    tulind.indicators.cosh.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
  
    getCVI(count,opt1){
    /*"name":"cvi"
    "full_name":"Chaikins Volatility"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":1
    "input_names":["high","low"]
    "option_names":["period"]
    "output_names":["cvi"]*/
    var results = []

    tulind.indicators.cvi.indicator([this.high , this.low ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getDECAY(count,opt1){
    
    /*"name":"decay"
    "full_name":"Linear Decay"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["decay"]*/
    var results = []

    tulind.indicators.decay.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getDEMA(count,opt1){
    /*"name":"dema"
    "full_name":"Double Exponential Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["dema"]*/
    var results = []

    tulind.indicators.dema.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getDI(count,opt1){
    
    /*"name":"di"
    "full_name":"Directional Indicator"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":2
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["plus_di","minus_di"]*/
    var results = []

    tulind.indicators.di.indicator([this.high , this.low , this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      results = [res[0],res[1]]

    });

    return results
    }
    
    
    getDM(count,opt1){
    
    /*"name":"dm"
    "full_name":"Directional Movement"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":2
    "input_names":["high","low"]
    "option_names":["period"]
    "output_names":["plus_dm","minus_dm"]*/
    var results = []

    tulind.indicators.dm.indicator([this.high , this.low ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      results = [res[0],res[1]]

    });

    return results

    }
    
    getDPO(count,opt1){
    /*"name":"dpo"
    "full_name":"Detrended Price Oscillator"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["dpo"]*/
        var results = []

    tulind.indicators.dpo.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getDX(count,opt1){
    /*"name":"dx"
    "full_name":"Directional Movement Index"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["dx"]*/
    var results = []

    tulind.indicators.dx.indicator([this.high , this.low , this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getEDECAY(count,opt1){
    /*"name":"edecay"
    "full_name":"Exponential Decay"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["edecay"]*/
    var results = []

    tulind.indicators.edecay.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getEMA(count,opt1){
    
    /*"name":"ema"
    "full_name":"Exponential Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["ema"]*/
    var results = []

    tulind.indicators.ema.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getEMV(count){
    
    /*"name":"emv"
    "full_name":"Ease of Movement"
    "type":"indicator"
    "inputs":3
    "options":0
    "outputs":1
    "input_names":["high","low","volume"]
    "option_names":[]
    "output_names":["emv"]*/
    var results = []

    tulind.indicators.emv.indicator([this.high , this.low , this.volume] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getEXP(count){
    
    /*"name":"exp"
    "full_name":"Vector Exponential"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["exp"]*/
    var results = []

    tulind.indicators.exp.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getFISHER(count,opt1){
    
    /*"name":"fisher"
    "full_name":"Fisher Transform"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":2
    "input_names":["high","low"]
    "option_names":["period"]
    "output_names":["fisher","fisher_signal"]*/
    var results = []

    tulind.indicators.fisher.indicator([this.high , this.low ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      results = [res[0],res[1]]

    });

    return results
    }
    
    getFLOOR(count){
    
    /*"name":"floor"
    "full_name":"Vector Floor"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["floor"]*/
    var results = []

    tulind.indicators.floor.indicator([this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getFOSC(count,opt1){
    /*"name":"fosc"
    "full_name":"Forecast Oscillator"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["fosc"]*/
    var results = []

    tulind.indicators.fosc.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getHMA(count,opt1){
    /*"name":"hma"
    "full_name":"Hull Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["hma"]*/
    var results = []

    tulind.indicators.hma.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getKAMA(count,opt1){
    /*"name":"kama"
    "full_name":"Kaufman Adaptive Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["kama"]*/
    var results = []

    tulind.indicators.kama.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getKVO(count,opt1,opt2){
    /*"name":"kvo"
    "full_name":"Klinger Volume Oscillator"
    "type":"indicator"
    "inputs":4
    "options":2
    "outputs":1
    "input_names":["high","low","close","volume"]
    "option_names":["short period","long period"]
    "output_names":["kvo"]*/
    var results = []

    tulind.indicators.kvo.indicator([this.high , this.low, this.close, this.volume ] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getLAG(count,opt1){
    
    /*"name":"lag"
    "full_name":"Lag"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["lag"]*/
    var results = []

    tulind.indicators.lag.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getLINREG(count,opt1){
    /*"name":"linreg"
    "full_name":"Linear Regression"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["linreg"]*/
    var results = []

    tulind.indicators.linreg.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getLINREGINTERCEPT(count,opt1){
    
    /*"name":"linregintercept"
    "full_name":"Linear Regression Intercept"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["linregintercept"]*/
    var results = []

    tulind.indicators.linregintercept.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getLINREGSLOPE(count,opt1){
    
    /*"name":"linregslope"
    "full_name":"Linear Regression Slope"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["linregslope"]*/
    var results = []

    tulind.indicators.linregslope.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getLN(count){
    /*"name":"ln"
    "full_name":"Vector Natural Log"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["ln"]*/
    var results = []

    tulind.indicators.ln.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getLOG10(count){
    /*"name":"log10"
    "full_name":"Vector Base-10 Log"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["log10"]*/
    var results = []

    tulind.indicators.log10.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMACD(count,opt1,opt2,opt3){
    
    /*"name":"macd"
    "full_name":"Moving Average Convergence/Divergence"
    "type":"indicator"
    "inputs":1
    "options":3
    "outputs":3
    "input_names":["real"]
    "option_names":["short period","long period","signal period"]
    "output_names":["macd","macd_signal","macd_histogram"]*/
    var results = []

    tulind.indicators.macd.indicator([this.close] , [opt1 , opt2, opt3], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      res[2].splice(0,res[2].length-count)
      results = [res[0],res[1],res[2]]

    });

    return results
    }
    
    getMARKETFI(count){
    /*"name":"marketfi"
    "full_name":"Market Facilitation Index"
    "type":"indicator"
    "inputs":3
    "options":0
    "outputs":1
    "input_names":["high","low","volume"]
    "option_names":[]
    "output_names":["marketfi"]*/
    var results = []

    tulind.indicators.marketfi.indicator([this.high , this.low, this.volume ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMASS(count,opt1){
    
    /*"name":"mass"
    "full_name":"Mass Index"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":1
    "input_names":["high","low"]
    "option_names":["period"]
    "output_names":["mass"]*/
    var results = []

    tulind.indicators.mass.indicator([this.high , this.low ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMAX(count,opt1){
    
    /*"name":"max"
    "full_name":"Maximum In Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["max"]*/
    var results = []

    tulind.indicators.max.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMD(count,opt1){
    /*"name":"md"
    "full_name":"Mean Deviation Over Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["md"]*/
    var results = []

    tulind.indicators.md.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMEDPRICE(count){
    
    /*"name":"medprice"
    "full_name":"Median Price"
    "type":"overlay"
    "inputs":2
    "options":0
    "outputs":1
    "input_names":["high","low"]
    "option_names":[]
    "output_names":["medprice"]*/
    var results = []

    tulind.indicators.medprice.indicator([this.high , this.low ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMFI(count,opt1){
    /*"name":"mfi"
    "full_name":"Money Flow Index"
    "type":"indicator"
    "inputs":4
    "options":1
    "outputs":1
    "input_names":["high","low","close","volume"]
    "option_names":["period"]
    "output_names":["mfi"]*/
    var results = []

    tulind.indicators.mfi.indicator([this.high , this.low , this.close , this.volume] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMIN(count,opt1){
    /*"name":"min"
    "full_name":"Minimum In Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["min"]*/
    var results = []

    tulind.indicators.min.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMOM(count,opt1){
    
    /*"name":"mom"
    "full_name":"Momentum"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["mom"]*/
    var results = []

    tulind.indicators.mom.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getMSW(count,opt1){
    /*"name":"msw"
    "full_name":"Mesa Sine Wave"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":2
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["msw_sine","msw_lead"]*/
    var results = []

    tulind.indicators.msw.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      results = [res[0],res[1]]

    });

    return results
    }
    
   
    getNATR(count,opt1){
    
    /*"name":"natr"
    "full_name":"Normalized Average True Range"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["natr"]*/
    var results = []

    tulind.indicators.natr.indicator([this.high , this.low, this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getNVI(count){
    
    /*"name":"nvi"
    "full_name":"Negative Volume Index"
    "type":"indicator"
    "inputs":2
    "options":0
    "outputs":1
    "input_names":["close","volume"]
    "option_names":[]
    "output_names":["nvi"]*/
    var results = []

    tulind.indicators.nvi.indicator([this.close , this.volume ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getOBV(count){
    
    /*"name":"obv"
    "full_name":"On Balance Volume"
    "type":"indicator"
    "inputs":2
    "options":0
    "outputs":1
    "input_names":["close","volume"]
    "option_names":[]
    "output_names":["obv"]*/
    var results = []

    tulind.indicators.obv.indicator([this.close , this.volume ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getPPO(count,opt1,opt2){
    
    /*"name":"ppo"
    "full_name":"Percentage Price Oscillator"
    "type":"indicator"
    "inputs":1
    "options":2
    "outputs":1
    "input_names":["real"]
    "option_names":["short period","long period"]
    "output_names":["ppo"]*/
    var results = []

    tulind.indicators.ppo.indicator([this.close] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getPSAR(count,opt1,opt2){
    
    /*"name":"psar"
    "full_name":"Parabolic SAR"
    "type":"overlay"
    "inputs":2
    "options":2
    "outputs":1
    "input_names":["high","low"]
    "option_names":["acceleration factor step","acceleration factor maximum"]
    "output_names":["psar"]*/
    var results = []

    tulind.indicators.psar.indicator([this.high , this.low ] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getPVI(count){
    
    /*"name":"pvi"
    "full_name":"Positive Volume Index"
    "type":"indicator"
    "inputs":2
    "options":0
    "outputs":1
    "input_names":["close","volume"]
    "option_names":[]
    "output_names":["pvi"]*/
    var results = []

    tulind.indicators.pvi.indicator([this.close , this.volume ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getQSTICK(count,opt1){
    /*"name":"qstick"
    "full_name":"Qstick"
    "type":"indicator"
    "inputs":2
    "options":1
    "outputs":1
    "input_names":["open","close"]
    "option_names":["period"]
    "output_names":["qstick"]*/
    var results = []

    tulind.indicators.qstick.indicator([this.open , this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getROC(count,opt1){
    
    /*"name":"roc"
    "full_name":"Rate of Change"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["roc"]*/
    var results = []

    tulind.indicators.roc.indicator([this.close ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getROCR(count,opt1){
    
    /*"name":"rocr"
    "full_name":"Rate of Change Ratio"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["rocr"]*/
    var results = []

    tulind.indicators.rocr.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getROUND(count){
    
    /*"name":"round"
    "full_name":"Vector Round"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["round"]*/
    var results = []

    tulind.indicators.round.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getRSI(count,opt1){
    /*"name":"rsi"
    "full_name":"Relative Strength Index"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["rsi"]*/
    var results = []

    tulind.indicators.rsi.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSIN(count){
    
    /*"name":"sin"
    "full_name":"Vector Sine"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["sin"]*/
    var results = []

    tulind.indicators.sin.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSINH(count){
    
    /*"name":"sinh"
    "full_name":"Vector Hyperbolic Sine"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["sinh"]*/
    var results = []

    tulind.indicators.sinh.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSMA(count,opt1){
    
    /*"name":"sma"
    "full_name":"Simple Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["sma"]*/
    var results = []

    tulind.indicators.sma.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSQRT(count){
    
    /*"name":"sqrt"
    "full_name":"Vector Square Root"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["sqrt"]*/
    var results = []

    tulind.indicators.sqrt.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSTDDEV(count,opt1){
    
    /*"name":"stddev"
    "full_name":"Standard Deviation Over Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["stddev"]*/
    var results = []

    tulind.indicators.stddev.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSTDERR(count,opt1){
    
    /*"name":"stderr"
    "full_name":"Standard Error Over Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["stderr"]*/
    var results = []

    tulind.indicators.stderr.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getSTOCH(count,opt1,opt2,opt3){
    
    /*"name":"stoch"
    "full_name":"Stochastic Oscillator"
    "type":"indicator"
    "inputs":3
    "options":3
    "outputs":2
    "input_names":["high","low","close"]
    "option_names":["%k period","%k slowing period","%d period"]
    "output_names":["stoch_k","stoch_d"]*/
    var results = []

    tulind.indicators.stoch.indicator([this.high , this.low, this.close ] , [opt1 , opt2, opt3], function(err, res) {
      res[0].splice(0,res[0].length-count)
      res[1].splice(0,res[1].length-count)
      results = [res[0],res[1]]

    });

    return results
    }
    
    getSTOCHRSI(count,opt1){
    /*"name":"stochrsi"
    "full_name":"Stochastic RSI"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["stochrsi"]*/
    var results = []

    tulind.indicators.stochrsi.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    
    getSUM(count,opt1){
    
    /*"name":"sum"
    "full_name":"Sum Over Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["sum"]*/
    var results = []

    tulind.indicators.sum.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getTAN(count){
    /*"name":"tan"
    "full_name":"Vector Tangent"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["tan"]*/
    var results = []

    tulind.indicators.tan.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTANH(count){
    
    /*"name":"tanh"
    "full_name":"Vector Hyperbolic Tangent"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["tanh"]*/
    var results = []

    tulind.indicators.tanh.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTEMA(count,opt1){
    
    /*"name":"tema"
    "full_name":"Triple Exponential Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["tema"]*/
    var results = []

    tulind.indicators.tema.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTODEG(count){
    
    /*"name":"todeg"
    "full_name":"Vector Degree Conversion"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["degrees"]*/
    var results = []

    tulind.indicators.todeg.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTORAD(count){
    
    /*"name":"torad"
    "full_name":"Vector Radian Conversion"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["radians"]*/
    var results = []

    tulind.indicators.torad.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTR(count){
    
    /*"name":"tr"
    "full_name":"True Range"
    "type":"indicator"
    "inputs":3
    "options":0
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":[]
    "output_names":["tr"]*/
    var results = []

    tulind.indicators.tr.indicator([this.high , this.low , this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTRIMA(count,opt1){
    
    /*"name":"trima"
    "full_name":"Triangular Moving Average"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["trima"]*/
    var results = []

    tulind.indicators.trima.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTRIX(count,opt1){
    
    /*"name":"trix"
    "full_name":"Trix"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["trix"]*/
    var results = []

    tulind.indicators.trix.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTRUNC(count){
    
    /*"name":"trunc"
    "full_name":"Vector Truncate"
    "type":"simple"
    "inputs":1
    "options":0
    "outputs":1
    "input_names":["real"]
    "option_names":[]
    "output_names":["trunc"]*/
    var results = []

    tulind.indicators.trunc.indicator([this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getTSF(count,opt1){
    
    /*"name":"tsf"
    "full_name":"Time Series Forecast"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["tsf"]*/
    var results = []

    tulind.indicators.tsf.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getTYPPRICE(count){
    /*"name":"typprice"
    "full_name":"Typical Price"
    "type":"overlay"
    "inputs":3
    "options":0
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":[]
    "output_names":["typprice"]*/
    var results = []

    tulind.indicators.typprice.indicator([this.high , this.low, this.close ] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getULTOSC(count,opt1,opt2,opt3){
    /*"name":"ultosc"
    "full_name":"Ultimate Oscillator"
    "type":"indicator"
    "inputs":3
    "options":3
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["short period","medium period","long period"]
    "output_names":["ultosc"]*/
    var results = []

    tulind.indicators.ultosc.indicator([this.high , this.low , this.close] , [opt1 , opt2, opt3], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    
    }
    
    getVAR(count,opt1){
    /*"name":"var"
    "full_name":"Variance Over Period"
    "type":"math"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["var"]*/
    var results = []

    tulind.indicators.var.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getVHF(count,opt1){
    
    /*"name":"vhf"
    "full_name":"Vertical Horizontal Filter"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["vhf"]*/
    var results = []

    tulind.indicators.vhf.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getVIDYA(count,opt1,opt2,opt3){
    
    /*"name":"vidya"
    "full_name":"Variable Index Dynamic Average"
    "type":"overlay"
    "inputs":1
    "options":3
    "outputs":1
    "input_names":["real"]
    "option_names":["short period","long period","alpha"]
    "output_names":["vidya"]*/
    var results = []

    tulind.indicators.vidya.indicator([this.close] , [opt1 , opt2, opt3], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getVOLATILITY(count,opt1){
    
    /*"name":"volatility"
    "full_name":"Annualized Historical Volatility"
    "type":"indicator"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["volatility"]*/
    var results = []

    tulind.indicators.volatility.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getVOSC(count,opt1,opt2){
    /*"name":"vosc"
    "full_name":"Volume Oscillator"
    "type":"indicator"
    "inputs":1
    "options":2
    "outputs":1
    "input_names":["volume"]
    "option_names":["short period","long period"]
    "output_names":["vosc"]*/
    var results = []

    tulind.indicators.vosc.indicator([this.volume ] , [opt1 , opt2], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getVWMA(count,opt1){
    /*"name":"vwma"
    "full_name":"Volume Weighted Moving Average"
    "type":"overlay"
    "inputs":2
    "options":1
    "outputs":1
    "input_names":["close","volume"]
    "option_names":["period"]
    "output_names":["vwma"]*/
    var results = []

    tulind.indicators.vwma.indicator([this.close , this.volume ] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results

    }
    
    getWAD(count){
    
    /*"name":"wad"
    "full_name":"Williams Accumulation/Distribution"
    "type":"indicator"
    "inputs":3
    "options":0
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":[]
    "output_names":["wad"]*/
    var results = []

    tulind.indicators.wad.indicator([this.high , this.low ,this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results

    }
    
    getWCPRICE(count){
    /*"name":"wcprice"
    "full_name":"Weighted Close Price"
    "type":"overlay"
    "inputs":3
    "options":0
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":[]
    "output_names":["wcprice"]*/
    var results = []

    tulind.indicators.wcprice.indicator([this.high , this.low , this.close] , [], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results

    }
    
    getWILDERS(count,opt1){
    
    /*"name":"wilders"
    "full_name":"Wilders Smoothing"
    "type":"overlay"
    "inputs":1
    "options":1
    "outputs":1
    "input_names":["real"]
    "option_names":["period"]
    "output_names":["wilders"]*/
    var results = []

    tulind.indicators.wilders.indicator([this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results
    }
    
    getWILLR(count,opt1){
    /*"name":"willr"
    "full_name":"Williams %R"
    "type":"indicator"
    "inputs":3
    "options":1
    "outputs":1
    "input_names":["high","low","close"]
    "option_names":["period"]
    "output_names":["willr"]*/
    var results = []

    tulind.indicators.willr.indicator([this.high , this.low ,this.close] , [opt1], function(err, res) {
      res[0].splice(0,res[0].length-count)
      results = res[0]

    });

    return results

    }
    
    getWMA(count,opt1){
      /*"name":"wma"
      "full_name":"Weighted Moving Average"
      "type":"overlay"
      "inputs":1
      "options":1
      "outputs":1
      "input_names":["real"]
      "option_names":["period"]
      "output_names":["wma"]*/
      var results = []

      tulind.indicators.wma.indicator([this.close ] , [opt1], function(err, res) {
        res[0].splice(0,res[0].length-count)
        results = res[0]
  
      });
  
      return results

    }
    
    getZLEMA(count,opt1){
      /*"name":"zlema"
      "full_name":"Zero-Lag Exponential Moving Average"
      "type":"overlay"
      "inputs":1
      "options":1
      "outputs":1
      "input_names":["real"]
      "option_names":["period"]
      "output_names":["zlema"]*/
      var results = []

      tulind.indicators.zlema.indicator([this.close ] , [opt1], function(err, res) {
        res[0].splice(0,res[0].length-count)
        results = res[0]
  
      });
  
      return results

    }









}