function lastDayOfPreviousMonth([d, mon, y]) {

    let lastDay =  new Date(y-2, mon-1, 0);
    if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)){
        console.log(lastDay.getDate()+1)
    }
    else{
        console.log(lastDay.getDate());
    }
}

lastDayOfPreviousMonth(['17','3','2004'])