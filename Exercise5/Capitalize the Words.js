function capitalizeFirstLetter([input]) {
    let splittedWords = input.split(' ');
    let result = '';

    for (let currentWord=0 ; currentWord<splittedWords.length ; currentWord++) {
        for (let currentChar=0 ; currentChar < splittedWords[currentWord].length; currentChar++) {
            if (currentChar == 0){
                result += splittedWords[currentWord][0].toUpperCase();
            }else {
                result += splittedWords[currentWord][currentChar].toLowerCase();
            }
            //splittedWords[currentWord][currentChar]);
            //console.log(splittedWords[currentWord][currentChar]);
        }
        result += ' ';
    }

    console.log(result);
}

capitalizeFirstLetter(['Was that Easy? tRY thIs onE for SiZe!']);