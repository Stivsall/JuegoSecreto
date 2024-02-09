let numeroSecreto = 0;
let intentos = 0;
let listaNumeroRamdom = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`El número es correcto, acertaste en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //se ejecuta si no se acierta
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else{
            asignarTextoElemento("p","El número secreto es Mayor");
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroRamdom);

    if (listaNumeroRamdom.length == numeroMaximo){
        asignarTextoElemento("p",`Ya se sortearon todos los números posibles`);
    }else{
            //condicional para el numero incluido en la lista
        if(listaNumeroRamdom.includes(numeroGenerado)){
            //recursividad la funsion se llama a si misma
            return generaNumeroSecreto;
        }else{
            //incluye el numero en la lista
            listaNumeroRamdom.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales (){
    asignarTextoElemento ("h1", "Juego Secreto!");
    asignarTextoElemento ("p", `Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Reinicia el juego
    condicionesIniciales();
    //Desabilitar el boton de reinicio del juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();
