

$(document).ready(function() {
  new Vue({
    el: '#app',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      $.ajax({
        url:   'https://cors-anywhere.herokuapp.com/https://interfaz.cenart.gob.mx/api/video/catalogo/?id_post=28958',
        type:  'GET',
        beforeSend: function () {
                $(".resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
          data = response[0];
          //console.log(response[0].video_videoclip);
          $(".resultado").css({'display':'none'});  

       
          data.video_videoclip.forEach(function(video, index) {
            $(".for").append('<tr class="col-4"><td><img class="img_video" src='+video.imagen_video+'><p class="title_video">'+video.titulo_video+'</p><p class="desc_video">descripcion...</p></td></tr>');
          });
          $('#example').DataTable();

        }
      });
    

    }
  })
    
} );


/*axios
        .get('https://cors-anywhere.herokuapp.com/https://interfaz.cenart.gob.mx/api/video/catalogo/?id_post=28958')
        .then(response => (this.info = response.data[0].video_videoclip))
        if (info) {alert('jjj');} */




/*$( document ).ready(function() {
  $.ajax({
    url:   'https://cors-anywhere.herokuapp.com/https://interfaz.cenart.gob.mx/api/video/catalogo/?id_post=28958',
    type:  'GET',
    beforeSend: function () {
            $(".resultado").html("Procesando, espere por favor...");
    },
    success:  function (response) {
      data = response[0];
     console.log(response[0].video_videoclip);
      $(".resultado").css({'display':'none'});  
      data.video_videoclip.forEach(function(video, index) {
        $(".for").append('<tr class="col-4"><td><img class="img_video" src="https://storage.googleapis.com/stateless-interfaz-cenart-gob/2018/06/01_intro.jpg"><p class="title_video">'+video.titulo_video+'</p><p class="desc_video">Cortinilla de entrada a la colección 35 años CITRU.</p></td></tr>');
      });
      $('.tituloM').html(this.productos[id].titulo);
      $('.descripcionM').html(this.productos[id].descripcion);
      $('.precioM').html(this.productos[id].precio);
      $('.imgdetalle').attr('src', this.productos[id].img);          
    }
  });
});*/   



