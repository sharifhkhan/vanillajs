/*
* Problem Source: https://leetcode.com/problems/two-sum/
*/

// Lessons Learned: 
//     - Reminder to use hash tables for faster lookups.
//     - Object hasOwnProperty() is faster than Map() has()

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// initial solution
var twoSum = function (nums, target) {
    let index1 = 0, index2 = 0;
    for (let i = 0; i < nums.length; i++) {
        let delta = target - nums[i];

        if ((index2 = nums.indexOf(delta, i + 1)) === -1) {
            continue;
        } else {
            index1 = i;
            break;
        }
    }
    return [index1, index2];
};

// fastest
var twoSumOptimized = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
};

// my version using Map() is slower :(
var twoSumOptimized2 = function (nums, target) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const delta = target - nums[i];
        if (map.has(delta)) {
            return [map.get(delta), i];
        }

        map.set(nums[i], i);
    }
};