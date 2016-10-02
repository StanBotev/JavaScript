function firstAndLast(input) {
    let kNumbers = Number(input.shift());

    console.log(input.slice(0, kNumbers).join(' '));
    console.log(input.slice(input.length-kNumbers, input.lenght).join(' '));
}