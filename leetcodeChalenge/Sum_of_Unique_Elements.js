let nums1 = [1, 2, 3, 2];
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let countMap = {};

  // Menghitung frekuensi setiap elemen
  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1; // jika belum ada set 0 jika ada tambahkan dengan 1
  }
  //    memfilter nums berdasarkan obejct countMap dengan mengakses keynya dan mengecek apakah value dari key tersebut sama dengan 1
  let filteredCount = nums.filter((num) => countMap[num] === 1);
  //   menjumlahkan semua element array
  let resultReducedCount = filteredCount.reduce((prev, curr) => prev + curr, 0);

  return resultReducedCount;
};

console.info(sumOfUnique(nums1));
