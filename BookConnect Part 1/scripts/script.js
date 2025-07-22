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
let first = (y < k) ? y : k
console.log(first) 7