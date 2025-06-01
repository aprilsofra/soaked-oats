//Code sourced and modified from Kristine Gudmundsen's Github for CodeWords 2020. Special thanks to her.

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
let pic11;
let pic12;
let pic13;
let pic14;
let pic15;
let pic16;
let pic17;
let pic18;
let pic19;
let pic20;
let pic21;
let pic22;
let pic23;
let pic24;
let pic25;
let pic26;
let pic27;
let pic28;
let pic29;
let pic30;
let pic31;
let pic32;

let music;
let easycam;

let scrollZ = 0;
let scrollSpeed = 0.5;
let scrollDelay = 65000;
let autoScrollEnabled = true;

function preload(){
  pic1=loadImage('data/pic_1.jpeg');
  pic2=loadImage('data/pic_2.jpeg');
  pic3=loadImage('data/pic_3.jpeg');
  pic4=loadImage('data/pic_4.jpeg');
  pic5=loadImage('data/pic_5.jpeg');
  pic6=loadImage('data/pic_6.jpeg');
  pic7=loadImage('data/pic_7.jpeg');
  pic8=loadImage('data/pic_8.jpeg');
  pic9=loadImage('data/pic_9.jpeg');
  pic10=loadImage('data/pic_10.jpeg');
  pic11=loadImage('data/pic_11.jpeg');
  pic12=loadImage('data/pic_12.jpeg');
  pic13=loadImage('data/pic_13.jpeg');
  pic14=loadImage('data/pic_14.jpeg');
  pic15=loadImage('data/pic_15.jpeg');
  pic16=loadImage('data/pic_16.jpeg');
  pic17=loadImage('data/pic_17.jpeg');
  pic18=loadImage('data/pic_18.jpeg');
  pic19=loadImage('data/pic_19.jpeg');
  pic20=loadImage('data/pic_20.jpeg');
  pic21=loadImage('data/pic_21.jpeg');
  pic22=loadImage('data/pic_22.jpeg');
  pic23=loadImage('data/pic_23.jpeg');
  pic24=loadImage('data/pic_24.jpeg');
  pic25=loadImage('data/pic_25.jpeg');
  pic26=loadImage('data/pic_26.jpeg');
  pic27=loadImage('data/pic_27.jpeg');
  pic28=loadImage('data/pic_28.jpeg');
  pic29=loadImage('data/pic_29.jpeg');
  pic30=loadImage('data/pic_30.jpeg');
  pic31=loadImage('data/pic_31.jpeg');
  pic32=loadImage('data/pic_32.jpeg');
  
  music=loadSound('data/Ambient_Music.mp3');
}

function setup() {
  document.oncontextmenu =()=> false;
  createCanvas(windowWidth, windowHeight, WEBGL);
  easycam=createEasyCam();
  easycam.setDistance(7000);
  easycam.setZoomScale(0.005);
  easycam.setPanScale(0.005);
  amplitude=new p5.Amplitude();

}

function draw() {
  background(0);

//The following code has been provided by ChatGPT
  if (autoScrollEnabled && millis() > scrollDelay && scrollZ < 6400) {
    scrollZ -= scrollSpeed;
    if (scrollZ > 6400) scrollZ = 6400;
  }

  translate(0, 0, -scrollZ); 
  
  let imgAspect = 3024 / 1308;
  let planeHeight = height / 5; // or use a number like 200
  let planeWidth = planeHeight * imgAspect;
//

  push();
  translate(0,0,6200);
  texture(pic1);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,6000);
  texture(pic2);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,5800);
  texture(pic3);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,5600);
  texture(pic4);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,5400);
  texture(pic5);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,5200);
  texture(pic6);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,5000);
  texture(pic7);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,4800);
  texture(pic8);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,4600);
  texture(pic9);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,4400);
  texture(pic10);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,4200);
  texture(pic11);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,4000);
  texture(pic12);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,3800);
  texture(pic13);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,3600);
  texture(pic14);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,3400);
  texture(pic15);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,3200);
  texture(pic16);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,3000);
  texture(pic17);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,2800);
  texture(pic18);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,2600);
  texture(pic19);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,2400);
  texture(pic20);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,2200);
  texture(pic21);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,2000);
  texture(pic22);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,1800);
  texture(pic23);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,1600);
  texture(pic24);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,1400);
  texture(pic25);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,1200);
  texture(pic26);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,1000);
  texture(pic27);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,800);
  texture(pic28);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,600);
  texture(pic29);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,400);
  texture(pic30);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,200);
  texture(pic31);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
  
  push();
  translate(0,0,0);
  texture(pic32);
  noStroke();
  plane(planeWidth, planeHeight);
  pop();
}

function mouseWheel() {
  autoScrollEnabled = false;
  
  let state = easycam.getState();
}

function mouseClicked() {
  if (!music.isPlaying()) {
    music.loop();
    music.setVolume(0.5);
  }
}
