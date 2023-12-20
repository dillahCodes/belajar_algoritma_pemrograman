function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0; // Empty array, no duplicates to remove
  }

  let uniqueCount = 1; // At least one unique element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
}

// Example usage and test case
let nums = [1, 1, 2];
let expectedNums = [1, 2, 3, 4, 5];

let k = removeDuplicates(nums);

console.log(`Unique elements count: ${k}`);
