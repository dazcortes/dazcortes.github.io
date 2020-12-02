
/*var sonido_incorrecto = new Howl({
	src: ["assets/sonidos/failure2.mp3"],
	volume: 0.5
});

var sonido_correcto = new Howl({
	src: ["assets/sonidos/success.mp3"],
	volume: 0.5
});
var sonido_final = new Howl({
	src: ["assets/sonidos/finished.mp3"],
	volume: 0.5
}); */




$(".drag").draggable({
  opacity: 1,
  helper: "clone",
  revert: "invalid",
  cursor: "move",
  start: function (event, ui) {
  },
  stop: function (event, ui) {

  }

});

$(".drop").droppable({
	hoverClass: "hover-it",
	classes: {
	  "ui-droppable-hover": "ui-state-hover",
	  "ui-droppable-active": "ui-state-default"
	},
  drop: function (event, ui) {
  	console.log(ui.draggable[0].id);
  	console.log(event.target.id);
  	ans2=ui.draggable[0].dataset.ans2;
    ans=ui.draggable[0].dataset.ans;
    id=event.target.id;
  }
});

$( ".no" ).click(function() { 
	$('.nomodal').css({'display':'flex'});
});

$( ".okmno" ).click(function() { 
	location.href='intro.html';
});
$( ".si" ).click(function() { 
	location.href='intro.html';
});

$( ".entendido" ).click(function() { 
	location.href='modulo1.html';
});
$( ".p1" ).click(function() { 
	$('.modal1').css({'display':'flex'});
});

$( ".mostrarmapa" ).click(function() { 
	var input1= $('#codigo1').val();
	if (input1 !='' && input1== '056700') {
		$('.mapaedico').css({'display':'flex'});
		 $('#codigo1').css({'display':'none'});
		 $('.pista').css({'display':'none'});
		 $('.pista').css({'display':'none'});
		 $('.adivina').css({'display':'none'});
		 $('.mostrarmapa').css({'display':'none'});
		 $('.mostrarmapa2').css({'display':'flex'});
	}
});

$( ".mostrarmapa2" ).click(function() { 
	$('.modal1').css({'display':'none'});
	

});



 


