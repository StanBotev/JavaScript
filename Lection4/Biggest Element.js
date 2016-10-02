function biggestElement(input) {
    let matrix = input.map(row => row.split(' ').map(Number));

    let maxNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(num => maxNum = Math.max(maxNum, num)));
    console.log(maxNum);
}
biggestElement(['20 50 10',
    '8 33 145']
);