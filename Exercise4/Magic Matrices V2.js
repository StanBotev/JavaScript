function printMatrix(input) {

    let matrix = input.map(row => row.split(' ').map(Number));


    let result = [];
    let sumRows = 0;
    let sumCols = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            sumRows += matrix[row][col];
            }
        result.push(sumRows);
        sumRows=0;
        }

    for (let row = 0; row < matrix[0].length; row++) {
        for (let col = 0; col < matrix.length; col++) {

            sumCols += matrix[col][row];
            }
        result.push(sumCols);
        sumCols = 0;
        }

// 0 == 3 , 1 == 4 , 2 == 5
    function areTheyEqual(str) {
        for (let i=0; i<str.length; i++)
            if (str[0] != str[i])
                return false;
        return true;
    }

    //console.log(result);
    console.log(areTheyEqual(result));
}


printMatrix(['4 5 6',
             '6 5 4',
             '6 5 4',
             '6 5 4',
             '5 5 5']
);