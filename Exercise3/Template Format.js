function questionsAndAnswers(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');


    for (let i = 0 ; i < input.length ; i+=2 ){
        console.log('  <question>');
        console.log('    '+input[i]);
        console.log('  </question>');
        console.log('  <answer>');
        console.log('    '+input[i+1]);
        console.log('  </answer>');
    }
    console.log('</quiz>');
}

questionsAndAnswers(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);