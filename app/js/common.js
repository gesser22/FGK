// Свернуть / развернуть меню
var showMenu = document.querySelector('.show');

showMenu.onclick = () => {
  let menu = document.querySelector('.menu'),
      service = document.querySelector('.service'),
      menulink = document.querySelectorAll('.menu__link'),
      menuItem = document.querySelectorAll('.menu__item'),
      about = document.querySelector('.about');
  // Смена содержимого кнопки
  showMenu.classList.toggle('show_active')
  setTimeout(() => {
    menu.classList.toggle('menu_hide');
    service.classList.toggle('service_hide');
    about.classList.toggle('about_hide');
    menulink.forEach(function(item){
      item.classList.toggle('menu__link_hide');
    });
    menuItem.forEach(function(item){
      item.classList.toggle('menu__item_hide');
    });
  }, 500);
}

// Модальное окно с блюром

var toggleModal = document.querySelectorAll('.toggle-modal');
toggleModal.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let overlay = document.querySelector('.modal-overlay'),
        modal = document.querySelector('.modal');
        
    modal.classList.toggle('modal_active');
    overlay.classList.toggle('modal-overlay_active');
  });
 });
//  end модальное окно


//  Смена контента. Свап главной страницы с формой
var openForm = document.querySelectorAll('.openForm');
openForm.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let content = document.querySelector('.service-wrapper');
    let contentChild = document.querySelector('.service-wrapper-content');
    content.classList.toggle('service-wrapper_hide');
    contentChild.classList.toggle('service-wrapper-content_active');
  });
}); 
//  end смена контента



// mmenu //
// mmenu открывать меню
var mmButton = document.querySelector('.btn-menu');
mmButton.onclick = (e) => {
  e.preventDefault();
  let mmenu = document.querySelector('.mmenu');
  mmenu.classList.toggle('mmenu_active');
}


var mmListItem = document.querySelector('.mobile-lists__item');
mmListItem.onclick = (e) => {
  e.preventDefault();
  mmSocialButton.classList.toggle('mmenu-list__item_active');
}
