/**
 * @param {number[]} nums
 * @return {number[]}
 */
let arr = [1, 2, 1];
var getConcatenation = function (nums) {
  return [...Array.from(nums), ...nums];
};

console.info(getConcatenation(arr));
