function asList(items) {
    console.log('<ul>');
    for (let item of items){
        console.log('  <li>' + htmlEscape(item) + '</li>')
    }
    console.log('</ul>');

    function htmlEscape(string) {
        let result = '';
        for (let char of string){
            if (char == '<'){
                result += '&lt;';
            } else if (char == '>'){
                result += '&gt;';
            }else if (char == '"'){
                result += '&quot;';
            }else if(char=='\''){
                result += '&#39;';
            }else if(char=='&') {
                result += '&amp;';
            }else {
                result += char ;
            }
        }
        return result ;
    }
}



// String.prototype.htmlEscape = function() {
//     return this.replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#39;');
// }
