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
//----------------------------------------------------Настройка слайдера товара
$('.product-img').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.preview__slider'
});
$('.preview__slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: '.product-img',
	focusOnSelect: true,
	variableWidth: true,
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
});

//-----------------------------------------------Выбор цвета товара
let container = document.querySelector('.inner__btn');

container.addEventListener('click', function(event){
	let itemBtn = document.getElementsByClassName('settings-slider__item');
	for (let i = 0; i < itemBtn.length; i++){
		itemBtn[i].classList.remove('active');
	}
	if(event.target.classList.contains('settings-slider__item') == true){
		event.target.classList.add('active');
	}
});

//--------------------------------------------------Расскрывающиеся характеристики
let btnOpenSettings = document.querySelector('.settings-options__open-item');
let secretBlock = document.querySelector('.hiden-settings');

btnOpenSettings.onclick = () =>{
  	secretBlock.classList.toggle('disp-none');
}