function setup() {
  createCanvas(windowWidth, windowHeight);
  background(252, 148, 124);
  stroke(252, 148, 124);
  frameRate(4);
}
function draw() {
  fill (16, 13, 2);
  circle(random(width), random(height), random(20, 250));
}
