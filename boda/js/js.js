
var hombres = new Howl({
	src: ["images/musica/hombres.mp3"],
	volume: 0.5
});
var mujeres = new Howl({
	src: ["images/musica/mujeres.mp3"],
	volume: 0.5
});
gsap.from(".imgLiz", {opacity: 0, x: -1000, duration: 3})
gsap.from(".imgElias", {opacity: 0, x: 1000, duration: 3})
gsap.from(".misdamas, .miscaballeros, .seccionDatos", {opacity: 0, y: 1000, duration: 5})

setTimeout(function(){
	$('.imgLiz').addClass('classrebote');
	$('.imgElias').addClass('classrebote2');
}, 3000);

$( ".miscaballeros" ).click(function() { 
	$('.modalCaballeros').css({'display':'flex'});
	hombres.play();
});
$( ".misdamas" ).click(function() { 
	$('.modalDamas').css({'display':'flex'});
	mujeres.play();
});
$( ".cerrar" ).click(function() { 
	$('.modalCaballeros').css({'display':'none'});
	hombres.pause();
});
$( ".cerrard" ).click(function() { 
	$('.modalDamas').css({'display':'none'});
	mujeres.pause();
});


