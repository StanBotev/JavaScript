function sortArray(array) {
   console.log(array.sort().sort((a,b) => a.length - b.length).join('\n'));
}

sortArray(['test', 'Deny', 'omen' , 'Default']);