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

// -----------------------------------------------------------------------Фильтр

let priceSlider = document.querySelector('.price-filter');

noUiSlider.create(priceSlider, {
    start: [9500, 35000],
    tooltips: [true, true],
    connect: true,
    margin: 20,
    range: {
        'min': 3000,
        'max': 35000
    }
});

// setButton.addEventListener('click', function(){
//     animatedSlider.noUiSlider.set(60);
//     unAnimatedSlider.noUiSlider.set(60);
// });
