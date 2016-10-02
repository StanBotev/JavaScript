function aggElements(input) {
    let numbers = input.map(Number);

    aggregate(numbers, 0, (a, b) => a+b);
    aggregate(numbers, 0, (a, b) => a+1/b);
    aggregate(numbers, '', (a, b) => a+b);

    function aggregate(input, current, func) {
        let val = current;
        for (let i = 0; i < input.length; i++)
            val = func(val, input[i]);
        console.log(val);
    }
}

aggElements(['1', '2', '3']);