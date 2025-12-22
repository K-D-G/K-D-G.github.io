window.onload = () => {
    (() => {
        var card = $('card');
        var open_button = $('open');
        var close_button = $('close');
        var timer = null;

        let card_body = new p5(CardBody);
        let background = new p5(Background);

        open_button.addEventListener('click', () => {
            card_body.reset();
            let song = $('christmas_song');
            song.muted = false;
            song.loop = true;
            song.play();

            card.setAttribute('class', 'open-half');

			if(timer){
				clearTimeout(timer);
			}
			timer=setTimeout(() => {
				card.setAttribute('class', 'open-fully');
				timer=null;
			}, 1000);
        });

		close_button.addEventListener('click', () => {
			card.setAttribute('class', 'close-half');
			if(timer){
				clearTimeout(timer);
			}

			timer = setTimeout(() => {
				card.setAttribute('class', '');
				timer = null;
			}, 1000);

		});
    })();
}