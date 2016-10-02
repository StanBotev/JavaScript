function theOddNumbers(n) {
    let limit = Number(n);

    //return ( x & 1 ) ? "odd" : "even"; - Nice way ot check even or odd

    for (let i=1 ; i<=limit ; i++){

        if  (i % 2 !=0){
            console.log(i)
        }
    }
}

//theOddNumbers(5);
 //theOddNumbers(4);
theOddNumbers(7);
