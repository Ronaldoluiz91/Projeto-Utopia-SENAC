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

// var slides = document.querySelector('.slides');
// var slide = document.querySelectorAll('.slide');
// var intervalTime = 3000; // Tempo de troca de slide
// var slideIndex = 0;

// var nextSlide = () => {
//     slideIndex++;
//     if (slideIndex === slide.length) {
//         slideIndex = 0;
//     }
//     updateSlide();
// }

// var updateSlide = () => {
//     slides.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// setInterval(nextSlide, intervalTime);





//pagina reserva

// var modalRelatorio = document.getElementById('modal-relatorio')


function enviar(){

    var modalRelatorio = document.getElementById('modal-relatorio')

alert('funcionou')

var nome = document.getElementById('nomeReserva').value;
var telefone = document.getElementById('telefoneReserva').value;
var reserva = document.getElementById('reserva').value;
var quantidade = document.getElementById('quantidade').value;
var horario = document.getElementById('horarioReserva').value;
var status = document.getElementById('status')
// var relatorio1 = document.getElementsByClassName('relatorio1')



// var inputData = document.getElementById('dataReserva')
// // var data = new Date();
// // var dia = data.getDate();
// // var mes =data.getMonth()+1; //é preciso incrementar uma posição para dar um, get na lista correta.
// // var ano = data.getFullYear();

// var dataReserva = this.value;

var inputDate = document.getElementById('dataReserva');

// Adicionando um ouvinte de evento 'change' para capturar a mudança de valor
inputDate.addEventListener('change', function() {
    // Obtendo o valor do input
    var dataReserva = this.value;
})


    if (nome === "" || telefone === "" || reserva === "" || quantidade === "" || dataReserva === "" || horario === "") {
        alert('preencha todos os campos')
}
else{
    document.getElementById('reservaRelatorio').innerHTML = nome
    document.getElementById('telRelatorio').innerHTML = telefone
    document.getElementById('tipoRelatorio').innerHTML = reserva
    document.getElementById('quantRelatorio').innerHTML = quantidade
    document.getElementById('dataRelatorio').innerHTML = dataReserva.value
    document.getElementById('horaRelatorio').innerHTML = horario

    status.style.display ='block'
    // relatorio1.style.display ='block'


    
}



// if (modalRelatorio.style.display ==='none'){
//     modalRelatorio.style.display ='block'
// }
// else{
//     modalRelatorio.style.display ='none'
// }




}






//Modal pagina reserva 

// var modal = document.getElementById("modal-container"); //modal
// //var btnReserva = document.getElementById("reservar"); //botão enviar reserva

// var span = document.getElementsByClassName("close"); //botao fechar modal


// var nome = document.getElementById('nomeReserva');
// var telefone = document.getElementById('telefoneReserva');
// var reserva = document.getElementById('reserva');
// var quantidade = document.getElementById('quantidade');
// var data = document.getElementById('data');
// var horario = document.getElementById('horario');


// function enviar() {
 
    
//     if (nome === "" || telefone === "" || reserva === "" || quantidade === "" || data === "" || horario === "") {
//         alert('preencha todos os campos')
//         // modal.style.display = "block";
//     }

//     else {
//         // alert('preencha todos os campos')
//         modal.style.display = "block";
//     }


//     // span.onclick = function () {
//     //             modal.style.display = "none";
//     //         }

//     window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// }



// btnReserva.onclick = function () {
//     var nome = document.getElementById('nome').value;
//     var telefone = document.getElementById('telefone').value;
//     var reserva = document.getElementById('reserva').value;
//     var quantidade = document.getElementById('quantidade').value;
//     var data = document.getElementById('data').value;
//     var horario = document.getElementById('horario').value;


//     if (nome || telefone || reserva || quantidade || data || horario !== '') {
//         modal.style.display = "block";
//     }

//     else {
//         alert('preencha todos os campos')
//     }

//     span.onclick = function () {
//         modal.style.display = "none";
//     }
// }


// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }





