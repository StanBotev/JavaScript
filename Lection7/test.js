function drawButton() {
    let ctx = document.getElementById('canvas').getContext('2d');

    ctx.fillStyle = 'orange';
    ctv.fillRect(0, 0, 240, 40);

    ctx.fillStyle = 'white';
    ctx.font = "24px monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Submit", 130, 50);
}