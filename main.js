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

    run();
}

function update() {

}

function run() {
    update();
    draw();

    setTimeout(run, 1000/fps);
}

function draw() {}

init();