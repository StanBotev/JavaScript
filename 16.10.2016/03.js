function main(input) {
    let specialKey = 'nottoday' ;
    let specialkeyRegexp = /^[a-zA-Z]+$/gm;

    if (input[0].match(specialkeyRegexp)){
       specialKey = input.shift();
    }

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];
        let encodedMsgPattern ='([!#$%a-z]{8,})+';
        let specialKeyPattern = new RegExp('( ?' + specialKey + ')[^a-zA-Z,]? +' + encodedMsgPattern, 'igm');

        //console.log(specialKeyPattern);
        let specialKeyFound = specialKeyPattern.exec(currentLine);
        //console.log(specialKeyFound);
        let encodedGroup = '';

        // let notCodedLine =new RegExp('( ?' + specialKey + ')[a-z]','igm');
        // let notCodedLineFound = notCodedLine.exec(currentLine);
        //
        // console.log(notCodedLine);
        //
        // if (notCodedLineFound){
        //     console.log(currentLine)
        // }

        if (specialKeyFound) {
            encodedGroup = specialKeyFound[2];
            encodedGroup = encodedGroup.replace('!', 1).replace('%', 2).replace('#', 3).replace('$', 4).toLowerCase();

            let result = currentLine.substr(0, specialKeyFound.index+specialKeyFound[1].length+1) + encodedGroup + currentLine.substr(specialKeyFound.index+specialKeyFound[1].length +encodedGroup.length +1 );
            console.log(result)
        }else {
            console.log(currentLine);
        }

    }

}

// let arr = [
//   'enCode',
//   'Some messages are just not encoded what can you do?',
//   'RE - ENCODE THEMNOW! - he said.',
//   'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
// ];

let arr = [
    'specialKey',
   'In this text the specialKey helloworld1 is correct, but',
   'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
   'SpeCIaLkeY   som22eth4in and SPECIALKEY 33443344 are!'
];

main(arr);