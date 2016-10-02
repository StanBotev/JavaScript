function aggrTable(table) {
    let sum = 0 , result = [];
    for (let name of table) {
        let townData = name.split('|'),
            townName = townData[1].trim(),
            income = Number(townData[2].trim());
        result.push(townName);
        sum += income;
    }
    return result.join(', ') + '\n' + sum ;
}