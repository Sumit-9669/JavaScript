//using switch case determine if a person is eligible to vote or not

let age = 25;
switch(true){
    case (age === 18):
        console.log("Just eligible to vote");
        break;

    case (age > 18):
        console.log("Already eligible for vote");
        break;

    case (age < 18):
        console.log("Not eligible to vote");
        break;

    default:
        console.log("Invalid age");
        break;

}

// simple switch case example

let day = 3;
let dayName ="";
switch(day){
    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName ="Wednesday";
        break;

    case 4:
        dayName ="Thursday";
        break;

    case 5:
        dayName ="Friday";
        break;

    case 6:
        dayName ="Saturday";
        break;

    case 7:
        dayName ="Sunday";
        break;

    default:
        dayName = "Invalid Day";
        break;
}
console.log("Day " + day + " is " + dayName);