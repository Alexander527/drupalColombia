document.addEventListener( 'DOMContentLoaded', function(){
    let btnFormClose = document.querySelector('.download_imagen-up-cerrar');
    let btnDownloadImage = document.querySelectorAll('.seccion-bagdes .descarga-badges');
    let overlay = document.querySelector('.overlay');

    
    for(let i = 0; i < btnDownloadImage.length; i++){

      btnDownloadImage[i].addEventListener('click', function(){
        overlay.classList.add('overlay--active');
      });
  
      btnFormClose.addEventListener('click', function(){
        overlay.classList.remove('overlay--active');
      });
    }
    

});

