// for ... of ...
// for ... in ... gets the keys of an object/array, for ... of get the values
let animals = ['dog', 'cat', 'cow', 'pig'];

for (let animal of animals) {
  console.log(animal);
}

// best thing to use it for: Object.entries() (ES8)
// similar to dict.items() in Python

let animalSounds = {
  dog: 'woof',
  cat: 'meow',
  cow: 'moo',
  pig: 'oink'
}

for (let [animal, sound] of Object.entries(animalSounds)) {  // destructuring
  console.log(`The ${animal} goes ${sound}.`);
}