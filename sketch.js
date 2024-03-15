// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let ballsArray = [];
let ButtonState = false;
function setup() {
 
}

function draw() {

  createCanvas(windowWidth, windowHeight);

  background(40);
  rect(windowWidth/2-50,windowHeight/2-40,100,80);
  if (mouseIsPressed === true){
    if (ButtonState === false){
      if (mouseX > windowWidth/2-50 && mouseX < (windowWidth/2-50 +100)){
        if (mouseY > windowHeight/2-40 && mouseY < (windowHeight/2-40 + 80)){
          background(0);
          fill(random(255),random(255),random(255));
          
          for (let i = 0; i < ballsArray.length; i++){
            circle(ballsArray[i].x, ballsArray[i].y, ballsArray[i].diameter);
            ballsArray[i].x += ballsArray[i].dx; // X-Rate of change
            ballsArray[i].y += ballsArray[i].dy; // Y-Rate of Change
        
          }
        }
      }
    }
  }
  fill(255,255,255);
  rect(windowWidth/2-50,windowHeight/2-40,100,80);
}

function createBall() { 

  // Creates a temp ball obj
  let newBall = {
    x: random(width),
    y: random(height),
    diameter: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };

  if (newBall.x === windowWidth){

  }

  // Copying ball obj into the array
  ballsArray.push(newBall);

}

function mousePressed(){
  createBall()
  createBall()
  createBall()
  createBall()
}

function mouseIsPressed(){

}