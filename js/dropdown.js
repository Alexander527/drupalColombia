document.addEventListener( 'DOMContentLoaded', function () {
    let btnDropdown = document.querySelector('.nav-dropdown-menu');
    let dropdownMenu = document.querySelector('.drop_down');
    let iconDropdown = document.querySelector('.fas fa-bars');

    btnDropdown.addEventListener('click', function () {
      dropdownMenu.classList.toggle('dropdown-active');
      if (btnDropdown.classList.contains('fa-bars')) {
        btnDropdown.classList.replace( 'fa-bars', 'fa-times' );
      }else{
        btnDropdown.classList.replace( 'fa-times', 'fa-bars' );
      }
       
    });
    

    // mobile

    let btn_dropdownMobile = document.querySelectorAll('.drop_down-contenedor .drop_down-button');
    let dropdown_list = document.querySelectorAll('.drop_down-contenedor ul');
    let switch_share = new Array(btn_dropdownMobile.length);

    let arr = Array.from(dropdown_list);

    for (let i = 0; i < dropdown_list.length;i++ ) {
      btn_dropdownMobile[i].addEventListener('click', function(){
        if (switch_share[i] == undefined || switch_share[i] == 0) {
          arr[i].classList.add("drop_down-list-active");
          switch_share[i] = 1;
        } else {
          arr[i].classList.remove("drop_down-list-active");
          switch_share[i] = 0;
        }
      
    });
    }

    
});

document.addEventListener('DOMContentLoaded', function () {

    
    //transition-search
    let iconSearch = document.querySelector('#nav_search');
    let boxSearch = document.querySelector('.search');

    iconSearch.addEventListener('click', function () {

      boxSearch.classList.toggle('search-active');
      
    });
  
})