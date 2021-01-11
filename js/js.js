


window.addEventListener("load", function(){
	$('.load-page').hide('slow');
	gsap.from(".loadimg2", {opacity: 0, x: 1000, duration: 3})
	gsap.from(".contw", {opacity: 0, y: -1000, duration: 3})
	gsap.from(".conts", {opacity: 0, x: -1000, duration: 3})
	gsap.from(".contp", {opacity: 0, x: 1000, duration: 3})
	$('.globr').addClass('globr2');
	$('.globr').removeClass('globr');
	$('.txtglob').addClass('txtglob2');
	$('.txtglob').removeClass('txtglob');
	
    
});






$( ".menuopen" ).click(function() { 
	$('.menu').show('slow');
});

$( ".equis" ).click(function() { 
	$('.menu').hide('slow');
});

$( ".serviciosmenu" ).click(function() { 
	setTimeout(function(){ location.href='servicios.html'; }, 1000);
});
$( ".clasesmenu" ).click(function() { 
	setTimeout(function(){ location.href='clases.html'; }, 1000);
});
$( ".productsmenu" ).click(function() { 
	setTimeout(function(){ location.href='blog.html'; }, 1000);
});
$( ".contactomenu" ).click(function() { 
	setTimeout(function(){ location.href='servicios.html'; }, 1000);
});

$( ".logoimg img" ).click(function() { 
	setTimeout(function(){ location.href='index.html'; }, 1000);
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});


var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });



										/* empieza el blog*/

$(document).ready(function(){
  
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"></button>',
    nextArrow:'<button class="NextArrow"></button>', 
  });
  
})

$( ".cont-listblog" ).click(function() { 
	$(this.id);
	console.log($(this).attr('id'));
});

