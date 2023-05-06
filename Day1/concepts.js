// Functions in Javascript
/*
    1) Normal syntax
    2) Anonymous functions
    3) Arrow functions
        3.1) Omit return in arrow functions
    4) IIFE
*/

// High order functions
/*
    1) Functions inside functions
        -> Taking function as an argument or returning a func
*/

// closure

// Normal syntax

function print() {
  console.log("Hello Everyone");
}

print();

var sum = function (a, b) {
  return a + b;
};

var total = sum(1, 2);
console.log(total);

// arrow function

const sum2 = (a, b) => {
  return a + b;
};

console.log("printed by arrow function", sum2(1, 2));

const sum3 = (a, b) => a + b;
console.log("printed by omit return arrow function", sum3(1, 2));

// Immediately invoked function expressions

const total2 = (function (a, b) {
    return a + b;
  })(2, 5);

  console.log(total2);


  // High order functions



function printIntroduction(getName) {
    
    console.log('My name is ', getName());
};

function getName() {
    return 'Abhinandan';
}

printIntroduction(getName);


// closure
function add(a) {
    function addB(b) {
        // a is not present in scope of addB
        return a+b;
    }
    
    return addB;
};

const addA = add(4);

console.log(addA);

console.log(addA(3));