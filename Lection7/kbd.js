function draw() {
    let ctx = canvas.getContext("2d");
    window.addEventListener('keypress', animate);

    let ball = {x: 0, y: 100};
    let dirX = true;

    function animate(event) {

        if (event.code == "ArrowLeft") { position.x-=10; }
        else if (event.code == "ArrowRight") { ball.x+=10; }

        ctx.clearRect(0, 0, 800, 600);

        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(ball.x, ball.y , 40, 0, Math.PI*2);
        ctx.fill();
    }
}