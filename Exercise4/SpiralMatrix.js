function fillingSpiralMatrix([input]) {
    let inputParams = input.split(' ');
    let rows = Number(inputParams[0]);
    let cols = Number(inputParams[1]);


    let matrix =new Array();
    let line1 = [];

    for (let row = 0; row < rows; row++) {
        matrix[row]=new Array();
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let up = 0;
    let down = rows - 1;
    let left = 0;
    let right = cols - 1;

    let index = 1;
    let direction = 0;
    while (up <= down && left <= right) {

        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[up][col] = index++;
                }
                up++;

                direction++;
                break;
            case 1:
                for (let row = up; row <= down; row++) {
                    matrix[row][right] = index++;
                }
                right--;

                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[down][col] = index++;
                }
                down--;

                direction++;
                break;
            default:
                for (let row = down; row >= up; row--) {
                    matrix[row][left] = index++;
                }
                left++;

                direction++;
                break;
        }
    }

    for (let row of matrix){
        let result = row.join(' ');
        console.log(result);
    }

}

fillingSpiralMatrix(['6 5']);


// spiraling indexes - row 0 - 0,0 ; 0,1 ; 0,2 ; 0,3 ; 0,4
// spiraling indexes - row 1 - 1,0 ; 1,1 ; 1,2 ; 1,3 ; 1,4
// spiraling indexes - row 1 - 2,0 ; 2,1 ; 2,2 ; 2,3 ; 2,4
// spiraling indexes - row 1 - 3,0 ; 3,1 ; 3,2 ; 3,3 ; 3,4
// spiraling indexes - row 1 - 4,0 ; 4,1 ; 4,2 ; 4,3 ; 4,4

// the movement - 0,0 -> 0,1 -> 0,2 -> 0,3 -> 0,4 -> 1,4 -> 2,4 -> 3,4 -> 4,4 -> 4,3 -> 4,2 -> 4,1 -> 4,0