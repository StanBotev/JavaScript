function OddOrEvenOrInvalid(input) {
    let number = input % 2;
    if (number == 0){
        console.log("even");
    }
    else if (number == Math.round(number)){
        console.log("odd");
    }
    else {
        console.log("invalid")
    }
}