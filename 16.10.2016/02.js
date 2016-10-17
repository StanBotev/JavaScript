function main(input) {
    let nLines = Number(input.shift());
    let templateMatrix = [];
    let rosetteStone = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    for (let i = 0; i < nLines; i++) {
        let currentRow = input.shift();
        templateMatrix[i]= currentRow.split(' ').map((x) => Number(x));
        //console.log(currentRow)
    }

    let encodedMsgMatrix = input.map(row =>
        row.split(' ')
            .map(Number));

    let startingIndex = 0;
    for (let row = 0; row < encodedMsgMatrix.length; row++) {
        for (let col = 0; col < encodedMsgMatrix[row].length; col++) {
            encodedMsgMatrix[row][col] += templateMatrix[row % nLines][col % templateMatrix[row % nLines].length];
            encodedMsgMatrix[row][col] = rosetteStone[encodedMsgMatrix[row][col] % 27];
        }
    }

    let result = '';
    for (let i = 0; i < encodedMsgMatrix.length; i++) {
        result+= encodedMsgMatrix[i].join('');
    }
    console.log(result);
}

let arr = [
    '2',
   '59 36',
   '82 52',
   '4 18 25 19 8',
   '4 2 8 2 18',
   '23 14 22 0 22',
   '2 17 13 19 20',
   '0 9 0 22 22'
];

main(arr);


// for (let tempRow = 0; tempRow < templateMatrix.length; tempRow++) {
//
//     for (let tempCol = 0; tempCol < templateMatrix[tempRow].length; tempCol++) {
//
//         if (/^\d+$/.test(encodedMsgMatrix[row][col])){
//             encodedMsgMatrix[row][col] += templateMatrix[tempRow][tempCol];
//             console.log(encodedMsgMatrix[row][col]);
//             encodedMsgMatrix[row][col] = rosetteStone[encodedMsgMatrix[row][col] % 27];
//             console.log(encodedMsgMatrix[row][col]);
//             col++;
//         } else {
//
//         }
//     }
// }