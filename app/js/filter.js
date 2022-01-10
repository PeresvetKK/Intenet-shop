
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
