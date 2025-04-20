var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  capture = createCapture(VIDEO);
  capture.size(640,480);
  capture.hide();
  imageMode(CENTER);
  frameRate(4);
}

function draw() {
  //tint(252, 148, 124);
  image(capture, mouseX, mouseY, capture.width, capture.height);
  filter(GRAY);
}
