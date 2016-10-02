function countOccur([string, text]) {

    let count = 0;

    let position = -1;
    while (true){
        position = text.indexOf(string, position+1);
        if (position == -1)
            return count;
        count++;
    }
}