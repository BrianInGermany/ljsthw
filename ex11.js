const printPerson = (name, age) => {
    console.log(`HI ${name}, you are ${age} years old.`);
}

printPerson('Zed', 44);
printPerson('Fran', 100);
printPerson('Alex', 30);
printPerson('Eve', 35);

console.log('-----------------------pets-----------------');
const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who ist ${pet_age} years old.`);
}

printPet('Zed', 44, 'Mr. Scruffles', 10);
printPet('Fran', 100, 'Crazy', 2);
printPet('Alex', 30, 'Lizzy Lizzard', 1);
printPet('Eve', 35, 'Kong the Donkey', 20);

// this part is tough! Brain melting! give it a try

console.log('---------------callback style---------------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    cb(owner_name, owner_age);
    console.log(`THat person onws ${pet_name} who is ${pet_age} years old.`);
}

// notice how I use a function here as the parameter cb?

fancyPet('Zed', 44, 'Mr. Scruffles', 10, (name, age) => {
    console.log(`Oooh fancy ${name} you are ${age} old.`);
})