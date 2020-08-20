



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
			{
				titulo: "Cargador universal",
				descripcion: "Cargador universal para pilas",
				precio:50,
				img: "assets/shop/cargadoruni.jpg",
				id:7
			},
			{
				titulo: "Espejo Led Touch",
				descripcion: "Espejo Maquillaje Con Luz 22 Led Rotación De 180 °.Pantalla táctil del maquillaje del espejo LED de luces inteligentes de atenuación ajustable de belleza maquillaje cosmético herramienta de mesa",
				precio:380,
				img: "assets/shop/espejo1.png",
				id:8
			},
			{
				titulo: "Luces Para Espejo Tocador Maquillaje",
				descripcion: "LONK luces del espejo de tocador son durables y versátiles. Ideal para maquillaje a todo los guapos y guapas. Se puede colocar las luces en cualquier lugar que desee decorar como el baño, el tocador, el vestidor o la pared, etc.",
				precio:380,
				img: "assets/shop/espejo2.png",
				id:9
			},
			{
				titulo: "Reloj Caballero cafe",
				descripcion: "Reloj caballero correo de cuero modelo moda.",
				precio:300,
				img: "assets/shop/relojcafe.jpg",
				id:10
			},
			{
				titulo: "Reloj Caballero blanco",
				descripcion: "Reloj caballero correo de cuero modelo moda.",
				precio:300,
				img: "assets/shop/relojblaco.jpg",
				id:11
			},
			{
				titulo: "Reloj Caballero Diesel",
				descripcion: "Reloj caballero correo de cuero modelo moda.",
				precio:330,
				img: "assets/shop/relojdiesel.jpg",
				id:12
			},
			{
				titulo: "Reloj Casio G-shock",
				descripcion: " Doble máquina digital y analógico Resistente a salpicaduras <br>Resistente a impactos<br>Fechador<br>Alarma<br> Cronometro<br> Luz",
				precio:330,
				img: "assets/shop/casiogso.jpg",
				id:13
			},
			{
				titulo: "Reloj Diesel",
				descripcion: " Doble máquina digital y analógico Resistente a salpicaduras <br>Resistente a impactos<br>Fechador<br>Alarma<br> Cronometro<br> Luz",
				precio:330,
				img: "assets/shop/dieselbasico.jpg",
				id:14
			},
			{
				titulo: "Reloj Diesel",
				descripcion: " Doble máquina digital y analógico Resistente a salpicaduras <br>Resistente a impactos<br>Fechador<br>Alarma<br> Cronometro<br> Luz",
				precio:330,
				img: "assets/shop/relojsimple.jpg",
				id:15
			},
		]
	},

	computed: {
    	reversedItems() {
	      return this.productos.slice().reverse();
    	},
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