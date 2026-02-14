/*
Idea is:

Fortune tell put a coin in with question being will you be my valentine
Love machine thing
*/

let t;
let c;

function setup(){
    createCanvas(windowWidth, windowHeight);
    t = new FortuneTeller();
    c = new Congrats();
}

function draw(){
    background(0);

    if(!t.done){
        t.update();
        t.show();
    }else{
        c.update();
        c.show();
    }
}

function touchStarted(){
    if(!t.done){
        t.pressed();
    }
}

function mousePressed(){
    if(!t.done){
        t.pressed();
    }
}


