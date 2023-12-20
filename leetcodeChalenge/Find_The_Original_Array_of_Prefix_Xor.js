/**
 * @param {number[]} pref
 * @return {number[]}
 */
let pref1 = [5, 2, 0, 3, 1];
var findArray = function (pref) {
  let result = [];

  if (pref.length === 1) {
    result.push(pref[0]);
  }
  for (let i = 0; i < pref.length - 1; i++) {
    if (i === 0) {
      result.push(pref[i]);
    }
    result.push(pref[i] ^ pref[i + 1]);
  }
  return result;
};

console.info(findArray(pref1));
