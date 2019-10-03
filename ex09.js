// https://nodejs.org/api/fs.html

const fs = require("fs");

let contents = fs.readFileSync("test.txt");

console.log("Contents:");
console.log(contents.toString());

const printer = (err, data) => {
    console.log(data.toString().toUpperCase());
}
// using a callback

fs.readFile("test.txt", printer);

console.log("-----------------------");
fs.readFile("test.txt", (err, data) => {
    console.log(data.toString());
});