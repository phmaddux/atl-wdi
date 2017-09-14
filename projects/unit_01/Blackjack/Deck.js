 class Deck {
    constructor() {
        this.deck = this.createDeck();
    }
    createDeck(){
        var deck = [];
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
      return this.deck;
    }

}

var deck = new Deck();
deck.getCard(); 

// shuffle function

// deal function

// hit & stand in jquery

// scoring

// reset







