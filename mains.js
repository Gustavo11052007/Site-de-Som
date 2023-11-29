alert("teste")

function tocarSomPom (){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla tecla_pom').onclick = tocarSomPom;

const listadeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

while (contador < listadeTeclas.length ){
    const instrumento = listadeTeclas[contador].classList
    console.log(instrumento[1])
    listadeTeclas[contador].onclick = function (){

    tocarSomPom(`#som_${instrumento[1]}`);

    
}

contador = contador + 1;
}

