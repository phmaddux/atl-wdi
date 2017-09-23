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
        console.log(this.name + " is feeling ill... *VOMITS EVERYWHERE*")
        console.log(this.name + " has " + this.health + " health remaining.")
    }
    yawn(){
        this.restedness--;
        console.log(this.name + " is so, so tired.")
        console.log(this.name + " has " + this.restedness + " restedness remaining.")
    }
    start(){
        console.log('Starting ' + this.name);
        var self = this
        this.hungerTimer = setInterval(() => {
            self.cry();
        }, 6000)
        this.yawnTime = setInterval(() => {
            self.yawn();
        }, 10000)
        this.sickTimer = setInterval(() => {
            self.puke();
        }, 25000)
    }
    stop(){
        console.log("Stopping" + this.name);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
        clearInterval(this.hungerTimer);
    }
    
}

//create new Tamagotchis
var Mandy = new Tamagotchi('Mandy', 'Tamagotchi')
var Stephen = new Tamagotchi('Stephen', 'Tamagotchi')

//test out your Tamagotchies below via console.logs
console.log(Mandy)
console.log(Stephen)

Mandy.start();
Stephen.start();
