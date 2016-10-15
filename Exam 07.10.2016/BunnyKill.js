function main(input) {
    let bombBunnies = input.pop().split(' ');
    
    let matrix = [];

    function isInMatrix(matrix, row, column) {
            return (row >= 0 && row < matrix.length)
                &&(column >= 0 && column < matrix[row].length);
        }

    function explode(matrix, bombRow, bombColumn, bombDamage) {
        for (let row = bombRow - 1; row <= bombRow + 1; row++) {
            for (let col = bombColumn - 1; col <= bombColumn + 1; col++) {
                if (isInMatrix(matrix, row, col)){
                    matrix[row][col] -= bombDamage;
                }
            }
        }
        return matrix;
    }
    
    for (var i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ')
            .map((x) => Number(x));
        
        matrix.push(currentRow);
    }

    let snowballDmg = 0;
    let snowballKills = 0;

    for (let i = 0; i < bombBunnies.length; i++) {
        let currentBombBunny = bombBunnies[i].split(',')
            .map((x) => Number(x));

        let bombRow = currentBombBunny[0];
        let bombCol = currentBombBunny[1];

        let bombDamage = matrix[bombRow][bombCol];

        if (bombDamage > 0){
            snowballDmg += bombDamage;
            snowballKills++;

           matrix = explode(matrix, bombRow, bombCol, bombDamage);
        }

    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentCell = matrix[row][col];

            if (currentCell > 0){
                snowballDmg += currentCell;
                snowballKills++;
            }
        }
    }
    
    console.log(snowballDmg);
    console.log(snowballKills);
}

let arr = [
   '5 10 15 20',
   '10 10 10 10',
   '10 15 10 10',
   '10 10 10 10',
   '2,2 0,1'
];

main(arr);