const Animal = require("./Animal.js")

class Bird extends Animal{
    constructor(name, species, wingspan){
        super(name, species);
        this.wingspan = wingspan;
    }

    makeSound(){
        console.log(`${this.name} chirps: Tweet!`);
    }
}
module.exports = Bird;