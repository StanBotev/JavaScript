function drawTriangleOfStars(input) {
    let numberOfMiddleStars = Number(input);

    for (let i = 1; i <= numberOfMiddleStars; i++) {
        console.log('*'.repeat(i));
    }
    for (let i = numberOfMiddleStars-1; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}

drawTriangleOfStars('4');