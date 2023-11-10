function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  fill("white")
  stroke("black")
  strokeWeight(1)  
  if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 30);
}
}
