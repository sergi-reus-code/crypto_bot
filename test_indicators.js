const indicatorsManager = require('./classes/strategys/indicators/indicators')
const indicators = new indicatorsManager();

const btDataManager = require('./classes/btDataManager/btDataManager')
const btDataM = new btDataManager();


/**
* 
* PUT DATA
*/


async function initBackTesting() {

    btDataM.init("ETHUSDT","1m","20211201T0000","20220101T0000")
    const resp = btDataM.isSinchronized()
    const ar = btDataM.getLastItems(200)
    
    if (resp) {
    
      console.log("data sicro");
      indicators.updateDataIndicators(ar[0],ar[1],ar[2],ar[3],ar[4],ar[5],ar[6])
      
      const ww = indicators.getPSARR(5,0.02,0.2)

      //console.log(ww);

      var ind = []

      //ind[0]=indicators.getABS(1)                        //"Vector Absolute Value"
      //ind[1]=indicators.getACOS(1)                       //"Vector Arccosine"
      //ind[2]=indicators.getAD(1)                         //"Accumulation/Distribution Line"
      //ind[3]=indicators.getADOSC(1,opt1,opt2)            //"Accumulation/Distribution Oscillator"    "option_names":["short period","long period"]
      //ind[4]=indicators.getADX(1,14)                   //"Average Directional Movement Index"      "option_names":["period"]
      //ind[5]=indicators.getADXE(1,14)                  //"Average Directional Movement Rating"     "option_names":["period"]
      //ind[6]=indicators.getAO(1)                         //"Awesome Oscillator"
      //ind[7]=indicators.getAPO(1,opt1,opt2)              //"Absolute Price Oscillator"               "option_names":["short period","long period"]
      //ind[8]=indicators.getAROON(1,14)                 //"Aroon"                                   "option_names":["period"]
      //ind[9]=indicators.getAROONOSC(1,14)              //"Aroon Oscillator"                        "option_names":["period"]
      //ind[10]=indicators.getASIN(1)                      //"Vector Arcsine"
      //ind[11]=indicators.getATAN(1)                      //"Vector Arctangent"
      //ind[12]=indicators.getATR(1,14)                  //"Average True Range"                      "option_names":["period"]
      //ind[13]=indicators.getAVGPRICE(1)                  //"Average Price"
      //ind[14]=indicators.getBBANDS(1,opt1,opt2)          //"Bollinger Bands"                         "option_names":["period","stddev"]
      //ind[15]=indicators.getBOP(1)                       //"Balance of Power"
      //ind[16]=indicators.getCCI(1,14)                  //"Commodity Channel Index"                 "option_names":["period"]
      //ind[17]=indicators.getCEIL(1)                      //"Vector Ceiling"
      //ind[18]=indicators.getCMO(1,14)                  //"Chande Momentum Oscillator"              "option_names":["period"]
      //ind[19]=indicators.getCOS(1)                       //"Vector Cosine"
      //ind[20]=indicators.getCOSH(1)                      //"Vector Hyperbolic Cosine"
      //ind[21]=indicators.getCVI(1,14)                  //"Chaikins Volatility"                     "option_names":["period"]
      //ind[22]=indicators.getDECAY(1,14)                //"Linear Decay"                            "option_names":["period"]
      //ind[23]=indicators.getDEMA(1,14)                 //"Double Exponential Moving Average"       "option_names":["period"]
      //ind[24]=indicators.getDI(1,14)                   //"Directional Indicator"                   "option_names":["period"]
      //ind[25]=indicators.getDM(1,14)                   //"Directional Movement"                    "option_names":["period"]
      //ind[26]=indicators.getDPO(1,14)                  //"Detrended Price Oscillator"              "option_names":["period"]
      //ind[27]=indicators.getDX(1,opt1)                   //"Directional Movement Index"              "option_names":["period"]"option_names":["period"]
      //ind[28]=indicators.getEDECAY(1,14)               //"Exponential Decay"                       "option_names":["period"]
      //ind[29]=indicators.getEMA(1,14)                  //"Exponential Moving Average"              "option_names":["period"]
      //ind[30]=indicators.getEMV(1)                       //"Ease of Movement"   
      //ind[31]=indicators.getEXP(1)                       //"Vector Exponential"
      //ind[32]=indicators.getFISHER(1,14)               //"Fisher Transform"                        "option_names":["period"]
      //ind[33]=indicators.getFLOOR(1)                     //"Vector Floor"   
      //ind[34]=indicators.getFOSC(1,14)                 //"Forecast Oscillator"                     "option_names":["period"]
      //ind[35]=indicators.getHMA(1,14)                  //"Hull Moving Average"                     "option_names":["period"]
      //ind[36]=indicators.getKAMA(1,14)                 //"Kaufman Adaptive Moving Average"         "option_names":["period"]
      //ind[37]=indicators.getKVO(1,opt1,opt2)             //"Klinger Volume Oscillator"               "option_names":["short period","long period"]
      //ind[38]=indicators.getLAG(1,14)                  //"Lag"                                     "option_names":["period"]
      //ind[39]=indicators.getLINREG(1,14)               //"Linear Regression"                       "option_names":["period"]
      //ind[40]=indicators.getLINREGINTERCEPT(1,14)      //"Linear Regression Intercept"             "option_names":["period"]
      //ind[41]=indicators.getLINREGSLOPE(1,14)          //"Linear Regression Slope"                 "option_names":["period"]
      //ind[42]=indicators.getLN(1)                        //"Vector Natural Log"
      //ind[43]=indicators.getLOG10(1)                     //"Vector Base-10 Log"
      //ind[44]=indicators.getMACD(1,opt1,opt2,opt3)       //"Moving Average Convergence/Divergence"   "option_names":["short period","long period","signal period"]
      //ind[45]=indicators.getMARKETFI(1)                  //"Market Facilitation Index"
      //ind[46]=indicators.getMASS(1,14)                 //"Mass Index"                              "option_names":["period"]
      //ind[47]=indicators.getMAX(1,14)                  //"Maximum In Period"                       "option_names":["period"]
      //ind[48]=indicators.getMD(1,14)                   //"Mean Deviation Over Period"              "option_names":["period"]
      //ind[49]=indicators.getMEDPRICE(1)                  //"Median Price"
      //ind[50]=indicators.getMFI(1,14)                  //"Money Flow Index"                        "option_names":["period"]
      //ind[51]=indicators.getMIN(1,14)                  //"Minimum In Period"                       "option_names":["period"]
      //ind[52]=indicators.getMOM(1,14)                  //"Momentum"                                "option_names":["period"]
      //ind[53]=indicators.getMSW(1,14)                  //"Mesa Sine Wave"                          "option_names":["period"]
      //ind[54]=indicators.getNATR(1,14)                 //"Normalized Average True Range"           "option_names":["period"]
      //ind[55]=indicators.getNVI(1)                       //"Negative Volume Index"
      //ind[56]=indicators.getOBV(1)                       //"On Balance Volume"
      //ind[57]=indicators.getPPO(1,opt1,opt2)             //"Percentage Price Oscillator"             "option_names":["short period","long period"]
      //ind[58]=indicators.getPSAR(1,opt1,opt2)            //"Parabolic SAR"                           "option_names":["acceleration factor step","acceleration factor maximum"]
      //ind[59]=indicators.getPVI(1)                       //"Positive Volume Index"
      //ind[60]=indicators.getQSTICK(1,14)               //"Qstick"                                  "option_names":["period"]
      //ind[61]=indicators.getROC(1,14)                  //"Rate of Change"                          "option_names":["period"]
      //ind[62]=indicators.getROCR(1,14)                 //"Rate of Change Ratio"                    "option_names":["period"]
      //ind[63]=indicators.getROUND(1)                     //"Vector Round"   
      //ind[64]=indicators.getRSI(1,14)                  //"Relative Strength Index"                 "option_names":["period"]
      //ind[65]=indicators.getSIN(1)                       //"Vector Sine"
      //ind[66]=indicators.getSINH(1)                      //"Vector Hyperbolic Sine"
      //ind[67]=indicators.getSMA(1,14)                  //"Simple Moving Average"                   "option_names":["period"]
      //ind[68]=indicators.getSQRT(1)                      //"Vector Square Root"
      //ind[69]=indicators.getSTDDEV(1,14)               //"Standard Deviation Over Period"          "option_names":["period"]
      //ind[70]=indicators.getSTDERR(1,14)               //"Standard Error Over Period"              "option_names":["period"]
      //ind[71]=indicators.getSTOCH(1,opt1,opt2,opt3)      //"Stochastic Oscillator"                   "option_names":["%k period","%k slowing period","%d period"]
      //ind[72]=indicators.getSTOCHRSI(1,14)             //"Stochastic RSI"                          "option_names":["period"]
      //ind[73]=indicators.getSUM(1,14)                  //"Sum Over Period"                         "option_names":["period"]
      //ind[74]=indicators.getTAN(1)                       //"Vector Tangent"   
      //ind[75]=indicators.getTANH(1)                      //"Vector Hyperbolic Tangent"
      //ind[76]=indicators.getTEMA(1,14)                 //"Triple Exponential Moving Average"       "option_names":["period"]
      //ind[77]=indicators.getTODEG(1)                     //"Vector Degree Conversion"   
      //ind[78]=indicators.getTORAD(1)                     //"Vector Radian Conversion
      //ind[79]=indicators.getTR(1)                        //"True Range"
      //ind[80]=indicators.getTRIMA(1,14)                //"Triangular Moving Average"               "option_names":["period"]
      //ind[81]=indicators.getTRIX(1,14)                 //"Trix"   "option_names":["period"]
      //ind[82]=indicators.getTRUNC(1)                     //"Vector Truncate"
      //ind[83]=indicators.getTSF(1,14)                  //"Time Series Forecast"                    "option_names":["period"]
      //ind[84]=indicators.getTYPPRICE(1)                  //"Typical Price"
      //ind[85]=indicators.getULTOSC(1,opt1,opt2,opt3)     //"Ultimate Oscillator"                     "option_names":["short period","medium period","long period"]
      //ind[86]=indicators.getVAR(1,14)                  //"Variance Over Period"                    "option_names":["period"]
      //ind[87]=indicators.getVHF(1,14)                  //"Vertical Horizontal Filter"              "option_names":["period"]
      //ind[88]=indicators.getVIDYA(1,opt1,opt2,opt3)      //"Variable Index Dynamic Average"          "option_names":["short period","long period","alpha"]
      //ind[89]=indicators.getVOLATILITY(1,14)           //"Annualized Historical Volatility"        "option_names":["period"]
      //ind[90]=indicators.getVOSC(1,opt1,opt2)            //"Volume Oscillator"                       "option_names":["short period","long period"]
      //ind[91]=indicators.getVWMA(1,14)                 //"Volume Weighted Moving Average"          "option_names":["period"]
      //ind[92]=indicators.getWAD(1)                       //"Williams Accumulation/Distribution"
      //ind[93]=indicators.getWCPRICE(1)                   //"Weighted Close Price"
      //ind[94]=indicators.getWILDERS(1,14)              //"Wilders Smoothing"                       "option_names":["period"]
      //ind[95]=indicators.getWILLR(1,14)                //"Williams %R"                             "option_names":["period"]
      //ind[96]=indicators.getWMA(1,14)                  //"Weighted Moving Average"                 "option_names":["period"]
      //ind[97]=indicators.getZLEMA(1,14)                //"Zero-Lag Exponential Moving Average"     "option_names":["period"]





console.log(ind);









      


  
      
    }else{
  
      console.log("wait");
  
    }
  
}



initBackTesting()