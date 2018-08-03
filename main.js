let canvas, width, height, fps, tileSize, playing;
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

    playing = false;
}

function Snake(){
    this.body = [[10,10],[10,11],[10,12]];
    this.color = "#fff";
    this.direction = [0, -1];

    this.update = function(){
        let nextPos = [this.body[0][0] + this.direction[0], this.body[0][1] + this.direction[1]];

        if(!playing){
            if(this.direction[1] == -1 && nextPos[1] <= (height * 0.1 / tileSize))
                this.direction = [1, 0];

            else if(this.direction[0] == 1 && nextPos[0] >= (width * 0.9 / tileSize))
                this.direction = [0, 1];

            else if(this.direction[1] == 1 && nextPos[1] >= (height * 0.9 / tileSize))
                this.direction = [-1, 0];

            else if(this.direction[0] == -1 && nextPos[0] <= (width * 0.1 / tileSize))
                this.direction = [0, -1];
        }

        this.body.pop();
        this.body.splice(0, 0, nextPos)
    }

    this.draw = function() {
        ctx.fillStyle = this.color;

        for(i = 0; i < this.body.length; i++){
            ctx.fillRect(this.body[i][0] * tileSize, this.body[i][1] * tileSize, tileSize, tileSize);
        }
    }
}

function update() {
    snake.update();
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