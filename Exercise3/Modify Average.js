function modifyAverage(input) {
    let number = input;
    let sum = 0;

    while(true){
        number = number.toString();
        let theSum = checkTheSumOfDigits(number, sum);
        let positive = number.replace('-','');
        if (theSum/positive.length <= 5){
            number += '9';
        }
        else{
            console.log(number);
            break;
        }
    }

    function checkTheSumOfDigits(number, sum) {
        let positive = number.replace('-','');
        for (let i=0 ; i<positive.length ; i++){

            sum +=Number(positive[i]);
        }

        return sum ;
    }
}

modifyAverage(['-519000']);