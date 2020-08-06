
gsap.from(".loadimg", {opacity: 0, x: 1000, duration: 1})

window.addEventListener("load", function(){
	setTimeout(function(){
		$('.load-page').hide('slow');
	}, 5000);
    
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
  	//$('.drop').addClass('dott');
  },
  stop: function (event, ui) {
  	//console.log(event.target.id);
  	//$('.drop').removeClass('dott');
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
  	setTimeout(function(){
  		gsap.to(".loadimg", {opacity: 0, x: 1000, duration: 3})
  		sonido_bien.play();

  	}, 500);
    
  }
});