const fireworks = [];
let gravity;

let title_colour_index
let title_colour_options;
let title_font;

let main_font;

const kiss_face = '😘';
const normal_face = '🙂';
let current_emoji = normal_face;

let current_character = 0;

let message = 'Happy New Year Prithi,\nhope this counts as a New Years Kiss :)';

let firework_sound;

function preload(){
    title_font = loadFont('assets/PrajuritSnowman.otf');
    firework_sound = loadSound('assets/firework.mp3');

    main_font = loadFont('assets/Pacifico-Regular.ttf');

    title_colour_index = 0;
    title_colour_options = [
        [255, 71, 73],
        [26, 246, 109],
        [54, 69, 254]
    ];
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    gravity = createVector(0, 0.05); //0.2
    stroke(255);
    strokeWeight(4);
    background(0);

    textAlign(CENTER);

    setInterval(() => {
        title_colour_index++;
        if(title_colour_index >= title_colour_options.length){
            title_colour_index = 0;
        }
    }, 750);

    setInterval(() => {
        if(current_emoji == kiss_face){
            current_emoji = normal_face;
        }else{
            current_emoji = kiss_face;
        }
    }, 1000);

    firework_sound.loop();
}

function draw(){
    colorMode(RGB);
    background(0, 0, 0, 25);

    strokeWeight(0);
    textSize(100);

    textFont('Arial');
    text(current_emoji, width * 0.5, height * 0.5);

    fill(title_colour_options[title_colour_index]);
    textFont(title_font);
    text("Happy New Year", width * 0.5, height * 0.15);

    fill(250, 249, 246);
    textFont(main_font);
    textSize(50);
    text(message.substring(0, current_character), width * 0.5, height * 0.75);
    current_character += 0.15;

    if (random(1) < 0.04) {
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}