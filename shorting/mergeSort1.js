import measureAlgorithm from "./peformance/testing.js";

const mergeSort = (array) => {
  function sort(array) {
    if (array.length <= 1) return array; // kondisi rekursif berhenti

    let middle = Math.floor(array.length / 2);
    let arrayLeft = array.slice(0, middle);
    let arrayRight = array.slice(middle);

    let arrayLeftSort = sort(arrayLeft);
    let arrayRightSort = sort(arrayRight);

    return merge(arrayLeftSort, arrayRightSort);
  }

  function merge(arrLeft, arrRight) {
    let resultMerged = [];

    while (arrLeft.length > 0 && arrRight.length > 0) {
      arrLeft[0] < arrRight[0]
        ? resultMerged.push(arrLeft.shift())
        : resultMerged.push(arrRight.shift());
    }
    return resultMerged.concat(arrLeft, arrRight); // gabungkan array sisa
  }

  return sort(array); // jalankan rekursif
};

let arr1 = [1, 6, 8, 4, 0, 2, 9, 17, 12, -1];
console.log(mergeSort(arr1));
measureAlgorithm(mergeSort, arr1);
