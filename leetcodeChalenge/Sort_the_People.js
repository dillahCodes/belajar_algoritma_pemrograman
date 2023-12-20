/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
let names1 = ["Mary", "John", "Emma"];
let heights1 = [180, 165, 170];
var sortPeople = function (names, heights) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] < heights[i + 1]) {
        [heights[i], heights[i + 1]] = [heights[i + 1], heights[i]];
        [names[i], names[i + 1]] = [names[i + 1], names[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return names;
};

console.log(sortPeople(names1, heights1));
