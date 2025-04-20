var song;
//var pic;
var capture;
var analyzer;

function preload() {
  song = loadSound ('data/zero-gravity.wav'); 
  //pic = loadImage ('data/STAMPY.JPG'); 
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  //background(252, 148, 124);
  capture = createCapture(VIDEO);
  capture.hide();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  imageMode(CENTER, CENTER);
  fill(16, 13, 2);
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255, 10);
  //fill(16, 13, 2);
  var volume = analyzer.getLevel();
  volume*=700;
  image(capture,width/2,height/2,volume,volume);
  filter(GRAY);
  //image(pic,width/2,height/2,volume,volume);
  image(capture, volume*2);
  //image(pic, volume*1.5);
  translate(width/2,height/2);
  textX=map(volume, 0, 400, 0, windowWidth);
  textY=map(volume, 0, 400, 0, windowHeight);
  //text('do you like my song?', 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    //background(255);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    //background(0);
    song.loop();
    song.play(); 
  }
}
