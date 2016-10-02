function sumOfDiagonals(input) {
    let matrix = input.map(row => row.split(' ').map(Number));

    let mainDiagSum = 0;
    let secondaryDiagSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainDiagSum += matrix[row][row];
        secondaryDiagSum += matrix[row][matrix.length-row-1];
    }

    return mainDiagSum + ' ' + secondaryDiagSum ;
}