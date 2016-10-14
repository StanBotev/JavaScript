function removeLetters(input) {

    let matrix = input.map(row =>
        row.split(''));

    let currentRow = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length-3; col++) {
            //first diagonal
            if (matrix[row][col].toLowerCase() == matrix[row][col+2].toLowerCase()){

                matrix[row][col].replace(matrix[row][col].toLowerCase(),' ');
                matrix[row][col+2].replace(matrix[row][col+2].toLowerCase(),' ');

            }
        }
    }

    console.log(matrix);
    //console.log(currentRow);
}

removeLetters([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv',
]);

