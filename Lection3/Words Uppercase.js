function textToUpper([input]) {
    let upperText = input.toUpperCase();

    let splitedText = upperText.split(/\W+/);
    splitedText = splitedText.filter(w => w != '');

    let joinedText = splitedText.join(', ');
    console.log(joinedText);
}

textToUpper(['Hi, how are you?']);
textToUpper(['hello']);