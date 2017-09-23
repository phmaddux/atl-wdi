console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--;
        console.log("The tamagotchi is crying!!! WAAAA!!!")
        console.log(this.name + ' has ' + this.foodInTummy + ' remaining food in their tummy.');
    }
    puke(){
        this.health--;
        console.log("*VOMIT EVERYWHERE*")
        console.log(this.name + " has " + this.health + " health remaining.")
    }
}

//create new Tamagotchis
var Mandy = new Tamagotchi('Mandy', 'Tamagotchi')
var Stephen = new Tamagotchi('Stephen', 'Tamagotchi')

//test out your Tamagotchies below via console.logs
console.log(Mandy)
console.log(Stephen)

Mandy.cry();
Stephen.cry();
