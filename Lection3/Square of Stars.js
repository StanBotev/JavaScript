function drawSquare(input=5) {
    let number = Number(input);

    for (let i = 1; i <= number; i++) {
        console.log('* '.repeat(number))
    }
}

drawSquare('');