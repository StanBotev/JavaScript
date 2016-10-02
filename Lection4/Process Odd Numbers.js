function procOdds(input) {
    let result = input.filter((number, index) => index % 2 == 1 )
        .map(num => num*2)
        .reverse();
    return result;
}