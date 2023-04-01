var circle = document.getElementById("circle");
var timestart = 0;
var timeH1 = document.getElementById("time");

function showCircle()
{
	circle.style.display = 'block';
	circle.style.top = Math.random() * 500 + 'px';
	circle.style.left = Math.random() * 900 + 'px';
	circle.style.backgroundColor = randomColor();
	timestart = new Date().getTime();

}
showCircle();

function randomColor() {
	var s = '0123456789ABCDEF';
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color = color + s[Math.floor(Math.random( )* 16)]
	}
	
	return color;

}

circle.onclick = function(){
	circle.style.display = 'none';
	setTimeout(showCircle,2000);
	timeEnd = new Date().getTime();
	var time = (timeEnd - timestart )/1000;
	timeH1.innerHTML = time +'s';
}