const invincible = 94;
let changeme = 82;

console.log(`invincible=${invincible} but changeme=${changeme}`);

//thiis will work just fine
changeme = 100;

// uncomment this to see how you cant do it:
// invincible = 100000;
console.log(`After change: invincible=${invincible} but changeme=${changeme}`);

