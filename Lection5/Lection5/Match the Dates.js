function matchTheDates(text) {
    let dateRegex = /\d{1,2}-\w{3}-\d{4}/g;
    console.log(text.match(dateRegex));
}

matchTheDates('I am born on 30-Dec-1994.This is not date: 512-Jan-1996. My father is born on the 29-Jul-1955.');