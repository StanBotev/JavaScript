function smallest2Numbers(input) {
    let orderedInput = input.sort((a, b) => a-b);
    let numbers = orderedInput.slice(0, 2);
    numbers = numbers.join(' ');
    // let result = '';
    // for (let num of numbers){
    //     result += num + ' ';
    // }
    // result = result.trim();
    console.log(numbers);
}

smallest2Numbers(['3', '0', '10', '4', '7', '3']);