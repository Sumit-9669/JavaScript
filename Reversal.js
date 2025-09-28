/* ===========  Using for loop  ============*/

let str = "Clean world, Green world";
let reversed = "";
for(i = str.length-1; i >= 0; i--){
    reversed += str[i];
}
console.log("Reversed using for loop: " + reversed);

/* ===========  Using While loop  ============*/
let j = str.length-1;
let reversed1= "";
while(j >= 0){
    reversed1 += str[j];
    j--;
}
console.log("Reversed using while loop: " + reversed1);


/* ===========  Using In-build function  ============*/
let reversed2 = "";
reversed2 = str.split("").reverse().join("");
console.log("Reversed using In-build function: " + reversed2);