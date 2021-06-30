//menu responsive
const btnMenu = document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("ver");
})

// SLIDER AUTOMANUAL
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
/*botones*/
const btnDer = document.querySelector("#btn_der");
const btnIzq = document.querySelector("#btn_izq");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);
// boton derecho
function siguiente() {
    let sliderSectionuno = document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.3s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionuno);
        slider.style.marginLeft = "-100%";
    }, 300);
}
// voton btn_izquierdo
function anterior() {
    let sliderSection = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.3s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 300);
}

btnDer.addEventListener("click", function(){
    siguiente();
} );
btnIzq.addEventListener("click", function(){
    anterior();
} );

// funcion slider automatico
setInterval(function(){
    siguiente();
}, 4000);