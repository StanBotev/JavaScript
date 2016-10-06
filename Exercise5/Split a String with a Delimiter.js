function splitingString([inputString, delimeter]) {
 let splitedInput = inputString.split(delimeter);

    for (let word of splitedInput) {
        console.log(word);
    }
}

splitingString(['One-Two-Three-Four-Five', '-']);