// JSON.parse and JSON.stringify
// Similar to Python's json.loads and json.dumps
let jsonString = '{"hello": "world"}';
let json = JSON.parse(jsonString);
console.log(json.hello);

// great for pretty printing objects and arrays
let myData = {
  hello: 'world',
  foo: [
    'bar',
    'baz'
  ],
  spam: {
    eggs: 'macaroni'
  }
}
console.log(JSON.stringify(myData));
console.log(JSON.stringify(myData, null, 2));  // with spacing
