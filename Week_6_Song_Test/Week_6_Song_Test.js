var song; //initiating our variable
var analyzer;

function preload() {
 song = loadSound ('data/zero-gravity.wav'); 
}

function setup() {
  //song = loadSound ('data/zero-gravity.wav'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(252, 148, 124, 10);
  //fill(120);
  var volume = analyzer.getLevel();
  volume*=300;
  //ellipse(width/2,height/2,volume,volume);
  fill(16, 13, 2);
  textSize(volume*1.5);
  translate(width/2,height/2);
  textX=map(volume, 0, 400, 0, windowWidth);
  textY=map(volume, 0, 400, 0, windowHeight);
  rotate(volume);
  text('do you like my song?', 0, 0);
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
