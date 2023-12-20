/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

// Contoh penggunaan
const gen = fibGenerator();
console.log(gen.next().value); // Output: 0
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
// ... dan seterusnya
