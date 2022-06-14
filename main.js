function preload() {}

function setup() {
    canvas = createCanvas(500,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video,0,0,500,350);
    // code need to be added later in Project-115
}