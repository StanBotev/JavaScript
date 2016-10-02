function printArray(array) {
    let numberOfRotations = array.pop();

    if (numberOfRotations > array.length ){
        numberOfRotations = numberOfRotations % array.length ;
    }

    for (let i = 0; i < numberOfRotations; i++) {

        array.unshift(array.pop());

    }
    console.log(array.join(' '));
}

printArray([1, 2, 3, 4, 36]);