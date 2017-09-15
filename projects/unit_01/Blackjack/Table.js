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
        var deck = new Deck();
        // Random Deal Dealer
        var card = deck.getCard()

    });
