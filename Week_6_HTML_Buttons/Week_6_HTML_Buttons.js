var button, otherbutton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(252, 148, 124);
  let button=createButton("PRESS THIS BUTTON");
  button.position(width/2.27, height/2.13);
  button.mousePressed(spawn);
}

function windowResized(){
 resizeCanvas(windowWidth, windowHeight);
 background(252, 148, 124);
}

function spawn(){
  background(252, 148, 124);
  let otherbutton=createButton("NO THIS BUTTON");
  otherbutton.position(random(width), random(height));
  otherbutton.mousePressed(spawn);
}
  
