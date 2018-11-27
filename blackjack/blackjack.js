const SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const CARDS = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

let dealerCards = []; // TODO
let playerCards = []; // TODO
let deck = createDeck();

function createDeck() {
    let deck = [];
    SUITS.forEach(s => {
        CARDS.forEach(c => {

            let card = {
                suit: s,
                value: c
            };

            deck.push(card);
        });
    });

    return deck;
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function randomIntFromInterval(min, max) // min and max included
{
    //    return Math.floor(Math.random()*(max-min+1)+min)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getStartingCards() {
    let card1 = getCardString(deck[randomIntFromInterval(50, 51)]);
    let card2 = getCardString(deck[randomIntFromInterval(50, 51)]);
    while (card1 === card2) {
        card2 = getCardString(deck[randomIntFromInterval(50, 51)]);
    }
    console.warn(card1); // TODO
    console.log(card2); // TODO
}

getStartingCards();