
var tanda = {
        nombres: [
            {
                nombre: "Toto/Kio",
                fecha: "09/08/2020",
                status:"Entregado",
                id:0
            }, 
            {
                nombre: "Elias",
                fecha: "16/08/2020",
                status:"Entregado",
                id:1
            }, 
            {
                nombre: "Cucuy/Flor",
                fecha: "31/08/2020",
                status:"Proximo",
                id:2
            }, 
            {
               nombre: "Mamá",
                fecha: "15/09/2020",
                status:"Pendiente",
                id:3
            }, 
            {
                nombre: "Jhovany",
                fecha: "31/09/2020",
                status:"Pendiente",
                id:4
            },
            {
                nombre: "El Dedo",
                fecha: "15/10/2020",
                status:"Pendiente",
                id:5
            },
            {
                nombre: "Mily/Aly",
                fecha: "31/10/2020",
                status:"Pendiente",
                id:6
            },
            {
                nombre: "Cris",
                fecha: "15/11/2020",
                status:"Pendiente",
                id:7
            },
            {
                nombre: "El gordus",
                fecha: "30/11/2020",
                status:"Pendiente",
                id:8
            },
            {
                nombre: "Soco/Dulce",
                fecha: "15/12/2020",
                status:"Pendiente",
                id:9
            },
            {
                nombre: "Coneyo",
                fecha: "31/12/2020",
                status:"Pendiente",
                id:10
            }, 
            {
                nombre: "Sin ello",
                fecha: "15/01/2021",
                status:"Pendiente",
                id:11
            } 
        ]
    }


tanda.nombres.forEach(
	element => $(".conttanderosnombres").append('<div class="header-tabledatos"><div class="col-xs"><p>'+element.nombre+'</p></div><div class="col-xs"><p>'+element.fecha+'</p></div><div class="col-xs '+element.status+'"><p>'+element.status+'</p></div></div>')
);

$( ".btn-login" ).click(function() { 
	$('.modal-login').css({'display':'flex'});
});

$( ".entrarbtn" ).click(function() { 
	var user=$('#user').val();
	var pass=$('#pass').val();
	if (user=='pepe' && pass== '123' || user=='Pepe') {
		location.href='cpanel.html';
	}else{
		alert('Estas mal compadre, vuelve a poner los datos');
	}
});


tanda.nombres.forEach(
	element => $(".conttanderosnombrescpanel").append('<div class="header-tabledatos"><div class="col-xs"><p>'+element.nombre+'</p></div><div class="col-xs"><p>'+element.fecha+'</p></div><div class="col-xs '+element.status+'"><select id="'+element.id+'" value="" class="selectop" onchange="cambio();"><option value="'+element.status+'">'+element.status+'</option><option value="Pendiente">Pendiente</option><option value="Entregado">Entregado</option><option value="Proximo">Proximo</option></select></div></div>')
);

$( ".btn-louot" ).click(function() { 
	location.href='index.html';
});

function cambio(){
	console.log(tanda.nombres);
	console.log(this.event.target.value);
	console.log(this.event.target.id);

	tanda.nombres[this.event.target.id].status = this.event.target.value;
	console.log(tanda.nombres);
}
