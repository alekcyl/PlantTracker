let plant1;
function setup() {
    createCanvas(400, 400);
    background(155,103,60);
  }
  
  function draw() {

  }
function mousePressed() {
    //fill(10,250,10);
    //rectMode(CENTER);
    //rect(mouseX,mouseY, 50,50);
    plant1 = new plant(mouseX,mouseY, "name");
    plant1.drawPlant(mouseX,mouseY);
}
class plant {
    constructor(xLoc, yLoc, name) {
        this.xLoc = xLoc;
        this.yLoc = yLoc;
        this.name = name;
    }
    drawPlant() {
        rectMode(CENTER);
        noStroke();
        fill(10,250,10);

        rect(this.xLoc,this.yLoc,10,20);

     
        ellipse(this.xLoc+ 10, this.yLoc - 15, 20,30,10);
  
        
        ellipse(this.xLoc - 10, this.yLoc - 15, 20,30,10);



   


    }
}