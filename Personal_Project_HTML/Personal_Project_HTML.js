//Code taken and modified from Kristine Gudmundsen's Github for CodeWords 2020. Special thanks to her.

let pic1;
let pic2;
let pic3;
let pic4;
let pic5;
let pic6;
let pic7;
let pic8;
let pic9;
let pic10;
var pics

let scrollZ = 0; // keeps track of how much we scroll
let scrollSpeed = 0.5;
let scrollDelay = 30000; // 30 seconds in milliseconds

var sizeVariable;
//var leadingVariable;
var positionVariable;
var dimensionsVariable;

function preload(){
  pic1=loadImage('./data/pic_1.jpeg');
  pic2=loadImage('./data/pic_2.jpeg');
  pic3=loadImage('./data/pic_3.jpeg');
  pic4=loadImage('./data/pic_4.jpeg');
  pic5=loadImage('./data/pic_5.jpeg');
  pic6=loadImage('./data/pic_6.jpeg');
  pic7=loadImage('./data/pic_7.jpeg');
  pic8=loadImage('./data/pic_8.jpeg');
  pic9=loadImage('./data/pic_9.jpeg');
  pic10=loadImage('./data/pic_10.jpeg');
}

function setup() {
  document.oncontextmenu =()=> false;
  createCanvas(windowWidth, windowHeight, WEBGL);
  easycam=createEasyCam();
  pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];
  //sizeVariable=(map(height,550,1400,34,200));
  //leadingVariable=(map(height,550,1400,26,350));
  positionVariable=(map(height,550,1400,26,300));
  dimensionsVariable=(map(height,550,1400,height/3,height+300));
  
  myPic1=createGraphics(width/1.25,dimensionsVariable);
  myPic1.background(0);
  myPic1.tint(255,127);
  //myPic1.resize(sizeVariable)
  //myPic1.fill(0);
  myPic1.noStroke(0);
  //myPic1.fill(pics[0],width/51,positionVariable);
  
  myPic2=createGraphics(width/1.25,dimensionsVariable);
  myPic2.background(0);
  //myPic2.resize(sizeVariable)
  myPic2.fill(0);
  myPic2.noStroke(0);
  myPic2.image(pics[1],width/51,positionVariable);
  
  myPic3=createGraphics(width/1.25,dimensionsVariable);
  myPic3.background(0);
  //myPic3.resize(sizeVariable)
  myPic3.fill(0);
  myPic3.noStroke(0);
  myPic3.image(pics[2],width/51,positionVariable);
  
  myPic4=createGraphics(width/1.25,dimensionsVariable);
  myPic4.background(0);
  //myPic4.resize(sizeVariable)
  myPic4.fill(0);
  myPic4.noStroke(0);
  myPic4.image(pics[3],width/51,positionVariable);
  
  myPic5=createGraphics(width/1.25,dimensionsVariable);
  myPic5.background(0);
  //myPic5.resize(sizeVariable)
  myPic5.fill(0);
  myPic5.noStroke(0);
  myPic5.image(pics[4],width/51,positionVariable);
  
  myPic6=createGraphics(width/1.25,dimensionsVariable);
  myPic6.background(0);
  //myPic6.resize(sizeVariable)
  myPic6.fill(0);
  myPic6.noStroke(0);
  myPic6.image(pics[5],width/51,positionVariable);
  
  myPic7=createGraphics(width/1.25,dimensionsVariable);
  myPic7.background(0);
  //myPic7.resize(sizeVariable)
  myPic7.fill(0);
  myPic7.noStroke(0);
  myPic7.image(pics[6],width/51,positionVariable);
  
  myPic8=createGraphics(width/1.25,dimensionsVariable);
  myPic8.background(0);
  //myPic8.resize(sizeVariable)
  myPic8.fill(0);
  myPic8.noStroke(0);
  myPic8.image(pics[7],width/51,positionVariable);
  
  myPic9=createGraphics(width/1.25,dimensionsVariable);
  myPic9.background(0);
  //myPic9.resize(sizeVariable)
  myPic9.fill(0);
  myPic9.noStroke(0);
  myPic9.image(pics[8],width/51,positionVariable);
  
  myPic10=createGraphics(width/1.25,dimensionsVariable);
  myPic10.background(0);
  //myPic10.resize(sizeVariable)
  myPic10.fill(0);
  myPic10.noStroke(0);
  myPic10.image(pics[9],width/51,positionVariable);
  
  //amplitude=new p5.Amplitude();
}


function draw() {
  background(0);
  if (millis() > scrollDelay) {
  scrollZ += scrollSpeed;
  }
  if (scrollZ > 1000) {
  scrollZ = 0; // restart scroll
  }
  translate(0, 0, -620 + scrollZ); // Reverse scroll
  
  push();
  translate(0,0,1000);
  texture(pic1);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,900);
  texture(pic2);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,800);
  texture(pic3);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,700);
  texture(pic4);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,600);
  texture(pic5);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,500);
  texture(pic6);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,400);
  texture(pic7);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,300);
  texture(pic8);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,200);
  texture(pic9);
  noStroke();
  plane(width/10,width/14);
  pop();
  
  push();
  translate(0,0,100);
  texture(pic10);
  noStroke();
  plane(width/10,width/14);
  pop();
  
}

function mouseWheel(){
  let state=easycam.getState();
}
