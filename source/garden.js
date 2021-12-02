//Uses p5.js library to create a garden planner

let plant1;
let plantName;
let plantSize;


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

  //update plant size outside of garden.js file
  var plantSizeFunction = function setPlantSize(input) {
    plantSize = input;
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
        if(plantSize == null) {
            this.size = 10;
        } else {
            this.size = plantSize;
        }

    }
    drawPlant() {
        rectMode(CENTER);
        noStroke();
        fill(10,250,10);
        var size = this.size;

        rect(this.xLoc,this.yLoc,size, size*2);
        ellipse(this.xLoc+ size/2 + 5, this.yLoc - size, size*2, size*3,size);
        ellipse(this.xLoc - size/2 - 5, this.yLoc - size, size*2,size*3,size);

        fill(255);
        textSize(20);
        text(this.name, this.xLoc - 20, this.yLoc + 30);
        console.log(this.name);

    }

}
