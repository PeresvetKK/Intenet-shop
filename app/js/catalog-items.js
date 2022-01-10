"use stirct"

//--------------------------------------------------- работа бургера, меню
let burger = document.querySelector('.burger');
let activeMenu = document.querySelector(".bottom-menu");

burger.onclick = () =>{
    activeMenu.classList.toggle('bottom-menu-active');
    burger.classList.toggle('burger-active');
}
//------------------------------------------------------изменения header
$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header__fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header__fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
});

//-----------------------------------------------------------счетчик товаров-------------------------------------------------
window.addEventListener('click', (event)=>{
    if(event.target.dataset.action == "plus" || event.target.dataset.action == "minus" ){
        
        let counterWrapper = event.target.closest('.counter');
        let counter = counterWrapper.querySelector('[data-counter]');

        if(event.target.dataset.action == "plus"){
            counter.textContent = ++counter.textContent;
        }

        if(event.target.dataset.action == "minus"){
            if (counter.textContent > 1){
                counter.textContent = --counter.textContent;
            }
        }
    }
});
window.addEventListener('click', (event) =>{
    // проверяем, что клик был совершен по кнопке
    if(event.target.hasAttribute('data-cart')){
        // находим карточку товара, внутри которой был совершен клик
        const card = event.target.closest('.mini-catalog__item');
        // собираем данные с этого товара
        const productInfo = {
            id: card.dataset.id, // получаем data-id="01"
            imgSrc: card.querySelector('.mini-catalog__img').getAttribute('src'),
            title: card.querySelector('.mini-catalog__text').textContent,
            price: card.querySelector('.mini-catalog__price').textContent,
            counter: card.querySelector('[data-counter]').textContent,
        };
    }
});

