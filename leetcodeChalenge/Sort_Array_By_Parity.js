function moveEvenAndOdd(nums) {
  let left = 0; // Pointer for even numbers
  let right = nums.length - 1; // Pointer for odd numbers

  while (left < right) {
    while (nums[left] % 2 === 0 && left < right) {
      left++;
    }

    while (nums[right] % 2 === 1 && left < right) {
      right--;
    }

    if (left < right) {
      // Swap even and odd numbers
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return nums;
}

// Example 1:
let nums1 = [3, 1, 2, 4];
console.log(moveEvenAndOdd(nums1)); // Output: [2, 4, 3, 1]

// Example 2:
let nums2 = [0];
console.log(moveEvenAndOdd(nums2)); // Output: [0]
