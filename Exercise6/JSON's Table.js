function creatingHTMLFromJSON(input) {

    let html = '<table>\n';

    for (let i = 0; i<input.length ; i++) {
        let splittedInput = input[i].split(', ');
        let array = JSON.parse(splittedInput);

            html += `  <tr>\n`;
            for (let key of Object.keys(array)){
                html += `    <td>${htmlEscape(array[key])}</td>\n`;
            }
            html += `  <tr>\n`;
    }

    function htmlEscape(text) {
        str = new String(text);
        let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return str.replace(/[\"&'<>]/g, ch => map[ch]);
    }


    html +='</table>';
    console.log(html);
}

creatingHTMLFromJSON(([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']));