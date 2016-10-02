function printingLettersOfAString(input) {
    if (Array.isArray(input)){
        input = input[0]
    }
    for (let index in input){
        console.log(`str[${index}] -> ${input[index]}`);
    }
}

printingLettersOfAString(['Hello, World!']);