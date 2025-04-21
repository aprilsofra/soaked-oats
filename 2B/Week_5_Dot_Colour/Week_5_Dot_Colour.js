let pic, dotcolour;

function preload() {
  pic=loadImage("data/Stamps+Me.jpg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
pic.resize(width, 0);
//frameRate(1000);
}


function draw() {
//image(pic, 0, 0, width, height);
let x = random(width);
let y = random(height);
noStroke();
dotcolour=pic.get(x, y);
fill(dotcolour);
circle(x, y, random(20,80));
}
