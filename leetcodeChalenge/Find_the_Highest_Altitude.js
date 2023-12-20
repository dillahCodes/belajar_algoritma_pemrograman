/**
 * @param {number[]} gain
 * @return {number}
 */

let gain1 = [-5, 1, 5, 0, -7];
var largestAltitude = function (gain) {
  let result = [];
  let currentAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    if (currentAltitude === 0) {
      result.push(currentAltitude);
    }
    currentAltitude += gain[i];
    result.push(currentAltitude);
  }
  let sortedAltitude = result.sort((a, b) => a - b);

  return sortedAltitude.pop();
};

console.info(largestAltitude(gain1));
