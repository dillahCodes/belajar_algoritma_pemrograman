/**
 * @param {string} s
 * @return {number}
 */
let string1 = "   fly me   to   the moon  ";
var lengthOfLastWord = function (s) {
  let array = Array.from(s.trim().split(" "));
  return array.pop().length;
};

console.info(lengthOfLastWord(string1));
