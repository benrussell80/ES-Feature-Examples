// Difference between let and var

// 1. let has block scope, var does not

// var
for (var varI = 0; varI < 5; varI++){
  console.log('varI:', varI)
}
console.log('varI:', varI);  // i is accessible outside of the block

// let
for (let letI = 0; letI < 5; letI++){
  console.log('let letI:', letI);
}
// console.log(letI);  // i is not defined in this scope; ReferenceError

// 2. let-defined variables cannot be redefined
// var value = 'hello';
// var value = 'world';  // no error

// let value = 'hello';
// let value = 'world';  // SyntaxError


// const: method of defining read-only values (also only have block scope)
const myName = "Ben";
// myName = "Bun";  // TypeError

/* Note: 
      It does NOT define a constant value. It defines a constant reference to a value.
      Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.
      So, this will not make Arrays and Objects read-only
      for that use Object.freeze
*/

const myArray = ['Angel', 'Brent']
myArray.push('Ben');  // totally fine
console.log(myArray);

// myArray = ['Matt', 'Valerie'];  // totally not fine (because it would be referencing a new value); TypeError

Object.freeze(myArray);
// myArray.push('Billy');  // will not work; TypeError