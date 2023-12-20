function fibonacci(n, result = []) {
  if (result.length === n) return result;

  if (result.length === 0) {
    result.push(0);
  } else if (result.length === 1) {
    result.push(1);
  } else {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }

  return fibonacci(n, result);
}

console.log(fibonacci(10));
