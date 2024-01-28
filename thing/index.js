const STEM_HEIGHT = 200;
const LEAF_SIZE = 25;
const FRAME_GROWTH = 400;

class Flower{

  constructor(colour){
    this.colour = colour;
  }

  show(){
    stroke(45, 90, 90);
    fill(45, 90, 90);
    strokeWeight(3);
    line(0, -STEM_HEIGHT / 4, 0, 3 * STEM_HEIGHT / 4);

    noStroke();
    ellipse(0 + LEAF_SIZE * 0.5, STEM_HEIGHT * 0.4, LEAF_SIZE, LEAF_SIZE * 0.5);
    ellipse(0 - LEAF_SIZE * 0.5, STEM_HEIGHT * 0.4, LEAF_SIZE, LEAF_SIZE * 0.5);

    push();
    fill(this.colour);
    translate(0, 3 * STEM_HEIGHT / 4);
    noStroke();

    //Petals
    for(let i = 0; i < 10; i++){
      if(frameCount <= FRAME_GROWTH){
        ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
      }else{
        ellipse(0, 10 + FRAME_GROWTH / 20, 10 + FRAME_GROWTH / 40, 20 + FRAME_GROWTH / 20);
      }
      rotate(PI / 5);
    }

    //Middle bit
    fill(30);
    if(frameCount <= FRAME_GROWTH){
      ellipse(0, 0, 10 + frameCount / 20);
    }else{
      ellipse(0, 0, 10 + FRAME_GROWTH/20);
    }

    pop();
  }
}

let current_character = 0;
let message = "I would give you flowers in person but yk, hope these are ok instead :)";
let amount = 5;
let colours = [[230, 190, 230, 240], [235, 194, 204, 240], [245, 204, 174, 240], [245, 174, 154, 240], [245, 174, 184, 240]];
let flowers = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < amount; i++){
    append(flowers, new Flower(colours[i]));
  }
}


function draw(){
  background(51);
  noStroke();
  fill(249, 249, 240);
  textSize(20);
  textFont('Courier');
  textAlign(LEFT, TOP);
  text(message.substring(0, current_character), width * 0.2, height * 0.2);
  current_character += 0.15;

  push();
  translate(width * 0.5, height * 0.6);
  rotate(2 * PI / 3 + PI/32);
  for(let i = 0; i < amount; i++){
    rotate(PI / (2 * amount));
    flowers[i].show();
  }

  pop();

  push();
  translate(width * 0.5, height * 0.6);
  noStroke();
  fill(255, 191, 0);
  rectMode(CENTER);
  rect(0, 0, 20, 15, 2);

  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
