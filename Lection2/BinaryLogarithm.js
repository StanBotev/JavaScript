function logOfx(x) {
    for (let num of x){
        let log = Math.log2(num);
        console.log(log);
    }
}

logOfx(['3', '4', '32']);