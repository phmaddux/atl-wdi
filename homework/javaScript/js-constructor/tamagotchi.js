console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }
    cry(){
        this.foodInTummy--;
        console.log("The tamagotchi is crying!!! WAAAA!!!")
        console.log('Current food in tummy: ' + this.foodInTummy);
    }
    puke(){
        this.health--;
        console.log("*VOMIT EVERYWHERE*")
        console.log(this.name + "Has health = " + this.health)
    }
}

//create new Tamagotchis
var constructedObject1 = new Tamagotchi()
var constructedObject2 = new Tamagotchi()

//test out your Tamagotchies below via console.logs
console.log(constructedObject1)
console.log(constructedObject2)

constructedObject1.cry();
constructedObject2.cry();