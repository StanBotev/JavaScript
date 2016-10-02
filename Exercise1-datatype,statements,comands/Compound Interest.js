function compoundInterest([P, i, n, t]) {
    [P, i, n, t] = [P, i, n, t].map(Number);
    n = 12/n ;
    let compoundInt = P * (Math.pow((1 + i/(n*100)) , n * t));
    console.log(compoundInt.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);