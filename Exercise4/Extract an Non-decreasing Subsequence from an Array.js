function printArray(array) {
    var arrayOfNumbers = array.map(Number);
    let biggestNumber = Number.NEGATIVE_INFINITY ;
    let result =[];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
       if (arrayOfNumbers[i] >= biggestNumber){
           biggestNumber = arrayOfNumbers[i];
           result.push(biggestNumber);
       }
    }

    console.log(result.join(' '));
}

printArray(['20', '34', '2', '15', '6', '1']);