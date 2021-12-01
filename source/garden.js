//Uses p5.js library to create a garden planner

let plant1;
let plantName;

function setup() {
    createCanvas(425, 425);
    background(155,103,60);

    //create grid
    fill(color("#140d07"));

    for(i = 0; i < 7; i++) {
        //draw horizontal grid lines
        rect(0,i * 70, width, 5);

        //draw vertical grid lines
        rect(i* 70, 0, 5, height);
    }

    
  }
  
  function draw() {

  }
  //update plant name outside of garden.js file
var plantNameFunction = function setPlantName(input) {
    plantName = input;
}

function mousePressed() {

    if(mouseY > 25) {
        plant1 = new plant(mouseX,mouseY, plantName);
        plant1.drawPlant(mouseX,mouseY, plantName);
    }
}
//plant sprite object that is drawn on planner
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
