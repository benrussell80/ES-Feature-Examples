// Promises and the fetch API
// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// Can take time because it needs to fetch an API, for example.
// The function I use most frequently is fetch
fetch(url)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(error);
})

// response object methods (.json() and .text())
fetch(url)
.then(response => response.json())  // for json
.then(json => {
  console.log(json.key);
})
// or
.then(response => response.text())  // for html/xml
.then(text => {
  console.log('substring' in text ? 'found it' : "can't find it");
})
.catch(error => {
  console.log(error);  // or do something better
})

// Promise.all for processing multiple promises
let urls = [
  'https://facebook.com',
  'https://amazon.com',
  'https://netflix.com',
  'https://google.com'
]

Promise.all(urls.map(
  (url) => fetch(url).then(response => response.text()).catch(error => 'individual error handling')
))
.then(responses => {
  for (let response of responses) {
    console.log((substring in response) ? 'found it' : "can't find it");
  }
})
.catch(error => 'handle errors from all.')
