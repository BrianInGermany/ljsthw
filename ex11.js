//create anonymous function:
// function takes parameters in parentheses
//function returns after running code in braces
const printPerson = (name, age) => {
    console.log(`HI ${name}, you are ${age} years old.`);
}
// execute anonymous function
printPerson('Zed', 44);
printPerson('Fran', 100);
printPerson('Alex', 30);
printPerson('Eve', 35);

console.log('-----------------------pets-----------------');
//create anonymous function with four parameters.
const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    //run this before returning:
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who ist ${pet_age} years old.`);
}
// execute multiple lines of the function:
printPet('Zed', 44, 'Mr. Scruffles', 10);
printPet('Fran', 100, 'Crazy', 2);
printPet('Alex', 30, 'Lizzy Lizzard', 1);
printPet('Eve', 35, 'Kong the Donkey', 20);

// this part is tough! Brain-melting! give it a try

console.log('---------------callback style---------------');

// create anonymous function with five parameters
const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    // the cb parameter must be a function with two parameters:
    cb(owner_name, owner_age);
    // 
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

// notice how I use a function here as the parameter cb?
// execute function, using an anonymous function as final parameter
fancyPet('Zed', 44, 'Mr. Scruffles', 10, (name, age) => {
    console.log(`Oooh fancy ${name} you are ${age} years old.`);
})

