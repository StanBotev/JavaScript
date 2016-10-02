function rounding([num, precision]) {
    num = Number(num);
    precision = Number(precision);
    if (precision>15)precision=15;
    //console.log(num.toFixed(precision).replace(/0+$/, ""));
    console.log(Number(num.toFixed(precision)));
}