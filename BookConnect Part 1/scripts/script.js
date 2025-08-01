//Expressions and Statements
let count = 5; //let count = is a statement which is used to define
               //a variable named 'count' while '5' is an expression. 

//Examples od expression
5 * 5;
5 < 15;
false;

{
//Conditional and Logical Operators
let x = 10;
if (x > 6) {
    console.log("This did run")
}
//Otherwise continue 

//Conditional Operators
console.log (x == "10"); true 
console.log (x === "10");  false
console.log (x !== "10"); true 
console.log (x > 6); true
console.log (x < 6); false
console.log (x >= 10); true
console.log (x <= 10); true

//Sometimes we may want to perform more complex conditional logic
//This is where Logical Operatord come in

//Logical Operators
console.log(true && true); true
console.log(true || false); true
console.log(!false); true

//Comparing Different Types
//When comparing a string with a number, Javascript will 
//convert the string to a number when doing the comparison. 
//An empty string converts to 0. A non-numeric string converts 
//to NaN which is always false
console.log(5 > ""); true
console.log(5 > "Code"); false
console.log("5" > "6"); false 
console.log("5" < "6"); true

//Conditional Logic Continued
let y = 5;
if(y > 6){
    console.log("We wanted to do this")
}
else {
    console.log("We did this instead")
}

}
{
//More conditional statements
let x = "second";
if(x === "third"){
    console.log("this line ran")
}
else if (x === "second") {
    console.log ("this line ran")
}
else if (x ==="first") {
    console.log ("this line ran")
}

}

//More conditional statements
let x1 = "second";
if(x === "third"){
    console.log("this line ran")
}

else if (x === "second") {
    console.log("this line ran")
}

else if (x === "first") {
    console.log("this line ran")
}

else {
    console.log("this line ran")
}

//Ternary Operator - A shorthand if statement
const k = 10;
const y1 = 7;
let first = (y > k) ? y : k
console.log(first);  10

//Switch Statement 
let page = "home"

switch(page){
    case "home": {
        console.log("homepage")
        break
    }
    case "about": {
        console.log("aboutpage")
        break
    }
    case "contact": {
        console.log("contactpage")
        break
    }
}

//Loops
let num = 0

for(let x=0; x < 5; x++){
    num = num + 1
}

console.log(num); 5

while(true){
    console.log("Infinite Loop")
}

let q = 0
while(q < 5){
    console.log("While Loop")
    q++
}

let h = 10
do {
    console.log("Always runs once")
} while(h > 20)

//Break Statement
for(let x=0;x<1000;x++){
    if(x === 5){
        break
    }
    console.log(x); 0, 1, 2, 3, 4
}

//Continue statement
for(let x=0;x<10;x++){
    if(x === 5){
        continue
    }
    console.log(x); 0, 1, 2, 3, 4, 6, 7, 8, 9
}

//Arrays are compound data types

const arr = [1, 2, 3]

//Add an element to the end of an array
arr.push("Hello");
console.log(arr); [ 1, 2, 3 ]

//Remove an element from the end 
arr.pop();
console.group(arr); [ 1, 2, 3]

//Add an element to the start of an array
arr.unshift("Hello");
console.log(arr); ['Hello', 1, 2, 3]

//Remove an element from the start
arr.shift();
console.log(arr); [ 1, 2, 3 ]

//Concatenate (join together) 2 or more arrays
const arr2a = [ 4, 5, 6 ];
let arr3a = arr.concat(arr2);
console.log(arr3); Array (6) [ 1, 2, 3, 4, 5, 6 ]

