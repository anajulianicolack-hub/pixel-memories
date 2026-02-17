/*--------------------01--------------------*/

const elementosComAumento = document.querySelectorAll('.aumento')

function aplicarEventos(elemento){
    elemento.addEventListener('mouseover', function() {
        elemento.classList.add('aumentado')
    })

    elemento.addEventListener('mouseout', function() {
        elemento.classList.remove('aumentado')
    })
}

elementosComAumento.forEach(aplicarEventos)

/*--------------------02--------------------*/

const slides = document.querySelectorAll('.slide')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')

if(prevButton && nextButton && slides.length > 0){
let slideAtual = 0

function mostrarSlide(indice){
    slides.forEach(function(slide){
        slide.classList.remove('ativo')
    })

    if(indice >= slides.length){
        slideAtual = 0
    } else if(indice < 0){
        slideAtual = slides.length -1
    } else{
        slideAtual = indice
    }

    slides[slideAtual].classList.add('ativo');
}

function proximoSlide(){
    mostrarSlide(slideAtual + 1)
}

function slideAnterior(){
    mostrarSlide(slideAtual - 1)
}

prevButton.addEventListener('click', slideAnterior)
nextButton.addEventListener('click', proximoSlide)

const intervaloTempo = 5000
setInterval(proximoSlide, intervaloTempo)

mostrarSlide(slideAtual)
}
/*--------------------03--------------------*/
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body')
        body.classList.toggle('active')
    })
})