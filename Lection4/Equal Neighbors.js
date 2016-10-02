function numberOfOccurence(input) {
    let matrix = input.map(row => row.split(' '));

    let countNeightbours = 0;

    for (let row = 0; row < matrix.length-1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row+1][col]){
                countNeightbours++;
            }
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length -1; col++) {
            if (matrix[row][col] == matrix[row][col+1]){
                countNeightbours++;
            }

        }
    }


    return countNeightbours;
}

console.log(numberOfOccurence(['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 9 7 5 4']


));