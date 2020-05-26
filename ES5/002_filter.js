// filter method of Array
// Similar to Python's built-in filter function but returns an array not an iterator
let myPeople = ['Alice', 'Angel', 'Ben', 'Brent', 'Cameron', 'Crystal'];

// return value should be a boolean
let namesStartingWithA = myPeople.filter(
  (name) => name[0] === 'A'
);

console.log(namesStartingWithA);
