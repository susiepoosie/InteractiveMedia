var snoopy;

function preload(){
  snoopy=loadImage("data/snoopy-small.png");
}

function setup(){
createCanvas(windowWidth, windowHeight);
background("black");
imageMode(CENTER, CENTER);
}


function draw() {
scale(2);
image(snoopy, mouseX/2, mouseY/2);
}
