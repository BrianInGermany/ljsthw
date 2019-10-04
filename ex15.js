const readline = require('readline-sync');
let x = "Not a number";
while (isNaN(x) != false){
    x = readline.question("Set the value of x: \n")
if (x === 10) {
    // first jump
    console.log("X equals 10");
 } else if (x < 10) {
    console.log("x is smaller than 10");
 } else {
    console.log("x is larger than 10");
 }
}