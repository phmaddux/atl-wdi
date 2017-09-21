 class Deck {
    constructor() {
        this.deck = this.createDeck();
    }
    createDeck(){
        var deck = [];
        // placeholding values until I can find a way to make "Jack" = 10, etc
        var values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
        var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
        values.forEach(function(value) {
            suits.forEach(function(suit) {
                var card = {
                    value: value,
                    suit: suit,
                };
                deck.push(card);

            }, this);
        }, this);
        return deck;
    }


    getCard(){
        var cardArray = this.deck.splice(Math.floor(Math.random()*this.deck.length), 1);
        var card = cardArray[0]   
        console.log(card);
        return card;
    }

}

// var deck = new Deck();
// deck.getCard(); 
