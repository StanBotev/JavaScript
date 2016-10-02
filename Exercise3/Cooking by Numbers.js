function usingCommands(input) {
    let number = Number(input[0]);
    for (let i = 1 ; i<input.length ; i++){
        number = commands(number, input[i]);
        console.log(number);
    }

    function commands(number, command) {
        switch (command) {
            case "chop": return number/2 ;
            case "dice": return Math.sqrt(number) ;
            case "spice": return number+1 ;
            case "bake": return number*3 ;
            case "fillet": return number*0.8 ;
        }
    }
}

usingCommands([32, 'chop', 'chop', 'chop', 'chop', 'chop']);