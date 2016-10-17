function multiplication(input) {

    let result = 1;
    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        //console.log(currentNumber);


        if (currentNumber >= 0 && currentNumber <10 ){
            if ( i+currentNumber < input.length){
                for (let j = 1; j <= currentNumber; j++) {
                    result *= Number(input[i+j]);
                }
                resultArray.push(result);
                result = 1;
            }
        }
    }
    //console.log(resultArray);
    resultArray = resultArray.sort((a, b) => a - b ) ;
    console.log(resultArray.pop());
}

// let arr = [
//    '10',
//    '20',
//    '2',
//    '30',
//    '44',
//    '123',
//    '3',
//    '56',
//    '20',
//    '24'
// ];

let arr = [
   '100',
   '200',
   '2',
   '3',
   '2',
   '3',
   '2',
   '1',
   '1'
];

multiplication(arr);