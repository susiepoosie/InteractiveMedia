let capture;

function setup() {
  createCanvas(1280, 960);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}


function draw() {
  background(0);
  image(capture, 0, 0);
  filter(THRESHOLD);
  filter(INVERT);
}
