//Code sourced and modified from https://editor.p5js.org/cmckinn9/sketches
//Face tracking library sourced from https://github.com/auduno/clmtrackr

let capture;
let tracker; 

function setup() {
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.elt.setAttribute('playsinline', ''); 
  capture.size(windowWidth, windowHeight);
  capture.hide();
  frameRate(5);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

}

function draw() {
  image(capture, 0, 0, windowWidth, windowHeight);
  filter(GRAY);

  let positions = tracker.getCurrentPosition(); 

  if (positions.length > 0) {
     noStroke();
     fill(252, 148, 124);
     textAlign(CENTER,CENTER);
     textSize(25);
     text("▼", positions[62][0], positions[62][1]);
   }

  if (positions.length > 0) {
     noStroke();
     fill(255);
     textAlign(RIGHT);
     textSize(35);
     text(">", positions[35][0], positions[35][1]);
   }
  
  if (positions.length > 0) {
     noStroke();
     fill(255);
     textAlign(LEFT);
     textSize(35);
     text("<", positions[39][0], positions[39][1]);
   }

}
