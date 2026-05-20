var kusamaColours=["yellow", "green", "blue", "red", "orange"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  noStroke();
  frameRate(3);
}


function draw() {
  fill (random(kusamaColours));
  circle(random(width), random(height), random(60, 300));
}
