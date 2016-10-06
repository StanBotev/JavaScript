function countingBottles(dataRows) {
    let total = new Map();
    let resultMap = new Map();
    for (let dataRow of dataRows) {
        let [fruit, quantity] = dataRow.split(/\s*=>\s*/);
        quantity = Number(quantity);
        //console.log(quantity)
        if (total.has(fruit)){
            let totalQuantity = total.get(fruit) + quantity;
            if (totalQuantity >= 1000) {
                resultMap.set(fruit, totalQuantity);
            }
            total.set(fruit, totalQuantity);
            //console.log(totalQuantity);
        }
        else {
            if (quantity >= 1000) {
                resultMap.set(fruit, quantity);
            }
            total.set(fruit, quantity);
            //console.log(quantity);
        }
    }
    //console.log(resultMap);
    let result = Array.from(resultMap);

    //console.log(result);
    for (let i=0; i<result.length ;i++){
        if (result[i][1] >= 1000){
            let bottles = parseInt(result[i][1]/1000);
            console.log(result[i][0] + ' => ' + bottles);
        }
    }
}

countingBottles([
   'Kiwi => 999',
   'Pear => 2345',
   'Watermelon => 3456',
   'Kiwi => 1',
   'Pear => 5678',
   'Watermelon => 6789',
]);
