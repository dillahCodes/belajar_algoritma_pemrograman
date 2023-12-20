/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums1 = [1, 2, 3, 4];
var runningSum = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(nums[i]);
    } else {
      result.push(result[i - 1] + nums[i]);
    }
  }

  return result;
};

console.log(runningSum(nums1));
