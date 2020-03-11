document.addEventListener( 'DOMContentLoaded', function () {
    let btnDropdown = document.querySelector('.nav-dropdown-menu');
    let dropdownMenu = document.querySelector('.dropdown');
    let iconDropdown = document.querySelector('.fas fa-bars');

    btnDropdown.addEventListener('click', function () {
      dropdownMenu.classList.toggle('dropdown-active');
      if (btnDropdown.classList.contains('fa-bars')) {
        btnDropdown.classList.replace( 'fa-bars', 'fa-times' );
      }else{
        btnDropdown.classList.replace( 'fa-times', 'fa-bars' );
      }
       
    });
    
});

document.addEventListener('DOMContentLoaded', function () {

    
    //transition-search
    let iconSearch = document.querySelector('#nav_search');
    let boxSearch = document.querySelector('.search');

    iconSearch.addEventListener('click', function () {

      boxSearch.classList.toggle('search-active');
      
    });
  
})