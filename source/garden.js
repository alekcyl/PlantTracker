let plant1;
let plantName;

function setup() {
    createCanvas(400, 400);
    background(155,103,60);

  }
  
  function draw() {

  }
var plantNameFunction = function setPlantName(input) {
    plantName = input;
    //console.log(plantName);
}

function mousePressed() {
    //fill(10,250,10);
    //rectMode(CENTER);
    //rect(mouseX,mouseY, 50,50);

    if(mouseY > 50) {
        plant1 = new plant(mouseX,mouseY, plantName);
        plant1.drawPlant(mouseX,mouseY, plantName);
    }
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

        fill(255);
        textSize(20);
        text(this.name, this.xLoc - 20, this.yLoc + 30);
        console.log(this.name);

    }

}
