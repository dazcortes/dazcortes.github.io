


window.addEventListener("load", function(){
	setTimeout(function(){
		$('.load-page').hide('slow');
		gsap.from(".loadimg2", {opacity: 0, x: 1000, duration: 3})
		gsap.from(".contsonido", {opacity: 0, y: -1000, duration: 3})
		
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

var joven = new Howl({
	src: ["assets/sonidos/joven.mp3"],
	volume: 0.5,
	onplay: function(){
		$('.cargando').css({'display':'none'});
	}
});
var diablitos = new Howl({
	src: ["assets/sonidos/diablitos.mp3"],
	volume: 0.5,
	onplay: function(){
		$('.cargando').css({'display':'none'});
	}
});
var mona = new Howl({
	src: ["assets/sonidos/mona.mp3"],
	volume: 0.5,
	onplay: function(){
		$('.cargando').css({'display':'none'});
	}
});
var tecuanicha = new Howl({
	src: ["assets/sonidos/tecuanicha.mp3"],
	volume: 0.5,
	onplay: function(){
		$('.cargando').css({'display':'none'});
	}
});
var perros = new Howl({
	src: ["assets/sonidos/perros.mp3"],
	volume: 0.5,
	onplay: function(){
		$('.cargando').css({'display':'none'});
	}
});
var onada = new Howl({
	src: ["assets/sonidos/onada.mp3"],
	volume: 0.5,
	onplay: function(){
		$('.cargando').css({'display':'none'});
	}
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



$( ".contsonido" ).click(function() { 
	if (this.id == 'joven') {
  		$('.modalreproductor').css({'display':'flex'});
  		$('.btn-play').attr('id','joven');
  		$('.pp').attr('id','jovenp');
  		$('.titulo_aidio_modal').html('Cuando yo era joven');
  		}
	if (this.id == 'diablitos') {
		$('.modalreproductor').css({'display':'flex'});
		$('.btn-play').attr('id','diablitos');
		$('.pp').attr('id','diablitosp');
		$('.titulo_aidio_modal').html('El hombre que comio diablitos');
	}
	if (this.id == 'mona') {
		$('.modalreproductor').css({'display':'flex'});
		$('.btn-play').attr('id','mona');
		$('.pp').attr('id','monap');
		$('.titulo_aidio_modal').html('La mona');
	}
	if (this.id == 'tecuanicha') {
		$('.modalreproductor').css({'display':'flex'});
		$('.btn-play').attr('id','tecuanicha');
		$('.pp').attr('id','tecuanichap');
		$('.titulo_aidio_modal').html('La tecuanicha');
	}
	if (this.id == 'perros') {
		$('.modalreproductor').css({'display':'flex'});
		$('.btn-play').attr('id','perros');
		$('.pp').attr('id','perrosp');
		$('.titulo_aidio_modal').html('Lo que los perros ven');
	}
	if (this.id == 'onada') {
		$('.modalreproductor').css({'display':'flex'});
		$('.btn-play').attr('id','onada');
		$('.pp').attr('id','onadap');
		$('.titulo_aidio_modal').html('O todo, o nada');
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

$( ".pp" ).click(function() { 
	sonido_bien.play();
	$('.modalreproductor').hide('hide');
});

$( ".btn-play" ).click(function() {
$('.btn-play').css({'pointer-events':'none'}); 
	$('.cargando').css({'display':'flex'});
	var son = this.id;
	if (son== 'joven') {joven.play();}
	if (son== 'diablitos') {diablitos.play();}
	if (son== 'mona') {mona.play();}
	if (son== 'tecuanicha') {tecuanicha.play();}
	if (son== 'perros') {perros.play();}
	if (son== 'onada') {onada.play();}
});
$( ".pp" ).click(function() { 
	var sonst = this.id;
	if (sonst== 'jovenp') {joven.stop();}
	if (sonst== 'diablitosp') {diablitos.stop();}
	if (sonst== 'monap') {mona.stop();}
	if (sonst== 'tecuanichap') {tecuanicha.stop();}
	if (sonst== 'perrosp') {perros.stop();}
	if (sonst== 'onadap') {onada.stop();}
	$('.btn-play').css({'pointer-events':'visible'});
});


$( ".backimg" ).click(function() {
$('.backimg').css({'padding':'1vw'}); 
	window.history.back();
});