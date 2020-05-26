// I am not an expert in these yet but they exist and people like them

// async function foo() {  // or
const foo = async () => {
  return await Promise.all([
    // array of fetches to wait upon
  ])
  .then(responses => {
    for (let response of responses) {
      // do something with each of the responses
    }
  })
  .catch(error => {
    // do something with the error(s)
  });
}

foo();
console.log('This will print before the above.');

// await must be used in an async function