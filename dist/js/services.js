let burger = document.querySelector('.burger');
let activeMenu = document.querySelector(".bottom-menu");

burger.onclick = () =>{
    activeMenu.classList.toggle('bottom-menu-active');
    burger.classList.toggle('burger-active');
}
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