function tocarSomPom (){

    document.querySelector("#som_Pom").play();

}

document.querySelector(".tecla_Pom").onclick=tocarSomPom;

const listaDeTeclas=document.querySelectorAll(".tecla");

listaDeTeclas (0).onclick=tocarSomPom;

let contador=0;

while (contador<9){

    listaDeTeclas(contador).onclick=tocarSomPom
    contador=contador + 1;

}

