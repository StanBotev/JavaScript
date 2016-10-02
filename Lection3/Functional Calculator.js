function calculator([num1, num2, command]) {
    [num1, num2] = [num1, num2].map(Number);

    let add = function(a, b) { return a + b };
    let subtract = function(a, b) { return a - b };
    let multiply = function(a, b) { return a * b };
    let divide = function(a, b) { return a / b };

    switch (command) {
        case '+' : return add(num1, num2);
        case '-' : return subtract(num1, num2);
        case '*' : return multiply(num1, num2);
        case '/' : return divide(num1, num2);
    }
}
console.log(calculator(['2', '3', '*']));