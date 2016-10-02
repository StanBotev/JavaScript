function creatingChessBoard(n) {
    let cells = Number(n);
    console.log('<div class="chessboard">');
    for (let divs = 0; divs < cells; divs++) {
        console.log("  <div>");
        for (let spans = 0; spans < cells; spans++ ){
            if (divs % 2 == 0){
                let color = 'black';
                if (spans % 2 != 0) color = 'white';
                console.log(`    <span class="${color}"></span>`)
            }
            else {
                let color = 'white';
                if (spans % 2 != 0) color = 'black';
                console.log(`    <span class="${color}"></span>`)
            }

        }
        console.log("  </div>");
    }
    console.log("</div>");
}

creatingChessBoard('3');