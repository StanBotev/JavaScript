function printArray(string) {
    let result = string.join('');
    let chars = Array.from(result);
    let reversed = chars.reverse();
    console.log(reversed.join(''));
}

printArray(['I', 'am', 'student']);