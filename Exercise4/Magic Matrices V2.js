function printMatrix(input) {

    let matrix = input.map(row => row.split(' ').map(Number));
    let result = [];
    let sumRows = 0;
    let sumCols = 0;

    for (let row = 0; row < matrix.length-2; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sumRows= matrix[row][col] + matrix[row+1][col] + matrix[row+2][col];
            result.push(sumRows);
            }
        }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length -2; col++) {
            sumCols= matrix[row][col] + matrix[row][col+1] + matrix[row][col+2];
            result.push(sumCols);
            }
        }

// 0 == 3 , 1 == 4 , 2 == 5
    function areTheyEqual(str) {
        for (let i=0; i<str.length/2; i++)
            if (str[i] != str[str.length + i - 3])
                return false;
        return true;
    }

    console.log(areTheyEqual(result));
}


printMatrix(['11 32 45 2',
    '21 0 1 2',
    '21 1 1 2']
);