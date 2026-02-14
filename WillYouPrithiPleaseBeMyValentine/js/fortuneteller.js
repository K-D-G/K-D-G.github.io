class FortuneTeller{
    constructor(){
        this.teller = loadImage('assets/teller_image.png');
        this.font = loadFont('assets/bannerfont.ttf');
        this.pointer = loadImage('assets/pointer.png');
        this.button_font = loadFont('assets/Vogue.ttf');

        this.bulb_colour = null;

        this.yes_location = [width * 0.4, height * 0.8];
        this.pointer_location = [width * 0.5, height * 0.6];
        this.yes_pointer_angle = atan(abs(this.yes_location[0] - this.pointer_location[0]) / abs(this.yes_location[1] - this.pointer_location[1]));

        this.theta = 0;
        this.speed = 0;

        this.first_done = false;
        this.done = false;
    }

    update(){
        this.theta += this.speed * deltaTime;
        this.theta = min(this.theta, this.yes_pointer_angle);

        if(this.theta == this.yes_pointer_angle && !this.first_done){
            this.first_done = true;
            setTimeout(() => {
                this.done = true;
                frameCount = 0;
            }, 1000);
        }
    }

    show(){
        this.lightbulb(this.yes_location[0], this.yes_location[1], 'YES', this.bulb_colour);
        this.lightbulb(width * 0.6, height * 0.8, 'NO');

        imageMode(CENTER);
        image(this.teller, width * 0.5, height * 0.4, height * 0.3, height * 0.3);

        noStroke();
        fill(254, 198, 211);
        textFont(this.font);
        textAlign(CENTER);
        textSize(32);
        text('Will You Prithi Please\nBe My Valentine?', width * 0.5, height * 0.15);
    
        push();
        translate(this.pointer_location[0], this.pointer_location[1]);
        rotate(PI);
        rotate(this.theta);
        image(this.pointer, 0, 0, height * 0.15, height * 0.15);
        pop();

        // noFill();
        // strokeWeight(25);
        // stroke(254, 198, 211);
        // rectMode(CENTER);
        // rect(width * 0.5, height * 0.5, height * 0.5, height * 0.5);

    }

    lightbulb(x, y, _text, colour){
        push();
        colorMode(HSB, 360, 100, 255);
        noStroke();
        translate(x, y);


        if(colour){
            noFill();
            strokeWeight(4);
            let grad = 0;
            for (let i = 1; i < 400; i+=1) {
                stroke(colour[0], colour[1], colour[2] - grad);
                circle(0, 0, i);
                grad += 1;
            }
        }


        rectMode(CORNER);
        if(colour){
            fill(colour);
        }else{
            fill(0, 0, 100);
        }
        circle(0, 0, 100);
        rect(-25, 25, 50, 40, 10);
        fill(180);
        rect(-25, 70, 50, 10, 10);
        rect(-25, 85, 50, 10, 10);
        rect(-14,100, 28, 10, 10);

        textSize(16);
        textFont(this.button_font);
        text(_text, 0, 0);
        pop();
    }

    pressed(){
        this.bulb_colour = [98, 93, 255];
        this.speed = 0.0001;

    }
};