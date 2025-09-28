// Write a logic to check the given string is palindrome or not

let str = "madam";
let reverse = "";
for (i=str.length-1; i >= 0; i--){
    reverse += str[i];
}

if (str === reverse){
    console.log("The given string is palindrome");
}else{
    console.log("the given string is not palindrome");
}