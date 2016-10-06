function captureNumbersWithRegExpr(input) {
    let text = input.join(' ');
    let regex = /\d+/g;
    let numbers =text.match(regex);
    console.log(numbers.join(' '));

    // let text = '';
    // let digsLines = [];
    // let regex = /\d+/g;
    //
    // for (let i=0 ; i<input.length ; i++) {
    //     text += input[i] + ' ';
    // }
    // let match = regex.exec(text);
    // //console.log(match);
    // while (match) {
    //     digsLines.push(match[0]);
    //     match = regex.exec(text);
    // }
    // console.log(digsLines.join(' '));
}

captureNumbersWithRegExpr(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);