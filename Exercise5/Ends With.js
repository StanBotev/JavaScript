function ifSubstringMatch([mainOne, givenSubstr]) {
    let endOfMain = mainOne.substr(mainOne.length - givenSubstr.length, givenSubstr.length);

    return endOfMain == givenSubstr ;
}

console.log(ifSubstringMatch(['The new iPhone has no headphones jack.', 'o headphones jack.']));