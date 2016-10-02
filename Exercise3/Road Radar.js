function speedCheck([speed, area]) {
    speed = Number(speed);
    let speedDiference = speed - zoneOfDriving(area);

    if (speedDiference > 0 && speedDiference <=20){
        console.log('speeding');
    }
    else if (speedDiference > 20 && speedDiference <= 40 ) {
        console.log('excessive speeding');
    }
    else if (speedDiference > 40){
        console.log('reckless driving');
    }

    function zoneOfDriving(area) {
        switch (area){
            case "motorway": return 130;
            case "interstate": return 90;
            case "city": return 50;
            case "residential": return 20;
        }
    }
}
speedCheck([21, 'residential']);


