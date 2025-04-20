var lang = navigator.language || 'en-US';
var myRec = new p5.SpeechRec(lang, gotSpeech); // new P5.SpeechRec object
//var myVoice = new p5.Speech(); // new P5.Speech object
var interim = true;
var continuous = true;
var runningText;
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
	// graphics stuff:
	createCanvas(windowWidth, windowHeight);
	background(252, 148, 124);
	fill(16, 13, 2);
	// instructions:
	textSize(32);
	textAlign(CENTER);
	text("say something", width / 2, height / 2);
	myRec.onResult = showResult;
	myRec.start(continuous, interim);
  
  //myVoice.speak("say something");

}

function draw() {
	// why draw when you can talk?
}

function showResult() {
	if (myRec.resultValue === true) {
		background(252, 148, 124);
		text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
		//myVoice.speak(myRec.resultString); // debug printer for voice options
		console.log(myRec.resultString);
	}
}

function gotSpeech() {
  if(myRec.resultValue) {
    
    createP(myRec.resultString);
    runningText=myRec.resultString;
  }
  fill(16, 13, 2);
}