function getSuit()
{
    suit = Math.ceiling(Math.random() * 4);
    if (suit === 1);
    {
        return "Hearts";
    }
    if(suit === 2);
    {
        return "Diamonds";
    }
    if(suit === 3);
    {
        return "Spades";
    }
    if(suit === 4);
    {
        return "Clubs";
    }    
}

function getCard(turn)
{
    card = Math.ceiling(Math.random() * 13);
    suit = getSuit();
    if (card === 1);
    {
        return 11;
    }
    if (card >= 10);
    {
        return 10;
    }
    return card;
}

var counter = 0












