function printingMatrix(input) {
    let matrixDim = input[0].split(' ').map(Number);
    let shotCellCoordinates = input[1].split(' ').map(Number);

    let hitRow = shotCellCoordinates[0];
    let hitColum = shotCellCoordinates[1];

    function fillMatrix(rows, cols) {
        let newMatrix = [];

        for (let i = 0; i < rows; i++) {
            newMatrix.push([]);

            for (let j = 0; j < cols; j++) {
                newMatrix[i].push(0);
            }
        }
        return newMatrix ;
    }

    function printMatrix(matrix) {
        matrix.forEach(function (row) {
            console.log(row.join(''))
        })
    }

    function processMatrix(matrix, hitRow, hitCol) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                 let currentVal = Math.max(Math.abs(hitRow-row),Math.abs(hitCol-col)+1);
            }
            matrix[row][col]
        }
    }

}