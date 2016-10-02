function elementsAtEvenPositions(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
       if (i % 2 == 0) {
           output +=input[i] + ' ';
       }
    }
    return output;
}
console.log(elementsAtEvenPositions(['1', '2', '3']));