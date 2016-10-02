function triangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area;
}

function calculatingTriangleArea([a,b,c]) {
    [a, b, c] = [a, b, c].map(Number);

    let perimeter = (a+b+c)/2;
    let area = Math.sqrt((perimeter-a)*(perimeter-b)*(perimeter-c)*perimeter);
    console.log(area);
}
