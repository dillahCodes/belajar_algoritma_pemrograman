import measureAlgorithm from "./peformance/testing.js";

const arr1 = [2, 3, 0, 1, 2, -1];
let arr2 = [1, 5, 6, 7, 8, 3, 4, 5, 7, 9, 9, 2];

const bubbleSort = (array) => {
  let tukarTempat;

  do {
    tukarTempat = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        tukarTempat = true;
        // setiap kondisi swap antaraa 2 elements array terpenuhi  maka variable tukarTempat
        //  akan true jadi otomatis setelah forloop di jalankan ia akan menjakankan do while lagi
      }
    }
  } while (tukarTempat);
  return array;
};

console.log(bubbleSort(arr2));
measureAlgorithm(bubbleSort, arr2);
// penjelasan
// 1. do while jenis looping ini akan menjalankan dahulu tugas baru ia akan mengecek kondisi jika kondisi = true maka do while akan di jalankan lagi
// 2. loopig di dalam do while atau for loop akan mengecek dahulu kondisi jika true maka tugas akan di jalankan
// 3. pada looping for loop harus dikurangi 1 karena itu mencegah looping membandingkan element terakhir pada array dengan element lanjutannya atau [index + 1]
// 4. penjelasan algoritma:
/*
algoritma bubble short adalah sebuah alagoritma shorting dasar yakni membandingkan element saat ini dengan element selanjutnya  untuk di shorting atau 
index (aturan shorting) index + 1
*/
// 5. visualisasi algortima:
/*  
putaran forloop pertama
[2,3,0,1,2,-1]
[2,0,3,1,2,-1]
[2,0,1,3,2,-1]
[2,0,1,2,3,-1]
[2,0,1,2,-1,3]
putaran forloop kedua
[0,2,1,2,-1,3]
[0,1,2,2,-1,3]
[0,1,2,-1,2,3]
putaran forloop ketiga
[0,1,2,-1,2,3]
[0,1,-1,2,2,3]
putaran forloop keempat
[0,1,-1,2,2,3]
[0,-1,1,2,2,3]
putaran forloop kelima
[0,-1,1,2,2,3]
[-1,0,1,2,2,3]
 */
