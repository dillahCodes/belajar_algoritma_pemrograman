/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums1 = [
  48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77,
  15, 38,
];
let target1 = 6;
var targetIndices = function (nums, target) {
  let result = [];
  let sorted = nums.sort((a, b) => a - b);

  // periksa apakah array dengan index saat ini
  // sama dengan target
  // jika iya masukan i saat ini ke variable result
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      result.push(i);
    }
  }

  return result;
};

console.log(targetIndices(nums1, target1));
