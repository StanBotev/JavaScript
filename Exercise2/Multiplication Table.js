function printingMultiplicationTable(n) {
    html = '<table border="1">\n';
    html += '<tr><th>x</th>';
    let limit = Number(n);

    for (let rows=1 ; rows<=limit ; rows++) {
        html += `<th>${rows}</th>`;
    }
    html +='</tr>\n';

    for (let rows=1 ; rows<=limit ; rows++){
        html +=`<tr><th>${rows}</th>`;

        for (let cols=1 ; cols<=limit ; cols++){

            html +=`<td>${cols*rows}</td>`;
        }
        html +='</tr>\n';
    }
    html +='</table>';
    console.log(html);
}

printingMultiplicationTable('5');