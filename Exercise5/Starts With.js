function checkText([inputText, substring]) {
    let begginingOfText = inputText.substr(0, substring.length);
    return begginingOfText == substring ;
}

console.log(checkText(['How have you been?', 'how']));
console.log(checkText(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta']));