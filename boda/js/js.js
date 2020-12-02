
$( ".misdamas" ).click(function() { 
	$('.modalDamas').css({'display':'flex'});
});

$( ".cerrard" ).click(function() { 
	$('.modalDamas').css({'display':'none'});
});


$( ".miscaballeros" ).click(function() { 
	$('.modalCaballeros').css({'display':'flex'});
});

$( ".cerrar" ).click(function() { 
	$('.modalCaballeros').css({'display':'none'});
});