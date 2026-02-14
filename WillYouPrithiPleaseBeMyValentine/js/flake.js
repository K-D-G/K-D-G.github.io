class Flake {
  
  constructor(parent){
    this.parent = parent;
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 10);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(255), random(255), random(255));
  }

  update(time) {
    // x position follows a circle
    let w = 0.8; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.7);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = this.parent.flakes.indexOf(this);
      this.parent.flakes.splice(index, 1);
    }
  };

  display() {
    fill(this.color);
    ellipse(this.posX, this.posY, this.size);
  };
}
