/**
 * @param {number[]} nums
 * @return {boolean}
 */
let nums1 = [0, 4, 5, 0];
var containsDuplicate = function (nums) {
  // Membuat objek Set baru
  let set = new Set();

  // Melakukan iterasi melalui setiap elemen array
  for (let i = 0; i < nums.length; i++) {
    // Memeriksa apakah elemen sudah ada dalam Set
    if (set.has(nums[i])) {
      return true; // Jika ada elemen yang sama, kembalikan true
    }

    // Menambahkan elemen ke dalam Set
    set.add(nums[i]);
  }

  // Jika tidak ada elemen yang sama, kembalikan false
  return false;
};

console.log(containsDuplicate(nums1));
