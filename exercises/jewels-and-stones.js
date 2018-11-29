/*
* Problem Source: https://leetcode.com/problems/jewels-and-stones/
*/

// Initial approach to solution:
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let jewels = 0;

    // double-loop
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < J.length; j++) {
            if (S[i] === J[j]) {
                jewels++;
            }
        }
    }

    return jewels;
};

// using javascript includes
var numJewelsOptimzed = function (J, S) {
    let jewels = 0;
   
    for (const s of S) { // this can be a traditional for loop with no additional impact
        if (J.includes(s)) {
            jewels += 1;
        }
    }

    return jewels;
};


// DOM workflow
let counter = document.getElementById('count');

counter.addEventListener('click', function () {
    let jewels = numJewelsInStones(document.getElementById('jewels').value,
        document.getElementById('stones').value);

    let jeweloptimzed = numJewelsOptimzed(document.getElementById('jewels').value,
        document.getElementById('stones').value);

    document.getElementById('result').innerHTML += 'There are ' + jewels + ' jewels. <br />';

    document.getElementById('result').innerHTML += 'There are ' + jeweloptimzed + ' jewels (optimized). <br />';
});