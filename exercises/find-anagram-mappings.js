/*
* Problem Source: https://leetcode.com/problems/find-anagram-mappings/
*/

// Lessons Learned: map/reduce and multiple loops are slower than this implementation

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function (A, B) {
    const result = [];

    for (const a of A) {
        result.push(B.indexOf(a));
    }

    return result;
};

anagramMappings();