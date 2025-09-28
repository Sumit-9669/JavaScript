//Find sum of all digits in a number
let num1 = 3456;
let sum = 0;
while(num1 > 0){
    let rem = num1 % 10;
    sum = sum + rem;
    num1 = Math.floor(num1 / 10);
}
console.log("The sum of digits of number 3456 is : " + sum);