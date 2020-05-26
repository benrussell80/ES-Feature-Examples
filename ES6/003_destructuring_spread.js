// Destructuring
// Assign variables by unpacking values from an Object or Array

let numbers = [1e6, 1e9, 1e12];
let [million, billion, trillion] = numbers;

let data = {
  age: 24,
  name: 'Ben',
  occupation: 'Systems Analyst',
  company: 'Cal-Am'
}
let { age: myAge, name: myName, occupation: myOccupation, company: myCompany } = data;

// easier way
let { age, name, occupation, company } = data;

// get as much or as little as you want
function snoop({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}
snoop(data);

// catch anything you didn't expect (kwargs in Python)
function reallySnoop({ name, age, ...rest }) {
  console.log(`${name} is ${age} years old, and we know these things: ${JSON.stringify(rest, null, 2)}.`);
}
reallySnoop(data);