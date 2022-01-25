class DataManager {

    constructor(name) {
      this.speed = 0;
      this.name = name;
      this.candles = [0,1,2,3,4]



    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} corre a una velocidad de ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} se queda quieto.`);
    }

    pepe() {

      console.log(this.candles);

    }

  
  }
  

  class BtData extends DataManager {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
        super.pepe();
      }
    
    
    hide() {
        console.log(`¡${this.name} se esconde!`);
    }
  
    stop() {
      super.stop(); // llama el stop padre
      this.hide(); // y luego hide
    }
  }


  
  let rabbit = new DataManager("Conejo Blanco");
  let rabbit2 = new BtData("Conejo Blanco",10);
  rabbit.run(5); // Conejo Blanco corre a una velocidad de 5.
  rabbit.stop(); // Conejo Blanco se queda quieto. ¡Conejo Blanco se esconde!
  