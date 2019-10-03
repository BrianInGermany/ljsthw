// Exercise 10: Files, args, variables
const readline = require('readline-sync');
const fs = require('fs');

let file_to_open = process.argv[2];
let file_contents = fs.readFileSync(file_to_open);


console.log(`This is argv[0]: ${process.argv[0]}.`);
console.log(`The file named ${file_to_open} contains:`);
console.log(file_contents.toString());

let name = readline.question("name an additional text file to open: \n");
const validatePath = (name) => {

}
if (fs.existsSync(name)) {
    console.log(`The file named ${name} contains:`);
    fs.readFile(name, (err, data) => {
        console.log(data.toString());
    })
   
}
else {
    console.log("No such file!")
}
