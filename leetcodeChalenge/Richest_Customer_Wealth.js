/**
 * @param {number[][]} accounts
 * @return {number}
 */

let accounts1 = [
  [1, 2, 3],
  [3, 2, 1],
];
var maximumWealth = function (accounts) {
  let result = [];
  for (let i = 0; i < accounts.length; i++) {
    let currArry = accounts[i];
    result.push(currArry.reduce((prev, currArry) => prev + currArry));
  }

  let higherValue = result[0];
  for (let i = 0; i < result.length; i++) {
    if (result[i] > higherValue) {
      higherValue = result[i];
    }
  }
  return higherValue;
};

console.log(maximumWealth(accounts1));
