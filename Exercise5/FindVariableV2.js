function findVarriableNames(input) {
    let text = input[0];
    let firstRegEx = /(_([a-zA-Z0-9]+))/g;
    let secondRegEx = /\S(_([a-zA-Z0-9]+))?\s(_([a-zA-Z0-9]+)_)/g;

    let result1 =text.match(secondRegEx);
    //console.log(result1.join(' '));
    let firstMatch = text.replace(result1, '');
    //console.log(firstMatch);

    let result3 = firstMatch.match(firstRegEx);
    //console.log(result3.join(' '));
    let thirdMatch = firstMatch.replace(result3, '');

    console.log(result3.toString().replace(/_/g, ''));
}


findVarriableNames(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);
findVarriableNames(['The _id and _age variables are both integers.']);