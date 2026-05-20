let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(width/1, height/1);
  capture.hide();
}


function draw() {
  background(0);
  image(capture, 0, 0);
  filter(THRESHOLD);
  filter(INVERT);
}