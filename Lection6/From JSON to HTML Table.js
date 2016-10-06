function JSONToHTMLTable([json]) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += "  <tr>";
    for (let key of Object.keys(arr[0]))
        html += `<th>${htmlEscape(key)}</th>`;
    html += "</tr>\n";
    for (let obj of arr) {
        html += '';
        return html + "</table>";
    }
    function htmlEscape(str) {
        str = new String(str);
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return str.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
