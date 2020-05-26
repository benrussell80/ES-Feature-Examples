// map method of Array
// Similar to list comprehension from Python
// Iterate over a list a call a function with each value
let myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myDataSquared = myData.map(
  (element) => element ** 2
)

console.log(myData);
console.log(myDataSquared);

// Need the index?
let everyOtherValueSquared = myData.map(
  (element, index) => {
    if (index % 2 === 0) {
      return element
    } else {
      return element ** 2
    }
  }
)