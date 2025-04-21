var pic

function preload() {
  pic=loadImage('./data/Stamps-2-pix.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(252, 148, 124);
  //noStroke();
  frameRate(8);
  imageMode(CENTER, CENTER);
}


function draw() {
  for (let i=0; i<50; i++){
    //fill(random(255), random(255), random(255));
    image(pic, random(width), random(height));
  }
  loop();
}
