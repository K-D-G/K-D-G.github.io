const STEM_HEIGHT = 200;
const LEAF_SIZE = 25;
const FRAME_GROWTH = 400;

class Flower{

  constructor(p, colour){
    this.p = p;
    this.colour = colour;
  }

  show(){
    this.p.stroke(45, 90, 90);
    this.p.fill(45, 90, 90);
    this.p.strokeWeight(3);
    this.p.line(0, -STEM_HEIGHT / 4, 0, 3 * STEM_HEIGHT / 4);

    this.p.noStroke();
    this.p.ellipse(0 + LEAF_SIZE * 0.5, STEM_HEIGHT * 0.4, LEAF_SIZE, LEAF_SIZE * 0.5);
    this.p.ellipse(0 - LEAF_SIZE * 0.5, STEM_HEIGHT * 0.4, LEAF_SIZE, LEAF_SIZE * 0.5);

    this.p.push();
    this.p.fill(this.colour);
    this.p.translate(0, 3 * STEM_HEIGHT / 4);
    this.p.noStroke();

    //Petals
    for(let i = 0; i < 10; i++){
        if(this.p.frameCount <= FRAME_GROWTH){
            this.p.ellipse(0, 10 + this.p.frameCount / 20, 10 + this.p.frameCount / 40, 20 + this.p.frameCount / 20);
        }else{
            this.p.ellipse(0, 10 + FRAME_GROWTH / 20, 10 + FRAME_GROWTH / 40, 20 + FRAME_GROWTH / 20);
        }
        this.p.rotate(this.p.PI / 5);
    }

    //Middle bit
    this.p.fill(30);
    if(this.p.frameCount <= FRAME_GROWTH){
        this.p.ellipse(0, 0, 10 + this.p.frameCount / 20);
    }else{
        this.p.ellipse(0, 0, 10 + FRAME_GROWTH/20);
    }

    this.p.pop();
  }
};

class Flowers{
    constructor(p, pos, colours){
        this.p = p;
        this.pos = pos;
        this.colours = colours;
        this.flowers = [];

        for(let i = 0; i < this.colours.length; i++){
            this.flowers.push(new Flower(this.p, this.colours[i]));
        }
    }

    show(){
        this.p.push();
        //width * 0.5, height * 0.6
        this.p.translate(this.pos);
        this.p.rotate(2 * this.p.PI / 3 + this.p.PI/32);
        for(let i = 0; i < this.flowers.length; i++){
            this.p.rotate(this.p.PI / (2 * this.flowers.length));
            this.flowers[i].show();
        }

        this.p.pop();

        this.p.push();
        this.p.translate(this.pos);
        this.p.noStroke();
        this.p.fill(255, 191, 0);
        this.p.rectMode(this.p.CENTER);
        this.p.rect(0, 0, 20, 15, 2);

        this.p.pop();
    }
};