//Concat 3 arrays
const arr4a = arr.concat(arr2, arr3);
console.log(arr4); Array(12) [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

//Get the length of an array
console.log(arr3.length); 6

//Flatten Array
const multiArr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(multiArr.flat()); Array (6) [ 1, 2, 3, 4, 5, 6]

//Slice array to get part
console.log(arr4.slice(4)); //Sliced from the 5th element  
Array(8) [ 5, 6, 1, 2, 3, 4, 5, 6]

//Looping though arrays 
let arr1a = [ 1, 2, 3, 4];

//forEach method
arr.forEach((element) => {
    console.log(element); 1, 2, 3, 4
});

//mapmethod runs 1 time for each, return is a
//new array with values mapped from original array
const newArray = arr.map((element) => {
    return element + 5;
});

console.log(newArray); [ 6, 7, 8, 9 ]

//Accessing array members - Remember arrays are zero indexed 
console.log(arr[0]); 1
console.log(arr[2]); 5
console.log(arr[5]); undefined

//Objects are also compund data types but instead of storing only values
//They store key-value pairs 
let obj = {
    key1: "value1",
    key2: "value2",
    key3:"value3", 
    key4:"100",
    key5: [1, 2],
    key6: {
        subKey1: "subValue1",
    },
};

//Accessing object values
console.log(obj["key1"]); 'value1'
console.log(obj.newObj); { subKey1: 'subValue1' }

//Accessing all keys
console.log(Object.keys(obj)); Array(6) ['key1', 'key2', 'string', 'key4', 'newArr', 'newObj']

//Accessing all values
console.log(Object.values(obj)); Array(6) ['value1', 'value2', 'value3', '100', [ 1, 2 ], {subKey1: 'subValue1'}]

import { authors, genres, books } from "../data.mjs";

const bookConnectData = [authors, genres, books];
console.log(bookConnectData);

let authorsObject = bookConnectData[0]

let values = Object.values(authorsObject);
console.log(values);

const x = 5;
const y = 5;

console.log(x === y); true

const arr1 = [1, 2];
const arr2 = [1, 2];

console.log(arr1 === arr2); false

let z = x
console.log(z); 5 
z = z + 1
console.log(z); 6
console.log(x); 5

const arr3 = arr1;
arr3.push("hello");
console.log(arr1); [ 1, 2, 'hello']

//How to copy arr1
const arr4 = [...arr1];
arr4.push("goodbye");
console.log(arr1); [ 1, 2, 'hello']

//Multi-dimensional arrays 
const multiArray = [1, 2, 3, [1, 2, 3] ]
const arr5 = multiArray;
arr5[3].push("hello");
console.log(multiArray); [ 1, 2, 3, [ 1, 2, 3, 'hello'] ]

const arr6 = [...multiArray];
arr6[3].push("goodbye");
console.log(multiArray); [ 1, 2, 3 [1, 2, 3, 'hello', 'goodbye'] ]

//Deep Copy
const clone = JSON.parse(JSON.stringify(multiArray));
clone [3].push("GoodAfternoon");
console.log(multiArray); [ 1, 2, 3, [ 1, 2, 3, 'hello', 'goodbye'] ]

//Objects
const jobHours = {
    offuce: "9am-5pm",
    fisherman: "5am-9pm",
    DeptofHomeAffairs: "10am-4pm",
};

const {office, fisgerman, DeptofHomeAffairs } = jobHours;
console.log(DeptofHomeAffairs); '10am-4pm'

//Functions
function getUniqueId() {
    return new Date.now();
}

const createSchedule = (creator, workHours, leisureHours) => {
    return {
        id: getUniqueId(),
        creator: creator,
        workHours: workHours, 
        leisureHours: updateLeisureHours(leisureHours),
    };
};

const newSchedule = createSchedule("Che", "9am-5pm", "5pm-12pm")

console.log(newSchedule); {id: 1744281467441, creator; 'Che'; workHours: '9am-5pm'; leisureHours: '5pm-10pm'}

//Methods
function updateLeisureHours(leisureHours) {
    const newHours = "10pm";
    const updatedHours = leisureHours.slice(0, -4) + newHours;
    return updatedHours;
}
updateLeisureHours("8pm-10pm");

//Prototypes
String.prototype.replaceFrom = function (index, replacement) {
    return this.substring(0, index) + replacement;
    };

    let leisureHours = "5pm - 12pm";
    const newLeisureHours = leisureHours.replaceFrom(leisureHours.length - 4, "10pm");
    console.log(newLeisureHours); '5pm -10pm'


