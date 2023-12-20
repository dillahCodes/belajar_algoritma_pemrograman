const arrayToSort = [4, 2, 7, 1, 9, 3];

function insertionSort(arr) {
  const length = arr.length;

  for (let currentIndex = 1; currentIndex < length; currentIndex++) {
    const currentElement = arr[currentIndex];
    let previousIndex = currentIndex - 1;

    // Pindahkan elemen-elemen yang lebih besar dari currentElement
    // ke posisi satu langkah di depan dari posisi saat ini
    while (previousIndex >= 0 && arr[previousIndex] > currentElement) {
      arr[previousIndex + 1] = arr[previousIndex];
      previousIndex = previousIndex - 1;
    }

    // Tempatkan currentElement pada posisi yang tepat dalam array yang diurutkan
    arr[previousIndex + 1] = currentElement;
  }

  return arr;
}

// Contoh penggunaan
console.log("Array sebelum diurutkan:", arrayToSort);
const sortedArray = insertionSort(arrayToSort);
console.log("Array setelah diurutkan:", sortedArray);
