function setup() {
    createCanvas(400, 400);
    background(155,103,60);
  }
  
  function draw() {

  }
function mousePressed() {
    fill(10,250,10);
    rectMode(CENTER);
    rect(mouseX,mouseY, 50,50);
}
class plant {
    constructor(xLoc, yLoc, name) {
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.name = name;
    }
    drawPlant() {

    }
}