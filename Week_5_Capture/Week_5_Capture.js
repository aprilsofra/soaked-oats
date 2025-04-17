let capture;

function setup() {
createCanvas(windowWidth, windowHeight);
capture=createCapture(VIDEO);
capture.hide();
frameRate(5);
}


function draw() {
//background(255, 0);
image(capture, 0, 0, width, width * capture.height / capture.width);
filter(GRAY);
//blendMode(OVERLAY);
}
