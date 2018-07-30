let canvas, width, height, fps, tileSize;
let snake;

window.addEventListener("resize", resizeWindow);

function resizeWindow(){
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    tileSize = Math.max(Math.floor(width/60), Math.floor(height/60));
}

function init() {
    canvas = document.createElement("canvas");
    resizeWindow();
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    
    fps = 15;

    newGame();
    run();
}

function newGame(){
    snake = new Snake();
}

function Snake(){
    this.body = [[10,10],[10,11],[10,12]];
    this.color = "#fff";

    this.draw = function() {
        ctx.fillStyle = this.color;

        for(i = 0; i < this.body.length; i++){
            ctx.fillRect(this.body[i][0] * tileSize, this.body[i][1] * tileSize, tileSize, tileSize);
        }
    }
}

function update() {

}

function run() {
    update();
    draw();

    setTimeout(run, 1000/fps);
}

function draw() {
    ctx.clearRect(0, 0, width, height);

    snake.draw();
}

init();