
window.addEventListener('load',init);


var areajuego = document.getElementById('areajuego');
	var ctx = areajuego.getContext('2d'); //contexto, lapiz que dibuja, luego se accede al contexto de area, con parametro 2d
	var img = document.getElementById('foto');
	var luchoimg = document.getElementById('lucho');
	var x = 0;
	var y = 0;
	var lucho = 0;
	

	

	function init(){
		console.log("cargado");
	}

	function crea(){
		x = Math.floor((Math.random() * 800) + 1);
		y =  Math.floor((Math.random() * 450) + 50);
		ctx.drawImage(img,x,y,50,50); //imagen, x, y, width, height	
		lucho += 1;
		if (lucho > 5){
		ctx.drawImage(luchoimg,x,y,100,100);
		lucho = 0;
		}
	}

	function borrar(canvas,ctx){
		ctx.clearRect(0 ,0 ,canvas.width,canvas.height);
	}


	



