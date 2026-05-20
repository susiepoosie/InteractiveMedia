var pic;
function preload() {
  pic = loadImage("pixel-mouse.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("white");
imageMode(CENTER, CENTER);
picSize(100, 100);
}


function draw() {
scale(2);
image(pic, mouseX/2, mouseY/2);
}