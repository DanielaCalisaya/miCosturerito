/* ----------Menu---------- */

((d) => { //No se repite document
    const $btnMenu = d.querySelector(".header__container__menu__btn"),
    $menu = d.querySelector(".header__container__menu")

    $btnMenu.addEventListener("click", e => {  //button tiene 2 elementos hijos(svg)
        $btnMenu.firstElementChild.classList.toggle("none") //Al primer elemento hijo intercambiamos su clase
        $btnMenu.lastElementChild.classList.toggle("none") //Intercambia la clase none entre los dos elementos 
        $menu.classList.toggle("is-active"); //Activamos todo el menu
    })

    // *nota
    d.addEventListener("click", (e) => {
        //delegación de eventos
        if(!e.target.matches(".header__container__menu a")) return false; //Si el elemento que genero el click en el documento no es un enlace que está dentro del menú entonces retorna false, no pasaria nada

        $btnMenu.firstElementChild.classList.remove("none") // Mostramos la hamburguesa
        $btnMenu.lastElementChild.classList.add("none") // Ocultamos la x
        $menu.classList.remove("is-active"); // Removemos todo el menu
    });

})(document);
/*      * Esta es una landing page, no redirige a otras páginas, por eso al llevarnos a otra parte de la misma página
          debe remover todo el menu y la x y mostrar la hamburguesa 
*/


/* carousel------------ */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}