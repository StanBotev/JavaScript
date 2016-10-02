function drawingFigure(input) {
    let n = Number(input);
    let dashes = '-'.repeat(n>1 ? n-2:0) ;
    let spaces = ' '.repeat(n-2) ;

    if (n <= 2) {
        console.log("+".repeat(3));
    }
    else
    {

        var pipeLines = Math.floor((n - 3) / 2);

        var vertical = "|" + spaces;
        var horizontal = "+" + dashes;
        let output = "";

        for (let i = 0; i < 2; i++) {
            output += horizontal.repeat(2) + "+\n";

            for (let s = 0; s < pipeLines; s++) {
                output += vertical.repeat(2) + "|\n";
            }
        }

        output += horizontal.repeat(2) + "+\n";

        console.log(output);
    }
}

drawingFigure(7);