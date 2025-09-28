
//Function definition without parameter
function helloWorld(){
    console.log("Hello World.....!");
}

//Function definition with parameter
function greet(name){
    console.log("Hello " + name);
}


//Function to add two numbers

function sum(a,b){
    console.log(a + b);
}

//function to check if a number is even or odd and return the result

function checkOddEven(num){
    if (num % 2 === 0){
        return "even";
    } else{
        return "odd";
    }
}




helloWorld();
greet("Sumit");
sum(5 , 10);
console.log(checkOddEven(12));