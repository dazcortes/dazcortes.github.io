

gsap.from(".imgLiz", {opacity: 0, x: -1000, duration: 3})
gsap.from(".imgElias", {opacity: 0, x: 1000, duration: 3})
gsap.from(".misdamas, .miscaballeros, .seccionDatos", {opacity: 0, y: 1000, duration: 5})

setTimeout(function(){
	$('.imgLiz').addClass('classrebote');
	$('.imgElias').addClass('classrebote2');
}, 3000);

$( ".miscaballeros" ).click(function() { 
	$('.modalCaballeros').css({'display':'flex'});
});