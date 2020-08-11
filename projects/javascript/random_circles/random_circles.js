
function printf(string){
  fill(255, 0, 0);
  textSize(100);
  textAlign(CENTER);
  text(string, mouseX, mouseY);
}
function setup(){
  createCanvas(600, 600);
  background(0);
}

function draw(){
  for(var i=0; i<100; i++){
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
    ellipse(Math.floor(random(0, width)), Math.floor(random(0, height)), 10, 10);
  }
}
function mousePressed(){
  background(random(255), random(255), random(255));
}

function change_background(){
  background(random(255), random(255), random(255));
}
