function biggestOf3([num1, num2, num3]) {
    [num1, num2, num3]=[num1, num2, num3].map(Number);
    let theMaxNumber = Math.max(num1, num2, num3);
    console.log(theMaxNumber);
}

biggestOf3([130, 5, 99]);