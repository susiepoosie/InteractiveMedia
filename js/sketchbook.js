function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  
  function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(5)
  }
  
  function mousePressed() {
    background(random(256), random(256), random(256));
  }