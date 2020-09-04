var final = new Howl({
	src: ["success.mp3"],
	volume: 1
});


$('.p2').css({'filter':'brightness(0.6)'});
$('.p2').css({'pointer-events':'none'});
$('.p3').css({'filter':'brightness(0.6)'});
$('.p3').css({'pointer-events':'none'});




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
$( ".p2" ).click(function() { 
	$('.modal2').css({'display':'flex'});
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
	$('.p2').css({'filter':'none'});
	$('.p2').css({'pointer-events':'visible'});
});

$( ".listomodal2" ).click(function() { 
	contTxtarea= $('.textarealocal').val();
	if (contTxtarea != '') {
		if (contTxtarea== '530766') {
			$('.listo').css({'display':'flex'});
			$('.cerrarm2').css({'display':'flex'});
			$('.textarealocal').css({'display':'none'});
			$('.titulom').css({'display':'none'});
			$('.listomodal2').css({'display':'none'});
			$('.p3').css({'filter':'none'});
			$('.p3').css({'pointer-events':'visible'});
		}
		
	} else{alert('Debes poner algo pues pechocha');}
	
});

$( ".cerrarm2" ).click(function() { 
	$('.modal2').css({'display':'none'});
});

$( ".p3" ).click(function() { 
	$('.modal3').css({'display':'flex'});
});

$( ".ultimomapa" ).click(function() { 
	contTxtarea= $('.textflor').val();
	if (contTxtarea != '') {
		if (contTxtarea== '667545') {
			$('.cerrarultimomodal').css({'display':'flex'});
			$('.mapfinall').css({'display':'flex'});
			$('.Txtflor').css({'display':'none'});
			$('.textflor').css({'display':'none'});
			$('.ultimomapa').css({'display':'none'});
		}
		
	} else{alert('Debes poner algo pues pechocha');}
	
});

$( ".cerrarultimomodal" ).click(function() { 
	$('.modal3').css({'display':'none'});
});

$( ".probarbbb" ).click(function() { 
	contTxtarea= $('.tesxtprincipalyul').val();
	if (contTxtarea != '') {
		if (contTxtarea== '19 de diciembre' || contTxtarea== '19 de diciembre ' ) {
			$('.modalaudio').css({'display':'flex'});
			
		}
		
	} else{alert('Debes poner algo pues pechocha');}
	
});

$( ".play" ).click(function() { 
	final.play();
});





 


