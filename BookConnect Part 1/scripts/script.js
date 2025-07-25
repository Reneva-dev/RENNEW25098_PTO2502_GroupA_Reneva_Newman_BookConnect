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
let x = "second";
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
const y = 7;
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
