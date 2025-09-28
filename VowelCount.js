let str = "Hello World";
let count = 0;

for (i = 0; i < str.length; i++){
    let vow = str[i];

    if(vow === 'a' || vow === 'A' ||
       vow === 'e' || vow === 'E' ||
       vow === 'i' || vow === 'I' ||
       vow === 'o' || vow === 'O' ||
       vow === 'u' || vow === 'U'){
       count++;
       }
}
console.log("The vowel count in a string is " + count);


/* ======= Using Switch Case =========*/
switch (ch){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
        count++;
        break;

}
console.log("The vowel count using switch case is: " + count);
