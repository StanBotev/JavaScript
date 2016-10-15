function main(input) {
    let vitkorDealtDamage = 0;
    let naskorDealtDamage = 0;

    let vitkorConsAtt = 0;
    let naskorConsAtt = 0;

    let vitkorPrevDmg = Number.NEGATIVE_INFINITY;
    let naskorPrevDmg = Number.NEGATIVE_INFINITY;

    for (let i=0; i<input.length; i++){
        let currentInputLine = input[i].split(' ');

        let countMedenkas = Number(currentInputLine[0]);
        let medenkaType = currentInputLine[1];

        if (medenkaType == 'white') {
            let medenkaDamage = countMedenkas * 60 ;

            if (medenkaDamage == vitkorPrevDmg) {
                vitkorConsAtt++;
            } else {
                vitkorConsAtt = 1;
            }

            if (vitkorConsAtt == 2) {
                vitkorDealtDamage += medenkaDamage *2.75 ;
                vitkorPrevDmg = medenkaDamage *2.75 ;
                vitkorConsAtt = 0;
            } else {
                vitkorDealtDamage += medenkaDamage;
                vitkorPrevDmg = medenkaDamage;
            }


        } else {
            let medenkaDamage = countMedenkas * 60 ;

            if (medenkaDamage == naskorPrevDmg) {
                naskorConsAtt++;
            } else {
                naskorConsAtt = 1;
            }

            if (naskorConsAtt == 5) {
                naskorDealtDamage += medenkaDamage *4.5 ;
                naskorPrevDmg = medenkaDamage *4.5 ;
                naskorConsAtt = 1;
            } else {
                naskorDealtDamage += medenkaDamage;
                naskorPrevDmg = medenkaDamage;
            }
        }
    }

    if (vitkorDealtDamage > naskorDealtDamage) {
        console.log('Winner - Vitkor');
        console.log(`Damage - ${vitkorDealtDamage}`);
    } else {
        console.log('Winner - Naskor');
        console.log(`Damage - ${naskorDealtDamage}`);
    }
}

let arr = [
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',];

main(arr);