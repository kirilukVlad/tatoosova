let btnRight = document.querySelector(".btn_right");
let btnLeft = document.querySelector(".btn_left");

let slides = document.querySelectorAll("span");

let i = 0;
btnRight.addEventListener("click", function () {
  ++i;
  if (i >= slides.length) {
    slides[i - 1].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
    console.log(i)
  } else {
    slides[i - 1].classList.remove("block");
    slides[i].classList.add("block");
    console.log(i)
  }
});
btnLeft.addEventListener("click", function () {
  i--;
  if (i <= 0) {
    slides[i + 1].classList.remove("block");
    i = slides.length-1
    slides[i].classList.add("block");
    console.log(i)
  } else {
    slides[i + 1].classList.remove("block");
    slides[i].classList.add("block");
    console.log(i)
  }
});
