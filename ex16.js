let count = 5;
// set variable
while (count > 0) {
    //format string
    console.log(`count down ${count}`);
    //subtract one from variable
    count--;
}

while(count < 10) {
    if(count % 2 == 0) {
        console.log(count, "EVEN");
    } else {
        console.log(count, "ODD");
    }

    count++;
}