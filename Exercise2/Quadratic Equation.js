function solvingQuadraticEq([a, b, c]) {
    [a, b, c]=[a, b, c].map(Number);
    let d = Math.pow(b, 2) - 4*a*c ;
    if (d>0){
       let x1 = (-b + Math.sqrt(d))/(2*a);
       let x2 = (-b - Math.sqrt(d))/(2*a);
        x1>x2 ? console.log(x2) : console.log(x1);
        x1>x2 ? console.log(x1) : console.log(x2);
    }
    else if (d==0){
        console.log(-b / (2*a) );
    }
    else{
        console.log("No");
    }
}

solvingQuadraticEq([6, 11, -35]);
solvingQuadraticEq([1, -12, 36]);
solvingQuadraticEq([5, 2, 1]);