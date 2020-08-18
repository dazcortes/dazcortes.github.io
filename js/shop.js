



const app = new Vue({
	el:'#app',
	data :{
		productos:[
			{
				titulo: "Audifonos BT",
				descripcion: "Audifonos inalambricos recargables",
				precio:80,
				img: "assets/shop/audifonos.png",
				id:0
			},
			{
				titulo: "Cargador V8",
				descripcion: "Cargador para celular, carga rapida",
				precio:80,
				img: "assets/shop/cargador.jpg",
				id:1
			},
			{
				titulo: "Lampara de Lava",
				descripcion: "Lampara de lava para tu recamara.",
				precio:300,
				img: "assets/shop/lampara.jpg",
				id:2
			},
			{
				titulo: "Reloj para dama",
				descripcion: "Reloj para dama especial para regalo",
				precio:300,
				img: "assets/shop/reloj.jpg",
				id:3
			},
			{
				titulo: "USB 32G",
				descripcion: "USB 32G de almacenamiento",
				precio:140,
				img: "assets/shop/usb16.jpg",
				id:4
			},
			{
				titulo: "Bocina BT",
				descripcion: "Bocina BT inalambrica,SD USB Auxiliar",
				precio:230,
				img: "assets/shop/bocina.jpg",
				id:5
			},
			{
				titulo: "USB 16G",
				descripcion: "USB 16G de almacenamiento",
				precio:140,
				img: "assets/shop/usb16.jpg",
				id:6
			},
		]
	},

	methods:{
		modal(id){
			$('.modal-detalles').css({'display':'flex'});
			$('.tituloM').html(this.productos[id].titulo);
			$('.descripcionM').html(this.productos[id].descripcion);
			$('.precioM').html(this.productos[id].precio);
			$('.imgdetalle').attr('src', this.productos[id].img);
			$('.hrefw').attr('href', 'https://wa.me/524431115452?text=Hola%20me%20 interesa%20este%20producto:%20https://dazcortes.github.io/'+this.productos[id].img+'"');
		}
	}

})

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

var sonido_bien = new Howl({
	src: ["assets/sonidos/bien.mp3"],
	volume: 0.5
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

$( ".backimg" ).click(function() { 
	$('.backimg').css({'padding':'1vw'});
	window.history.back();
});

$( ".cerraritem" ).click(function() { 
	$('.modal-detalles').css({'display':'none'});
});