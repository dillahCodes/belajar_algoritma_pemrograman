const fibonacci = (n, result = []) => {
  if (result.length >= n) return result;

  if (result.length === 0) {
    result.push(n);
  } else if (result.length === 1) {
    const nextFibNum = result[0] + result[0] - 1;
    result.push(nextFibNum);
  } else {
    const nextFibNum = result[result.length - 1] + result[result.length - 2];
    result.push(nextFibNum);
  }

  return fibonacci(n, result);
};

// Contoh penggunaan
console.log(fibonacci(10));
