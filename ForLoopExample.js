//Print multiplication table using for loop

let num = 20;
console.log("<<<<<<<<<< Using for loop >>>>>>>>>>>>")
for (i = 1; i <=10; i++){
    console.log(num * i)
}


/*=======================================================*/
//For each loop
let arrName = ['Sumit','Ronny','Julie','Vibha','Pankaj','Preeti'];
console.log("<<<<<<<<<<<<<< Using for each Loop >>>>>>>>>>>>>>")
for (let name of arrName){
    console.log(name);
}


/*=======================================================*/
//Using For each method of array
console.log("<<<<<<<<<<<<<< Using for each method of array >>>>>>>>>>>>>>");
arrName.forEach(name => console.log(name));