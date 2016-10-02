function circleArea([r]){
    let area = Math.PI * r * r;
    console.log(area);
    console.log(Math.round(area*100)/100);
}

function calculatingCircleArea(r) {
    r = Number(r);
    let area = Math.PI * r * r ;
    console.log(area);
    console.log(area.toFixed(2));
}