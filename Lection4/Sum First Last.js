function sumFirstAndLast(input) {
    let a = Number(input[0]);
    let b = Number(input[input.length-1]);

    let sum = a + b;
    return sum;
}

console.log(sumFirstAndLast(['10', '20', '30']));