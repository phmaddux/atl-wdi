
// Win conditions
    // (keep this above the other things so it runs first?)
// if (playerScore > 21) {
//     message = "Bust. Player loses...";
// }
// else if (dealerScore > 21) {
//     message = "Dealer busts! Player wins!";
// }
// else if (playerScore <= 21 && playerHand.length >= 5) {
//     message = "Player wins!";
// }
// else if (playerScore === dealerScore) {
//     message = "Tie game.";
// }
// else if (playerScore > dealerScore) {
//     message = "Player wins!";
// }
// else if (playerScore < dealerScore) {
    //     message = "Player loses.";
    // }
    // return message;
    
    function addCardToDom(cardPlacement, card) {
        // make image html from card values
        var oImg = document.createElement("img");
        oImg.setAttribute('src', 'images/' + card.suit + '_' + card.value + '.jpg');
        oImg.setAttribute('alt', 'Hole Card')
        oImg.setAttribute('class', 'card');
        // attach to the dom
        document.getElementById(cardPlacement).appendChild(oImg);
    }
    
document.getElementById("newHand")
    .addEventListener("click",function( e ) {
        // This deletes all objects with the class of card
        var list = document.getElementsByClassName("card");
        for (var i = list.length - 1; 0 <= i; i--) {
            if(list[i] && list [i].parentElement) {
                list[i].parentElement.removeChild(list[i]);
            }
        }
    
        // Create New Deck
        const deck = new Deck();
        // Create Dealer's hand
        const dealerHand = []
        for (var i = 0; i < 2; i++) {            
            const card = deck.getCard();
            // Pushes to Dealer's Hand
            dealerHand.push(card);
            addCardToDom('dealerHand', card);
        }
        
        // Create Player's hand
        const playerHand = [];
        // Pushes to Player's Hand
        
    });

    // when new hand is pressed
        // clear board
        // new card array
        // shuffle new card array
        // deal two cards to the dealer
        // deal two cards to the player
            // wait
    
    // when Hit is pressed
        // a card is pushed from the card array to the dealer/player
    
    // when stand is pressed the turn is ended
        // dealer's tun
        // scoring
            // converting strings like ace into 11s and 1s and J,Q,K into 10s
        // flip dealer's holecard
    
    // when Rules is pressed
        // alert function with the rules pops up.
        
        







    