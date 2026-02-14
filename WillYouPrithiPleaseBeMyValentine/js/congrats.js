class Congrats{
    constructor(){
        this.flakes = [];
        this.message = "Thank you for being my Valentine\nI'm so lucky to have you ❤️\n(Too bad if you said no it doesn't work:))";
        this.current_character = 0;
        this.prithi = loadImage('assets/prithi.png');

        this.flower_colours = [
            [203, 6, 42],
            [223, 224, 217],
            [203, 6, 42],
            [223, 224, 217],
            [203, 6, 42]
        ];

        this.flowers = new Flowers(createVector(width * 0.5, height * 0.6), this.flower_colours); 
    }

    update(){

    }

    show(){
        let t = frameCount / 120; // update time

        // create a random number of snowflakes each frame
        for (let i = 0; i < random(5); i++) {
            this.flakes.push(new Flake(this)); // append snowflake object
        }

        // loop through snowflakes with a for..of loop
        for (let flake of this.flakes) {
            flake.update(t); // update snowflake position
            flake.display(); // draw snowflake
        }

        this.flowers.show();

        fill(250, 249, 246);
        textFont('Verdana');
        textAlign(CENTER);
        textSize(25);
        text(this.message.substring(0, this.current_character), width * 0.5, height * 0.15);
        this.current_character += 0.2;


        image(this.prithi, width * 0.5, height * 0.8, width * 0.2, height * 0.3);
    }
}