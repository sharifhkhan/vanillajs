const SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const CARDS = [
    { 'Ace': 11 },
    { 'King': 10 },
    { 'Queen': 10 },
    { 'Jack': 10 },
    { '10': 10 },
    { '9': 9 },
    { '8': 8 },
    { '7': 7 },
    { '6': 6 },
    { '5': 5 },
    { '4': 4 },
    { '3': 3 },
    { '2': 2 },
];

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


// function randomIntFromInterval(min, max) // min and max included
// {
//     //    return Math.floor(Math.random()*(max-min+1)+min)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


function getStartingCards() {
    let card1 = deck.pop();
    let card2 = deck.pop();

    return [card1, card2];

}