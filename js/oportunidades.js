document.addEventListener( 'DOMContentLoaded', function(){
    let btnAplicar = document.querySelector('.aplicar_boton');
    let formPostulate = document.querySelector('.form-postulate');
    let btnFormClose = document.querySelector('.form-postulate-up-cerrar');
    let btnDownloadImage = document.querySelector('.descargar-imagen');

      btnAplicar.addEventListener('click', function(){
      formPostulate.classList.add('active');
    });

    btnFormClose.addEventListener('click', function(){
        formPostulate.classList.remove('active');
      });

});