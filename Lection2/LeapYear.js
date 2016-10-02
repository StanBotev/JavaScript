function isLeap(year) {
   return ((year % 4 == 0 && year % 100 != 0) ||
        (year % 400 == 0)) ? "yes" : "no";
}

console.log(isLeap(2010));

function isLeapYear(inputYear) {
    inputYear = Number(inputYear);
    if (inputYear % 4 == 0 && inputYear % 100 != 0 )
        console.log("yes");
    else if (inputYear % 400 == 0)
        console.log("yes");
    else
        console.log("no");
}