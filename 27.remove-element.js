/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0;
    for (var n = 0; n < nums.length; n++) {
        if (nums[n] != val) {
            nums[count] = nums[n];
            count++;
        }
    }
    return count;
};
// @lc code=end

