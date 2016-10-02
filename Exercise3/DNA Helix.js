function printingTheDNAHelix(input) {
    let lines = Number(input);

    let left = ['A', 'C', 'T', 'A', 'G'];
    let right = ['T', 'G', 'T', 'G', 'G'];

    for (let i = 0; i < lines; i++) {
       if (i/4 == parseInt(i/4)) {
           console.log('*'.repeat(2) + `${left[i%5]}${right[i%5]}` + '*'.repeat(2));
       }
        else if (i%2 == 1){
           console.log(`*${left[i%5]}`+'-'.repeat(2)+`${right[i%5]}*`);
       }
       else {
           console.log(`${left[i%5]}`+'-'.repeat(4)+`${right[i%5]}`);
       }
    }
}
printingTheDNAHelix(10);