let canvas, width, height;

function init() {
    canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;

    document.body.appendChild(canvas);
}

function update() {}

function run() {
    update();
    draw();
}

function draw() {}

init();