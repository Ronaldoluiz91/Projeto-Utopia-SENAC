//alert('funcionou')




//MENU DA VERSÃO MOBILE

var btnmostrar = document.getElementById('iconMenu'); // icone  do menu
var menu = document.getElementById('itens'); // menu a ser ocultado e/ou mostrado
var logo = document.getElementById('logotipo'); // logotipo do site
var btnOcultar = document.getElementById('iconClose') // icone fechar do menu


btnmostrar.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    else {
        menu.style.display = 'block';
    }

})

btnmostrar.addEventListener('click', function () {
    if (logo.style.display === 'none') {
        logo.style.display = 'block';
    }
    else {
        logo.style.display = 'none';

    }

})

btnOcultar.addEventListener('click', function () {
    menu.style.display = 'none';
    logo.style.display = 'block'
});





// Slider da pagina de abertura pagina Index

function slide1() {
    document.getElementById('img1Carrosel').src = "imagens/utopia6.jpeg";
    setTimeout("slide2()", 3000)
}

function slide2() {
    document.getElementById('img1Carrosel').src = "imagens/utopia2.jpeg";
    setTimeout("slide3()", 3000)
}

function slide3() {
    document.getElementById('img1Carrosel').src = "imagens/utopia1.jpeg";
    setTimeout("slide4()", 3000)
}

function slide4() {
    document.getElementById('img1Carrosel').src = "imagens/utopia5.jpeg";
    setTimeout("slide5()", 3000)
}

function slide5() {
    document.getElementById('img1Carrosel').src = "imagens/group-cocktail-shot.jpg";
    setTimeout("slide1()", 3000)
}



// slider- cardapio pagina index

var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slide');
var intervalTime = 3000; // Tempo de troca de slide
var slideIndex = 0;

var nextSlide = () => {
    slideIndex++;
    if (slideIndex === slide.length) {
        slideIndex = 0;
    }
    updateSlide();
}

var updateSlide = () => {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, intervalTime);







//Modal pagina reserva 

var modal = document.getElementById("modal-container"); //modal
var btnReserva = document.getElementById("reservar"); //botão enviar reserva
var span = document.getElementsByClassName("close")[0]; //botao fechar modal





btnReserva.onclick = function () {
    var nome = document.getElementById('nome').value;
    var telefone =document.getElementById('telefone').value;
    var reserva = document.getElementById('reserva').value;
    var quantidade = document.getElementById('quantidade').value;
    var data = document.getElementById('data').value;
    var horario = document.getElementById('horario').value;


    if (nome || telefone || reserva || quantidade || data || horario !== '') {
        modal.style.display = "block";
    }

    else {
        alert('preencha todos os campos')
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





