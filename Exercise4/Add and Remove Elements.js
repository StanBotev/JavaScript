function printArray(input) {
    //"use strict";
    let first = [];
    let counter = 0;

    for (let i=0 ; i < input.length ; i++) {
        counter++;
        if (input[i] == 'add') {
            first.push(counter);
        }
        else if (input[i] == 'remove'){
            first.pop(counter);
        }
    }
    if (first.length <=0){
        console.log('Empty');
    }

    for (let num of first){
       console.log(num);
    }
}

 printArray(['add', 'add', 'remove', 'add', 'add']);
// printArray(['remove', 'remove', 'remove']);