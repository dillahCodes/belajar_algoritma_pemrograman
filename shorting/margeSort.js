import measureAlgorithm from "./peformance/testing.js";

function mergeSort(array) {
  if (array.length <= 1) return array; // kondisi yang mengharuskan rekursif berhenti

  const pertengahan = Math.floor(array.length / 2); // pertengahan
  const arrayKiri = array.slice(0, pertengahan); // arrayKiri
  const arrayKanan = array.slice(pertengahan); // arrayKanan

  const arrayKiriTerurut = mergeSort(arrayKiri); // rekursif
  const arrayKananTerurut = mergeSort(arrayKanan); // rekursif

  return merge(arrayKiriTerurut, arrayKananTerurut); // ini akan di jalankan ketika rekursif selesai di jalankan dan array.length <= 1
}

function merge(arrayKiri, arrayKanan) {
  let resultSorted = [];

  while (arrayKiri.length > 0 && arrayKanan.length > 0) {
    if (arrayKiri[0] < arrayKanan[0]) {
      resultSorted.push(arrayKiri.shift());
    } else {
      resultSorted.push(arrayKanan.shift());
    }
  }
  return [...resultSorted, ...arrayKiri, ...arrayKanan];
}

let arr1 = [1, 6, 8, 4, 2, 9, 17, 12];
console.log(mergeSort(arr1));
measureAlgorithm(mergeSort, arr1);
