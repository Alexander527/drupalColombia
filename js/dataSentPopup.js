document.addEventListener( 'DOMContentLoaded', function(){
    let btnSent = document.querySelector(".boton-contenido-asociacion-3");
    let overlay = document.querySelector(".overlay");
    let btnClose = document.querySelector(".download_imagen-up-cerrar");
    let btnAccept = document.querySelector(".container__sent--button");

    btnSent.addEventListener('click', function(){
        overlay.classList.add('overlay--active');
    });

    btnClose.addEventListener('click', function(){
        overlay.classList.remove('overlay--active')
    });

    btnAccept.addEventListener('click', function(){
        overlay.classList.remove('overlay--active')
    });
});