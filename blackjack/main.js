let start = document.getElementById('start');

start.addEventListener('click', function () {
    let scr = document.getElementById('game-update');
    let dealerCards = getStartingCards();
    dealerCards.forEach(function (c) {
        scr.innerHTML += '<br>' + c.value + ' of ' + c.suit;
    });


});