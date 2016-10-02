function printMatrix(input) {
    let matrix = input.map(row => row.split(' ').map(Number));


    let merged = [].concat.apply([], matrix);
    let sum = merged.reduce(function(a, b){
        return a+b;},0);
    if (sum % matrix.length == 0)
        console.log('true');
    else
        console.log('false');
}


printMatrix(['4 5 6',
    '6 5 4',
    '5 5 5']
);