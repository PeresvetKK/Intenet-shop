$(function(){
    $('.slider-dots').slick({ // верхний слайдер(дотс)
        slidesToShow: 3, // 3 элемента
        slidesToScroll: 1,
        asNavFor: '.header__slider',
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    $('.header__slider').slick({
        arrows: false,
        slidesToShow: 1,
        fade: true, // плавный переход между экранами
        asNavFor: '.slider-dots', // связали два слайдера
    });
});

let burger = document.querySelector('.burger');
let activeMenu = document.querySelector(".bottom-menu");

burger.onclick = () =>{
    activeMenu.classList.toggle('bottom-menu-active');
    burger.classList.toggle('burger-active');
}

var $body = $('body'), $header = $('header'), $headerBtn = $('.header__btn');
$(document).on('scroll', function () {
    var position = $body.scrollTop(), block_position = $('header').offset().top; // расположение блока, от которого и зависит фиксированность хэдера
    if ((position + 100) < block_position) { // если позиция скролла страницы больше, то ставим фикс
        $header.addClass('header-bw');
        $header.addClass('fixed');
        $headerBtn.removeClass('btn-onBlack');
        $headerBtn.addClass('btn');
    } else {
        $header.removeClass('header-bw');
        $header.removeClass('fixed');
        $headerBtn.removeClass('btn');
        $headerBtn.addClass('btn-onBlack');
    }
});
    

///