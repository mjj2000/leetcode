/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var numMap = {};
    var count = 0;
    for (var n = 0; n < nums.length; n++) {
        if (!numMap[nums[n]]) {
            nums[count] = nums[n];
            numMap[nums[n]] = true;
            count++;
        }
    }
    return count
};
// @lc code=end

