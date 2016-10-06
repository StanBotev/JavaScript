function gameScoreToHTML(scoreStr){
    let arr = JSON.parse(scoreStr);
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    for (let scoreData of arr) {
        html += '  <tr>';
        html += `<td>${htmlEscape(scoreData["name"])}</td>`;
        html += `<td>${htmlEscape(Number(scoreData["score"]))}</td>`;
        html += '</tr>\n';
    }
    function htmlEscape(str) {
        str = new String(str);
        let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return str.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    html += '</table>';
    return html ;
}

console.log(gameScoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']));
