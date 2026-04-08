// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full JS OOP implementation using Encapsulation, Inheritance, and Polymorphism.

const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function () {
    console.log(`${this.name} says ROAR!`);
  },
};

lion.makeSound();

// The Class Template (Encapsulation)

class Animal {
  constructor(name, species,sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
    this._hunger = 50; //Internal state (protected by_) 
  }

  makeSound() {
    console.log(`${this.name} make sound ${this.sound}`);
  }

  eat() {
    this._hunger = this._hunger - 10;
    console.log(
      `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    );
  }
}

const animal1 = new Animal("Dang","Cat","Meaw");
const animal2 = new Animal("Dam","Dog","Bark");

console.log(animal1.makeSound());
console.log(animal1.eat());
console.log(animal2.makeSound());
console.log(animal2.eat());

//specialized classes (inheritance)

class Mammal extends Animal{
    constructor(name, species,furcolor){
        super(name, species); //calls the parernt constructor
        this.furcolor = furcolor;
    }

    groom(){
        console.log(`${this.name} is brushing their ${this.furcolor} fur.`);
    }
}

const animal3 = new Mammal("Chanom","Cat","Orange");
console.log(animal3.groom());

//polymorhism --> overide the parent's method

class Bird extends Animal{
    constructor(name, species, wingspan){
        super(name, species);
        this.wingspan = wingspan;
    }

    makeSound(){
        console.log(`${this.name} chirps: Tweet!`);
    }
}
const animal4 = new Bird("Nok","Bird");
console.log(animal4.makeSound());