let CardBody = (p) => {

    p.preload = () => {
        p.main_font = p.loadFont('assets/PlayfulChristmas.otf');
    }

    p.setup = () => {
        let parent = $('card-body');
        let c = p.createCanvas(parent.offsetWidth, parent.offsetHeight);
        c.parent('card-body');

        p.card = $('card');

        p.reset();

    }

    p.reset = () => {
        p.frameCount = 0;
        p.current_character = 0;
        p.message = "Merry Christmas Prithi\nI couldn't let you go without flowers,\nmissing you sm\n- Kieran xxx";

        p.flower_colours = [
            [203, 6, 42],
            [223, 224, 217],
            [203, 6, 42],
            [223, 224, 217],
            [203, 6, 42]
        ];
        
        p.flowers = new Flowers(p, p.createVector(p.width * 0.5, p.height * 0.6), p.flower_colours); 
    }

    p.draw = () => {
        if(!card.classList.contains("open-fully")){
            return;
        }
        p.clear();
        p.flowers.show();

        p.fill(0);
        p.textFont(p.main_font);
        p.textAlign(p.CENTER);
        p.textSize(25);
        p.text(p.message.substring(0, p.current_character), p.width * 0.5, p.height * 0.75);
        p.current_character += 0.15;
    }

    this.p = p;
}