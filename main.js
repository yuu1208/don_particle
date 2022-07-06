image = ["good.png","ok.png"];

const w = document.getElementById('content');

w.addEventListener('click', function() {

	x = event.pageX;
	y = event.pageY;
	rand = Math.floor( Math.random() * image.length );

	console.log(rand, x, y);

	var don = new Audio('don.mp3');
	var abc = document.createElement('p');
	don.currentTime = 0;
	don.play();
	abc.innerHTML = "<img src='" + image[rand] + "'>";

	abc.style.top = y-100 + "px";
	abc.style.left = x-40 + "px";
	abc.style.position = "absolute";

	w.appendChild(abc);
	//setTimeout(w.firstChild.remove(), 1500);
	

});