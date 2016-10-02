function calculateDistance([speed1,speed2,time]) {
    let array = [speed1,speed2,time].map(Number);
    let speedFirst = array[0]*1000/3600;
    let speedSecond = array[1]*1000/3600;

    let distance1 = speedFirst*array[2];
    let distance2 = speedSecond*array[2];

    let result = Math.max(distance1-distance2,distance2-distance1);
    //let result = Math.abs(distance1-distance2);
    console.log(result);
}

console.log(calculateDistance(['0', '60', '3600']));