/**
 * @param {string[]} sentences
 * @return {number}
 */
let sentences1 = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
var mostWordsFound = function (sentences) {
  let resultMaxLength = sentences[0].split(" ").length;

  for (let i = 0; i < sentences.length; i++) {
    let currLength = sentences[i].split(" ").length;

    if (currLength > resultMaxLength) {
      resultMaxLength = currLength;
    }
  }

  return resultMaxLength;
};

console.info(mostWordsFound(sentences1));
