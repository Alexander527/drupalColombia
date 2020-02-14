document.addEventListener( 'DOMContentLoaded', function () {
    let btnDropdown = document.querySelector('.nav-dropdown-menu');
    let dropdownMenu = document.querySelector('.dropdown');

    btnDropdown.addEventListener('click', function () {
      dropdownMenu.classList.toggle('dropdown-active');
        
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