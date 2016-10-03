function listOfProducsAndBill(input) {
    let items = input.filter( (item, index) => index % 2 ==0);
    let purchase = input.filter( (p, index) => index % 2 ==1 )
        .map(Number)
        .reduce((a,b) => a+b);
    return `You purchased ${items.join(', ')} for a total sum of ${purchase}` ;
}

console.log(listOfProducsAndBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));