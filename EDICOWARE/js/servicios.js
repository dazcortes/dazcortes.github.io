


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
  	$('.drop').removeClass('robotinactive');
  	$('.drop').addClass('robotactive');
  	$('.txtglob2').addClass('txtglob');
  	$('.txtglob').removeClass('txtglob2');
  	$('.globr2').addClass('globr');
	$('.globr').removeClass('globr2');
  	setTimeout(function(){
  		gsap.to(".loadimg2", {opacity: 0, x: 1000, duration: 3})
  		gsap.to(".contw", {opacity: 0, y: -1000, duration: 3})
  		gsap.to(".conts", {opacity: 0, x: -1000, duration: 3})
  		gsap.to(".contp", {opacity: 0, x: 1000, duration: 3})
  		sonido_bien.play();
  		if (ui.draggable[0].id == 'clases') {setTimeout(function(){ location.href='clases.html';}, 500);}
  		if (ui.draggable[0].id == 'servicio') {setTimeout(function(){ location.href='servicios.html';}, 500);}
  		if (ui.draggable[0].id == 'productos') {setTimeout(function(){ location.href='productos.html';}, 500);}
  		
  	}, 500);
    
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