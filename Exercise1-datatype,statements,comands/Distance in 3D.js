function calculateDistance([x1, y1, z1, x2, y2, z2 ]){
    [x1, y1, z1, x2, y2, z2 ] = [x1, y1, z1, x2, y2, z2 ].map(Number);
    let distanceX = x1 - x2;
    let distanceY = y1 - y2;
    let distanceZ = z1 - z2;

    let distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY + distanceZ*distanceZ);
    console.log(distance);
}
let first = 1 + i ;
let second = n*100 ;
let firstExpression = first/second ;
let nt = n * t ;
let thePow = Math.pow(firstExpression, nt);
let compoundInt = P * thePow;