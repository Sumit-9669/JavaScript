// Create a function to check the year is leap or not

function isLeapYear(year){
    if (year % 4 === 0){
        return "Its a leap year"
    } else {
        return "Its not a leap year"
    }

}
console.log(isLeapYear(1900));