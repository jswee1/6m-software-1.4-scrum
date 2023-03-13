class BaseSignal{
    constructor( type ){
        if(this.constructor.name === "base"){
            throw new Error("This class cannot be instantiated");
        }
        this.type = type;
      }
    
        send() {
            console.log("Sending ${this.type} signal");
        }
    
  }
  class TvSignal extends BaseSignal {
    constructor(type){
        super(type);
    }
  }
  
  class AirconSignal extends BaseSignal {
    constructor(type){
        super(type);
  
    }
  }
  
  class DoorSignal extends BaseSignal {
    constructor(type){
        super(type);
    }
  }
  
  const tv = new TvSignal('tv');
  tv.send(); // prints "Sending tv signal"
  
  const door = new DoorSignal('door');
  door.send(); // prints "Sending door signal"
  
  const aircon = new AirconSignal('aircon');
  aircon.send(); // prints "Sending aircon signal"