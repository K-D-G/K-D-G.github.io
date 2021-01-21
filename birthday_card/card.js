// snowflake class
class Flake{
  constructor(p){
  	this.p=p
    this.posX=0;
    this.posY=this.p.random(-50, 0);
    this.initialangle=this.p.random(0, 2 * this.p.PI);
    this.size=this.p.random(2, 10);

    this.radius=this.p.sqrt(this.p.random(this.p.pow(this.p.width/2, 2)));
    this.color=this.p.color(this.p.random(255), this.p.random(255), this.p.random(255));
  }

  update(time){
    let w=0.6;
    let angle=w*time+this.initialangle;
    this.posX=this.p.width/2+this.radius*this.p.sin(angle);
    this.posY+=this.p.pow(this.size, 0.5);
    if(this.posY>this.p.height){
      let index=this.p.flakes.indexOf(this);
      this.p.flakes.splice(index, 1);
    }
  };

  display() {
    this.p.fill(this.color);
    this.p.ellipse(this.posX, this.posY, this.size);
  };
}


let Background=function(p){
	p.preload=function(){
		p.flakes=[];
	}
	p.setup=function(){
		p.createCanvas(window.innerWidth, window.innerHeight);
		p.noStroke();
	}

	p.draw=function(){
		p.clear();

		let t=p.frameCount/60;
	  	for(let i=0; i<p.random(5); i++){
	    	p.flakes.push(new Flake(p));
	  	}
	  	for(let flake of p.flakes){
	    	flake.update(t);
	    	flake.display();
	  	}
	}
}

let background=new p5(Background);

window.onload=function(){
	(function(){
		function $(id){
			return document.getElementById(id);
		}

		var card=$('card'), open_button=$('open'), close_button=$('close'), timer=null;
		open_button.addEventListener('click', function(){
			let song=document.getElementById('birthday_song');
			song.muted=false;
			song.loop=true;
			song.play();
			card.setAttribute('class', 'open-half');
			if(timer){
				clearTimeout(timer);
			}
			timer=setTimeout(function(){
				card.setAttribute('class', 'open-fully');
				timer=null;
			}, 1000);
		});

		close_button.addEventListener('click', function(){
			card.setAttribute('class', 'close-half');
			if(timer){
				clearTimeout(timer);
			}

			timer=setTimeout(function(){
				card.setAttribute('class', '');
				timer=null;
			}, 1000);

		});
	})();
}
