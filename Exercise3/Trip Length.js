function shortestDistancePath([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    let dif1to2X = diff(x1, x2);
    let dif1to2Y = diff(y1, y2);
    let dist1to2 = distance(dif1to2X, dif1to2Y);
    console.log(dist1to2);

    let dif2to3X = diff(x2, x3);
    let dif2to3Y = diff(y2, y3);
    let dist2to3 = distance(dif2to3X, dif2to3Y);
    console.log(dist2to3);

    let dif1to3X = diff(x1, x3);
    let dif1to3Y = diff(y1, y3);
    let dist1to3 = distance(dif1to3X, dif1to3Y);
    console.log(dist1to3);

    function diff(coord1, coord2) {
        return Math.abs(coord1-coord2);
    }

    function distance(difX, difY) {
        return Math.sqrt(Math.pow(difX, 2) + Math.pow(difY, 2));
    }
}

shortestDistancePath([5, 1, 1, 1, 5, 4]);
shortestDistancePath([0, 0, 2, 0, 4, 0]);