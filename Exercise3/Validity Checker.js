function isValid([x1, y1, x2, y2]) {

    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

    let distanceFromStartFirstPoint = calcDistance(x1, y1) ;
    let distanceFromStartSecondPoint = calcDistance(x2, y2) ;

    let difX = calcDifference(x1, x2);
    let difY = calcDifference(y1, y2);
    let distanceBetPoints = calcDistance(difX, difY);

    if (distanceFromStartFirstPoint == parseInt(distanceFromStartFirstPoint,10)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (distanceFromStartSecondPoint == parseInt(distanceFromStartSecondPoint,10)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (distanceBetPoints == parseInt(distanceBetPoints,10)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

    function calcDistance(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    function calcDifference(point1, point2) {
        return Math.abs(point1 - point2);
    }
}

isValid(['3','0','0','4']);