//Write a function that takes in a number and returns an array of the fibonacci sequence the length of that input number
// fib(1) => [0]
// fib(2) => [0, 1]
// fib(3) => [0, 1, 1]
// fib(4) => [0, 1, 1, 2]
// fib(5) => [0, 1, 1, 2, 3]

function fib(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return fib(n - 1).concat([fib(n - 1)[n - 3] + fib(n - 1)[n - 2]]);
}

console.log(fib(8));
