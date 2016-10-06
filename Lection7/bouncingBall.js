function draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let ball = {x: 0, y: 0};
    let timer = setInterval(animate, 20);
    let dirX = true;
    let dirY = true;

    function animate() {
        ctx.clearRect(0, 0, 800, 600);

        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(ball.x, ball.y , 40, 0, Math.PI*2);
        ctx.fill();

        if (dirX){
            ball.x += 5;
            if (ball.x >= 770) {
                dirX=false;
            }
        } else {
            ball.x -= 5;
            if (ball.x <= 30) dirX=true;
        }

        if (dirY){
            ball.y += 8;
            if (ball.y >= 570) dirY=false;
        } else {
            ball.y -= 8;
            if (ball.y <= 30) dirY=true;
        }

    }
    requestAnimationFrame(animate);
}