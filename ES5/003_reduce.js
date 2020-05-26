// reduce method of Array
// similar to Python's functools.reduce function
// apply a function serially to values in an array
// and accumulate the result

let myNumbers = [1, 2, 3, 4];

let totalProduct = myNumbers.reduce(
  (accumulator, current) => accumulator * current
)

console.log(totalProduct);  // should be 24

// Optionally, you can start with an initial accumulation value
let totalProductTimesFive = myNumbers.reduce(
  (accumulator, current) => accumulator * current,
  5
)

console.log(totalProductTimesFive);  // should be 120
