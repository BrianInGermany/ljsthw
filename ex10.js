// Exercise 10: Files, args, variables
const readline = require('readline-sync');
const fs = require('fs');

let file_to_open = process.argv[2];
let file_contents = fs.readFileSync(file_to_open);


console.log(`This is argv[0]: ${process.argv[0]}.`);
console.log(`The file named ${file_to_open} contains:`);
console.log(file_contents.toString());

let name = readline.question("name an additional text file to open: \n");
if (fs.existsSync(name)) {
    let file_two_contents = fs.readFileSync(name);
    console.log(`The file named ${name} contains:`);
    console.log(file_two_contents.toString());
}
else {
    console.log("No such file!")
}
