let fruit = ["apples", "oranges", "grapes"];
let inventory = [ ["Buick", 10], ["Corvette", 1], ["Toyota", 4]];

let pigments = ["perinone", "cadmium",
    "titanium", "ultramarine", "napthol"];

let i = 0;
// you've seen this already
while(i < pigments.length) {
    console.log(`while ${i}=${pigments[i]}`);
    i++;
}

// you can do the above in one move like this
for(let i = 0; i < pigments.length; i++) {
    console.log(`for ${i}=${pigments[i]}`);
}

// but this is the easiest of all
for(paint of pigments) {
    console.log(`for-in ${paint}`);
}
console.log("Here comes the last one:")
for (invent of inventory) {
    console.log(`This is inventory[0]:\n${invent[0]}`)
    console.log(`This is inventory[1]:\n${invent[1]}`)

}

let count = 5;
label1:
while(count > 0) {
    console.log("in while", count);
    if(count > 2) {
        for(i = 0; i < 4; i++) {
            console.log("in for", i);
            if(i == 2) {
                count--;
                continue label1;
            }
        }
    } else if(count == 2) {
        count -= 2;
        console.log("continue in while");
        continue label1;
    } else {
        break;
    }
    count--;
}

label2:
console.log("Done.");