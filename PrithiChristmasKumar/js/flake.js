class Flake{
    constructor(p){
        this.p = p;
        this.x = 0;
        this.y = this.p.random(-50, 0);
        this.initial_angle = this.p.random(0, 2 * this.p.PI);
        this.size = this.p.random(2, 10);
        
        this.radius = this.p.sqrt(this.p.random(this.p.pow(this.p.width, 2)));
        this.colour = this.p.color(255, 255, 255);
    }

    update(time){
        let w = 0.6;
        let angle = w * this.initial_angle;
        this.x =  this.p.width / 2 + this.radius * this.p.sin(angle);
        this.y += this.p.pow(this.size, 0.5);

        if(this.y > this.height){
            let index = this.p.flakes.indexOf(this);
            this.p.flakes.splice(index, 1);
        }
    }

    display(){
        this.p.fill(this.colour);
        this.p.ellipse(this.x, this.y, this.size);
    }
};