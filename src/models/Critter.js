class Critter {
  constructor(name){
    this.name = name;
    this.age = 0.0;
    this.hunger = 0;
    this.energy = 10;
  }
  setTime(){
    this.age =  this.age + .1;
    this.hunger =  this.hunger + 1;
    if(this.energy > 0) {
      this.energy = this.energy - 1;
    }
  }
}

export default Critter;
