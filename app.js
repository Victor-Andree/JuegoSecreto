let numeroSecreto = 0;
let numIntento = 0;
let listaNumSorteados = [];
let numMaximmo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numIntento);
    if (numerodeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en${numIntento} ${numIntento === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numerodeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numIntento++;
        LimpiarCaja();
    }

    return;
}

function LimpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    return;

}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random() * numMaximmo) + 1;

    console.log(numGenerado);
    console.log(listaNumSorteados);
     //si la lista ya fue sorteada
    if (listaNumSorteados.length == numMaximmo) {
        asignarTextoElemento('p', 'Se acabaron los intentos');
    } else {
        //Si el numero generado esta incluido en la lista

        if (listaNumSorteados.includes(numGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numMaximmo}`);
    numeroSecreto = generarNumeroSecreto();
    numIntento = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar nuevo numero secreto
    //Inicailizar numero de intentos
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}

condicionesIniciales();

