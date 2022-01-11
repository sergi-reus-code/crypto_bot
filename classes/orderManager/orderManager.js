module.exports = class orderManager {
  
    // Constructor
    constructor() {

     


    }
    
    async initREST(symbol) {

        return "done"

    }

  async initWSS(symbol) {


    return "done"

  }

  update(){}

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
  }