


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

$( ".backimg" ).click(function() { 
	$('.backimg').css({'padding':'1vw'});
	window.history.back();
});