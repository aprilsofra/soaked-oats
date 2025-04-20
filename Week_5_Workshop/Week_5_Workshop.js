let bottomImg, topImg;

function preload() {
    bottomImg = loadImage('./data/STAMPY_BW.JPG');
    topImg = loadImage('./data/STAMPY.JPG');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(252, 148, 124);
  bottomImg.resize(width, height);
  topImg.resize(width, height);
  //image(bottomImg, 0, 0);
}


function draw() {

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(252, 148, 124);
  bottomImg.resize(windowWidth, windowHeight);
  topImg.resize(windowWidth, windowHeight);
}

function mouseDragged() {
  copy(topImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}
