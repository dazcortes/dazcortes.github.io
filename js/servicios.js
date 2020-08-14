


window.addEventListener("load", function(){
	setTimeout(function(){
		$('.load-page').hide('slow');
		gsap.from(".loadimg2", {opacity: 0, x: 1000, duration: 3})
		gsap.from(".contw", {opacity: 0, y: -1000, duration: 3})
		gsap.from(".conts", {opacity: 0, x: -1000, duration: 3})
		gsap.from(".contp", {opacity: 0, x: 1000, duration: 3})
		$('.globr').addClass('globr2');
		$('.globr').removeClass('globr');
		$('.txtglob').addClass('txtglob2');
		$('.txtglob').removeClass('txtglob');
	}, 500);
    
});


var sonido_pop1 = new Howl({
	src: ["assets/sonidos/bur1.mp3"],
	volume: 0.5
});
var sonido_pop2 = new Howl({
	src: ["assets/sonidos/bur2.mp3"],
	volume: 0.5
});
var sonido_pop3 = new Howl({
	src: ["assets/sonidos/bur3.mp3"],
	volume: 0.5
});
var sonido_bien = new Howl({
	src: ["assets/sonidos/bien.mp3"],
	volume: 0.5
});

function pop1(){
	sonido_pop1.play();
}
function pop2(){
	sonido_pop2.play();
}
function pop3(){
	sonido_pop3.play();
}

$(".drag").draggable({
  opacity: 1,
  helper: "clone",
  revert: "invalid",
  cursor: "move",
  start: function (event, ui) {
  	$('.drop').addClass('robotactivebett');
  },
  stop: function (event, ui) {
  	//console.log(event.target.id);
  	$('.drop').removeClass('robotactivebett');
  }

});

$(".drop").droppable({
	hoverClass: "hover-it",
	classes: {
	  "ui-droppable-hover": "ui-state-hover",
	  "ui-droppable-active": "ui-state-default"
	},
  drop: function (event, ui) {
  	console.log(ui.draggable[0]);  
  		sonido_bien.play();
  		if (ui.draggable[0].id == 'web') {
  		 	$('.modalservic').css({'display':'flex'});
  		 	$('.modalservic').css({'background':'#FF9800'});
  		 	$('.titlemodalservic').html('Paginas web.');
  		 	$('.txtmodalserv2').html('Nuestras paginas interactivas son la mejor opcion, tus clientes podran interactuar con tu pagina y producto, diseñamos y realizamos cualquier cosa que te puedas imaginar.');
  		 	$('.txtmodalserv1').html('Quieres dar a conocer tu empresa de una manera creativa y profesional? donde muestres quienes son y a que se dedican? así como un catálogo de productos y/o servicios?');
  		}
  		if (ui.draggable[0].id == 'sistemas') {
  		 	$('.modalservic').css({'display':'flex'});
  		 	$('.modalservic').css({'background':'#009688'});
  		 	$('.titlemodalservic').html('Sistemas a la medida.');
  		 	$('.txtmodalserv2').html('Durante el proceso, trabajamos al lado del cliente para validar cada parte del desarrollo con los usuarios finales, y elegimos las tecnologías más adecuadas para su proyecto.');
  		 	$('.txtmodalserv1').html('Esto nos permite diseñar sistemas eficientes y apegados a los procesos de la empresa.Llámanos, presupuestos sin compromiso.');
  		}
  		if (ui.draggable[0].id == 'puntov') {
  		 	$('.modalservic').css({'display':'flex'});
  		 	$('.modalservic').css({'background':'#e91e63'});
  		 	$('.titlemodalservic').html('Puntos de venta.');
  		 	$('.txtmodalserv2').html('La solución tecnológica que tu negocio necesita, un software en tu equipo de punto de venta que te permite ahorrar tiempo, llevar un control de tus ventas de manera precisa, controlar tu inventario y por lo tanto aumentar tu productividad.');
  		 	$('.txtmodalserv1').html('Tan fácil como: busca un producto con tu lectora láser, selecciónalo, vende, imprime tu ticket y ¡listo!');
  		}
  }
});

$( ".menuopen" ).click(function() { 
	$('.menu').show('slow');
	sonido_bien.play();
});

$( ".equis" ).click(function() { 
	$('.menu').hide('slow');
	sonido_bien.play();
});

$( ".serviciosmenu" ).click(function() { 
	sonido_bien.play();
	setTimeout(function(){ location.href='servicios.html'; }, 1000);
});
$( ".clasesmenu" ).click(function() { 
	sonido_bien.play();
	setTimeout(function(){ location.href='clases.html'; }, 1000);
});
$( ".productsmenu" ).click(function() { 
	sonido_bien.play();
	setTimeout(function(){ location.href='productos.html'; }, 1000);
});
$( ".contactomenu" ).click(function() { 
	sonido_bien.play();
	setTimeout(function(){ location.href='contacto.html'; }, 1000);
});

$( ".logoimg img" ).click(function() { 
	sonido_bien.play();
	setTimeout(function(){ location.href='index.html'; }, 1000);
});

$( ".backimg" ).click(function() { 
	$('.backimg').css({'padding':'1vw'});
	window.history.back();
});

$( ".cerrarservic" ).click(function() { 
	$('.modalservic').css({'display':'none'});
});