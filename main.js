let canvas, width, height, fps;

function init() {
    canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;

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