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
        console.log(this.name + " is crying!!! WAAAA!!!")
        console.log(this.name + ' has ' + this.foodInTummy + ' remaining food in their tummy.');
    }
    puke(){
        this.health--;
        console.log(this.name + " is feeling i'll... *VOMITS EVERYWHERE*")
        console.log(this.name + " has " + this.health + " health remaining.")
    }
    yawn(){
        this.restedness--;
        console.log(this.name + " is so, so tired.")
        console.log(this.name + " has " + this.restedness + " restedness remaining.")
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
Mandy.puke();
Stephen.puke();
Mandy.yawn();
Stephen.yawn();

player.feedTamagotchi('Mandy')