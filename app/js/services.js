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
//------------------------------------------------------обработка формы
const form = document.querySelector('.form');
form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();// запрещаем стандартную форму отправки
    let error = formValidate(form);
    let formData = new FormData(form);

    if (error == 0){ // если поля заполнены успешно, открываем попап
        openPopup();
    }
}
//------------------------------------------------------валидация формы
function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req'); // обязательное поле

    for (let i = 0; i < formReq.length; i++) { // проходимся по всем элементам
        const input = formReq[i]; // текущий элемент
        formRemoveError(input); // удаляем класс ошибки с элемента
        
        if (input.classList.contains('_email')) { // проверка email
            if (emailTest(input)){
                formAddError(input);
                error++;
            } 
        }else{
            if(input.value === ''){
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}
// добавить родительскому и основному объектам класс ошибки
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
// удалить родительскому и основному объектам класс ошибки
function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');    
}
// проверка корректности введенного email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
// появление попап
function openPopup() {
    let popup = document.querySelector('.popup'); // берем сам попап
    let btnPopup = document.querySelector('.btn-popup'); // берем кнопку закрытия
    popup.classList.remove('disp-none'); // появляется модальное окно
    btnPopup.onclick = () => { // при нажатии на кнопку исчезает попап
        popup.classList.add('disp-none');
    }
}