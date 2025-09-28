let num = 1; // prime number to check
let count = 0;


for (let i = 2; i <= num -1 ; i++) {
    if (num % i === 0) {
        count++;
        break;
    }
}


if ( num === 1 ) {
    console.log("1 is neither prime nor composite number");
} else if (count > 0) {
    console.log(num + " is not a prime number");
} else {
    console.log(num + " is a prime number");
}
