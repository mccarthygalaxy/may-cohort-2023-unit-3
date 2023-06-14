/* 
!   Arrays
    - Denoted with Square Brackets [ ]
    - Indices start at zero
*/

let list = [ 'milk', 'bread', 'chicken', 'coffee' ];
//             (0)      (1)      (2)         (3)

console.log(list[2]);
list[0] = 'chocolate milk';
console.log(list);

let heroes = ["Spider-Man", "Storm", "Prof. X"]

let avengers = [
    "Nick", 2, false, "Steve", "Bruce",
    ["Tony", 8, true], heroes
];

// console.log(avengers);
// console.log(typeof avengers);
// console.log(avengers instanceof Array);

/*
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

console.log(avengers[4]);
console.log(avengers[5][2]);
// let avengersArray = avengers[5];
// console.log(avengersArray[2]);
console.log(`Hello, ${avengers[0]}.`);
console.log(`Hello, ${avengers[5][0]}.`);

console.log(typeof avengers[5][2]);

//! Methods

//* .push() - ADDS our value to the END of the array
let food = [
    'Pecan Pie', "Shrimp", "Quesadilla", "Cheese Cake", "Hot Dog"
];

for(item of food) {     // FOR OF loop
    console.log(item);
}

food.push('pizza');
console.log(`Push: ${food}`);

//* .splice() - can REMOVE and/or INSERT at specific locations.
// takes in 3 requirements - .splice(position, number to remove, new info)
food.splice(1, 1, "Tacos")
console.log(`Splice 1: ${food}`);

food.splice(1, 0, "Steak");
console.log(`Splice 2: ${food}`);

//* .pop() - REMOVE the LAST item from the END of the array
food.pop();
console.log(`Pop: ${food}`);

//* .shift() - REMOVES the FIRST element in an array
food.shift();
console.log(`Shift: ${food}`);

//* .unshift() - ADD new value to the beginning of the array
food.unshift("Hamburger", "Salad");
console.log(`unshift: ${food}`);

//* .length - Returns a numeric value of HOW MANY items are IN the array
let count = [0,1,2,3,4,5,6,7,8,9];
console.log(count.length);
console.log(count[9]);
console.log(count[count.length - 1]);


//! Iteration Methods
/* 
    .filter() & .includes()
    - does not destroy the original array (mutate)
    - stores the filter array in a new variable
    - takes a callback function that returns either true/false
    - loops through an array
    - MUST have a RETURN
*/

let fruits = ['apple','pear','mango','orange','pineapple'];

// How can I use filter to remove the mango?
// const filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango';
//     console.log(result);
//     return result; 
// });

let fruitExample = fruit => {
    let result = fruit !== 'mango';
    console.log(result); // is a true/false value
    return result; 
}

const filteredFruit = fruits.filter(fruitExample);

console.log(filteredFruit);

let newArray = [1,2,3,4];
let even = newArray.filter(evenFunction);

function evenFunction(num) {
    let evenNumber = num % 2 == 0;
    return evenNumber;
}

console.log(even);

let fruits2 = ['apple','pear','mango','orange','pineapple'];
// remove any fruit that has the word "apple" in it?

let checkFruit = "pineapple";
console.log(checkFruit.includes("apple")); // return boolean

const filterNewFruits = fruits2.filter(fruit => !fruit.includes('apple'));
console.log(filterNewFruits);

// Another example: 

let people = ['Bob','Jane','Jack','Barbara','Ruby'];
const checkNames = people.filter(n => n.includes("B"));
const checkNames2 = people.filter(n => n.includes("B" && "o"));

console.log(checkNames);
console.log(checkNames2);

// .forEach()
/* 
    - It runs three arguments
        - The Value
        - The Index
        - The array object itself
*/

let items = [ 'a','b','c','d'];

// for(let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

items.forEach(item => console.log("For Each", item));

// same as using 'x' instead of 'item':
items.forEach(x => console.log("For Each", x));
items.forEach((x,i) => console.log("ForEach: ", x, i));


// .find()
/* 
    .find((parameter, index) => {code block})
        - index: is optional
        - parameter is a string
*/    

let tmnt = [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log("Find: ", tmnt.find(c => c == character));

character = 'April';
console.log("Find: ", tmnt.find(c => c == character));

character = 'Splinter';
// console.log("Find: ", tmnt.find((c,i) => c == character));
tmnt.find((c,i) => console.log(c == character, "index: ", i));

let leader = tmnt.find((c,i) =>{
    if(c == character) {
        return tmnt[i]
    }
});

console.log('Leader: ', leader);

//* .map()
// returns a new array unlike .forEach which does not
// .map((parameter, index) => {code block})
//      - index: is optional
//      - parameter is a string

/* 
    - cycle (iterates) through an array of items and readjust how we would like it to display.
*/

let numArray = [];
let fizzBuzzArray = [];

for(let i= 1; i < 101; i++) numArray.push(i);
// console.log(numArray);

numArray.map(x => {
    if(x % 15 === 0) // if this is true, then:
    fizzBuzzArray.push(x);
});

console.log(fizzBuzzArray);

//! Destructuring, Spread, and Rest
const fullName = ["Jane", "Doe"];
// const firstName = fullName[0];
// const lastName = fullName[1];
// console.log(`${firstName} ${lastName}`);

const [firstName,lastName] = fullName;
console.log(`After Destructure: ${firstName} ${lastName}`);
/* 
    - pulls the values from the variable array
        const fullName
    - stores based off their original position
        - [ one, two ]
        - [ "Jane",  "Doe"]
*/

//? Spread Operator
/* 
    denoted with "..."
    - pulls out all elements of an array and gives them to you as a standalone list of elements
*/

const copiedFullName = [...fullName];
console.log('Spread:', copiedFullName);
const copiedFullName2 = [fullName]; // nests an array within this array
console.log('Not Spread: ', copiedFullName2);
console.log(copiedFullName[0]); // Jane

fullName.push("Mrs.");
console.log('Original: ', fullName, "Spread:", copiedFullName);

//* with Numbers
console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); // NaN - need to pass numbers, not an array
console.log(Math.min(...prices)) // pulls each value out of the array

// Anytime that you are working with a function / method that requires standalone values, spread operator helps get these values out of an array.

//? Rest Operator
const newFullName = [
    'Jane', 'Doe', 'Mrs.', { month: 3, date: 22, year: 1973}
];

const [ fName, lName, ...otherInfo ] = newFullName;
console.log(fName);
console.log(lName);
console.log(otherInfo);
newFullName.push('testOne', 2, false, true);
let [first, last, , , , ...testData ] = newFullName;
console.log(first, last, testData);
// MUST be the last element

console.log(first);
first = "Jack";
console.log(first);
console.log(fName); // completely different variable still

// another example:
const veggies = [ 'potato', 'lettuce', 'onion', 'leeks'];
const [plant1,, ...otherPlants] = veggies;
console.log(plant1, otherPlants);
console.log(otherPlants[1]);
otherPlants.push('lettuce');
console.log(otherPlants);
console.log(veggies);