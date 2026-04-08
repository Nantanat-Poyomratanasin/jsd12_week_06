class Animal {
  constructor(name, species,sound) {
    this.name = name;
    this.species = species;
    this._hunger = 50; //Internal state (protected by_) 
  }

  getStatus(){
    if(this._hunger <= 0) return "Full";
    if(this._hunger <= 20) return "Satisfied";
    return "Hungry";

  }
  
  makeSound() {
    console.log(`${this.name} make sound ${this.sound}`);
  }

  eat() {
    this._hunger = this._hunger - 10;
    //console.log(
      //`${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    //);
    if(this._hunger<=0){
        console.log(`${this.name} is already fill!`)
    }
    else{
        console.log(`${this.name} ate. Hunger is now ${this._hunger}`)
    }
  }
}
module.exports = Animal;