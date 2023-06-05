// Берём кнопку вперёд
let btnRight = document.querySelector(".btn_right");
let btnLeft = document.querySelector(".btn_left");

// Берём слайды
let slides = document.querySelectorAll("span");
console.log(slides)

// Объявляем переменную i 
let i = 0;
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
        console.log(i)
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
        console.log(i)
    }
})
btnLeft.addEventListener("click" , function (){
    i--
    if (i <= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i+1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
        console.log(i)
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i+1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
        console.log(i)
        
    }

});