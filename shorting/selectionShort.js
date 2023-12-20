const array1 = [4, 2, 7, 1, 9, -9];

const selectionShort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let indeksTerkecil = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indeksTerkecil]) {
        indeksTerkecil = j;
      }
    }

    [array[i], array[indeksTerkecil]] = [array[indeksTerkecil], array[i]];
  }
  return array;
};

console.log(selectionShort(array1));
