function isPrime(num) {
    for (let x of num){
        let start = 2;
        while (start <= Math.sqrt(x)) {
            if (x % start++ < 1) {
                return false;
            }
        }
        console.log(x);
        return x > 1;
    }
}

isPrime(['124','56','453']);