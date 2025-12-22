let Background = (p) => {
    p.preload = () => {
        p.flakes = [];
        p.title_font = p.loadFont('assets/MerryChristmasFlake.ttf');
        
        p.title_colour_index = 0;
        p.title_colour_options = [
            [255, 71, 73],
            [26, 246, 109],
            [54, 69, 254]
        ];
    }

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();

        setInterval(() => {
            p.title_colour_index++;
            if(p.title_colour_index >= p.title_colour_options.length){
                p.title_colour_index = 0;
            }
        }, 750);
    }


    p.draw = () => {
        p.background(0);

        let t = p.frameCount / 60;
        for(let i = 0; i < p.random(5); i++){
            p.flakes.push(new Flake(p));
        }

        for(let flake of p.flakes){
            flake.update(t);
            flake.display();
        }

        p.fill(p.title_colour_options[p.title_colour_index]);
        p.textFont(p.title_font);
        p.textSize(100);
        p.textAlign(p.CENTER);
        p.text("Merry Christmas", p.width * 0.5, p.height * 0.15);
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
}