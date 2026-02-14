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
};

class Flowers{
    constructor(pos, colours){
        this.pos = pos;
        this.colours = colours;
        this.flowers = [];

        for(let i = 0; i < this.colours.length; i++){
            this.flowers.push(new Flower(this.colours[i]));
        }
    }

    show(){
        push();
        //width * 0.5, height * 0.6
        translate(this.pos);
        rotate(2 * PI / 3 + PI/32);
        for(let i = 0; i < this.flowers.length; i++){
            rotate(PI / (2 * this.flowers.length));
            this.flowers[i].show();
        }

        pop();

        push();
        translate(this.pos);
        noStroke();
        fill(255, 191, 0);
        rectMode(CENTER);
        rect(0, 0, 20, 15, 2);

        pop();
    }
};