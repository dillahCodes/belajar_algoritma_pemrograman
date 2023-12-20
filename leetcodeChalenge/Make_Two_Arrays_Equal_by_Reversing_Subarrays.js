/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
let target1 = [1, 2, 2, 3];
let arr1 = [1, 2, 2, 3];
var canBeEqual = function (target, arr) {
  let targetShorted = target.sort((a, b) => a - b);
  let arrShorted = arr.sort((a, b) => a - b);
  let result;
  for (let i = 0; i < targetShorted.length; i++) {
    if (targetShorted[i] === arrShorted[i]) {
      result = true;
    } else {
      return false;
    }
  }

  return result;
};

console.info(canBeEqual(target1, arr1));
