// function lastKNumbers([n, k]) {
//     let elements = [1];
//
//     for (let i = 1; i < n; i++) {
//         let startingPos = Math.max(0, i-k);
//         let endingPos = i-1;
//         let result = sumOfElements(startingPos, endingPos, elements);
//         elements[i] = result ;
//     }
//
//     function sumOfElements(start, end, elements) {
//         let sum = 0;
//         for (let i = start; i <= end; i++) {
//            sum += elements[i];
//         }
//         return sum;
//     }
//     return elements ;
// }

// console.log(lastKNumbers(['9', '5']));

function lastKNumbers([n, k]) {
    let elements = [1];

    for (let i = 1; i < n; i++) {
        let startingPos = Math.max(0, i-k);
        let endingPos = i-1;
        let result = elements.slice(startingPos,endingPos+1).reduce(function(a, b){
            return a+b;},0);
        elements[i] = result ;
    }
    return elements ;
}

console.log(lastKNumbers(['9', '5']));