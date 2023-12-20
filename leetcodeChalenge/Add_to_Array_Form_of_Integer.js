/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
let array1 = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];
let k1 = 516;
var addToArrayForm = function (num, k) {
  let arrayToString = num.join("");
  let number = BigInt(arrayToString) + BigInt(k);

  return Array.from(String(number), Number);
};

console.info(addToArrayForm(array1, k1));
