'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let textClass = document.querySelector(".text");
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function callback(elem) {
    elem.addEventListener('click', clickHandler)});


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
   changeText(event);
   changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    navLinks.forEach((elem) => {
        elem.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let text = event.currentTarget.textContent;
    switch (text) {
        case 'Link 1':
            textClass.textContent = texts.text1;
            console.log(navLinks);
            break;
        case 'Link 2':
            textClass.textContent = texts.text2;
            console.log(navLinks);
            break;
        case 'Link 3':
            textClass.textContent = texts.text3;
            console.log(navLinks);
            break;
    }
}
