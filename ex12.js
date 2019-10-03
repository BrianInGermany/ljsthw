//exercise 12: Functions Files Variables
const fs = require('fs');
console.log("Start of script");
// anonymous function that takes two parameters and 
// prints the stringified version of the second parameter
const print_lines = (err, data) => {
    if (err) {
        console.log("Err in file read")
    }
    else{
        console.log(data.toString());
    }
}

// anonymous function with one parameter 
//returns an upper case version of it
const yell_at_me = (what) => {
    return what.toUpperCase();
}

//pass filename, callback function print_lines
//first do stuff with the filepath
//then execute print_lines with some variables 
//which result from opening the file
fs.readFile("poem.txt", print_lines);

// let's do that again but with an anonymous function
// first do stuff with the filepath
// then use the anonymous function with variables from
// the text file
// in the anonymous function, run yell_at_me function
// then run run the print_lines with the err from the file and yell
fs.readFile("poem.txt", (err, data) => {
    let yelling = yell_at_me(data.toString());
    print_lines(err, yelling);
});
