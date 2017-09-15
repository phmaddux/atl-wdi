 class Deck {
    constructor() {
        this.deck = this.createDeck();
    }
    createDeck(){
        var deck = [];
        var values = ["aces", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
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




// pull a random card

// more stuff here
// var deck = new Deck();
// deck.getCard(); 

// // deal (random) function, does deal go before or after the score function?

// var randomCard = deck[Math.floor(Math.random() * deck.length)];
// console.log(randomCard)
// pop i global variable
// // +1?
// // hit & stand in jquery
// set up flex box append child



        if (playerScore > 21) {
            message = "Bust. Player loses...";
        }
        else if (dealerScore > 21) {
            message = "Dealer busts! Player wins!";
        }
        else if (playerScore <= 21 && playerHand.length >= 5) {
            message = "Player wins!";
        }
        else if (playerScore === dealerScore) {
            message = "Tie game.";
        }
        else if (playerScore > dealerScore) {
            message = "Player wins!";
        }
        else if (playerScore < dealerScore) {
            message = "Player loses.";
        }
        return message;
    


// Rocks fall, everyone dies ~ reset