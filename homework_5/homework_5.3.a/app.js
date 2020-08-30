// 1. получить объект модального окна с классом .wrap
let modalWindow = document.querySelector(".wrap");

// 2. получить тег span, используемый для закрытия окна
let closeWindow = document.querySelector("span");

// 3. получить кнопку, используемую для показа модального окна
let showWindow = document.querySelector("button");

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
showWindow.addEventListener("click", function () {
    modalWindow.classList.remove("hidden");
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
closeWindow.addEventListener("click", function () {
    modalWindow.classList.add("hidden");
});