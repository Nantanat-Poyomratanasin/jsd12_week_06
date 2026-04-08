const Animal = require("./Animal.js")

class Mammal extends Animal{
    constructor(name, species,furcolor){
        super(name, species); //calls the parernt constructor
        this.furcolor = furcolor;
    }

    groom(){
        console.log(`${this.name} is brushing their ${this.furcolor} fur.`);
    }
}
module.exports = Mammal;