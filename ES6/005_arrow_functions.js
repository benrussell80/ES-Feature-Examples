// Arrow functions
// No more bulky function(){ }s all over now it's just

function oldPrint(value) {
  console.log(value);
}

const newPrint = (value) => {
  console.log(value);
}

// With no values:
const now = () => {
  return new Date().toLocaleString();
}
// or the below if function does nothing but return a value
const rightNow = () => new Date().toLocaleString();

// With destructuring
const fooBar = ({ spam, eggs, ...rest }) => {
  console.log(spam);
  console.log(eggs);
  console.log(JSON.stringify(rest));
}

// Why is this better? Callbacks look neater (see map, filter, reduce)