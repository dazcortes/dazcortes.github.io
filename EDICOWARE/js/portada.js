
gsap.from(".loadimg", {opacity: 0, x: 1000, duration: 1})

window.addEventListener("load", function(){
	setTimeout(function(){
		$('.load-page').hide('slow');
	}, 5000);
    
});