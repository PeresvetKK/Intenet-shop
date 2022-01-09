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
    start: [3000, 28000],
    margin: 9000,
    
    tooltips: [wNumb({decimals: 0, suffix: ' ₽'}), wNumb({decimals: 0, suffix: ' ₽'})],
    connect: true,
    range: {
        'min': 3000,
        'max': 35000,
    }
});
// --------------------------------сворачивание контента
let filterBody = document.getElementsByClassName('filter__body');
let arrow = document.getElementsByClassName('filter-title__svg');
let dropdown = document.getElementsByClassName('section-filter__body');

for(let i = 0; i < arrow.length; i++){
	arrow[i].addEventListener("click", function() {
    	dropdown[i].classList.toggle("disp-none");
		arrow[i].classList.toggle("rotate-180");
  	});
};

// -----------------------------------Адаптив фильтра
let filtrBtn = document.querySelector('.filter-btn');
let filter = document.querySelector('.filter');

filtrBtn.onclick = () =>{
	
    filter.classList.toggle('adaptive-filter');
	filtrBtn.classList.toggle('filter-btn__active');

	if(filtrBtn.classList.contains('filter-btn__active')){
		document.getElementById('filter-btn').innerHTML = 'Применить';
	}else{
		document.getElementById('filter-btn').innerHTML = 'Фильтры';
	}
}

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

