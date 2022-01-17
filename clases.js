class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} corre a una velocidad de ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} se queda quieto.`);
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
      }
    
    
    hide() {
        console.log(`¡${this.name} se esconde!`);
    }
  
    stop() {
        console.log(this.speed); 
      super.stop(); // llama el stop padre
      this.hide(); // y luego hide
    }
  }
  
  let rabbit = new Rabbit("Conejo Blanco");
  let rabbit2 = new Rabbit("Conejo Blanco",10);
  rabbit.run(5); // Conejo Blanco corre a una velocidad de 5.
  rabbit.stop(); // Conejo Blanco se queda quieto. ¡Conejo Blanco se esconde!
  console.log(rabbit2.earLength);