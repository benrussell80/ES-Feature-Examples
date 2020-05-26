// classes
// Classes in JS are here (and it's actually just prototypal inheritance)

// To define a class use the constructor function (__init__ in Python)
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.printAll = this.printAll.bind(this);  // this is gross but necessary
    this.print = this.print.bind(this);
  }

  printAll() {
    this.print();
    if (this.next !== null && this.next instanceof Node) {
      this.next.printAll();
    }
  }

  print() {
    console.log(this.value);
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

node1.printAll();

// Inheritance uses 'extends' keyword and you can only extend one class
// because an object can only have one prototype
// Let's build a new array with some convenience methods
class BetterArray extends Array {
  constructor(...inputs) {
    super(...inputs)
    this.last = this.last.bind(this);
    this.sum = this.sum.bind(this);
  }
  
  last() {
    if (this.length === 0) {
      return undefined
    } else {
      return this[this.length-1]
    }
  }

  sum = () => this.reduce((acc, val) => acc + val)
}

let myArray = new BetterArray(1, 2, 3, 4, 5, 6);

console.log(myArray instanceof Array);

console.log(JSON.stringify(myArray));

console.log(myArray.last());

console.log(myArray.sum());
