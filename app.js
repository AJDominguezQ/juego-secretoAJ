/*let titulo = document.querySelector('h1');// asiganmos a una variable(titulo) para que h1 pueeda retornar
titulo.innerHTML='Juego del numero Secreto';

let parrafo =document.querySelector('p');
parrafo.innerHTML='Escoje un numero del 1 al 10';*/

//funcion para reducir el document y los titulos, con parametros 
let numeroSecreto = 0;
let intentos= 0; // el contador.
let listaNumerosSorteados = []; 
let numeroMaximo = 10; 
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){  // esta funcion es para mostrar el texto del cuarpo p 
       let elementoHTML = document.querySelector(elemento);
       elementoHTML.innerHTML = texto;
       return;
}

function verificarIntento(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);// esto es para accder al input y solo al valor 
   
    
    if(numeroDeUsuario === numeroSecreto){//una validacion en valor y en tipo 
     asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');// esto es para activar el segundo boton 'nuevo juego'
    }
    else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();  
    }
    return; 
}

//funcion que limpia la caja
function limpiarCaja(){
    document.querySelector('#valorUsuario').value =''; 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo ) +1;
    //si el numero generado esta incluido en la lista.
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//si ya sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
    }else{
        //si el numero generado esta includio en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();// se va a llamar a si misma, va achecar si ya existe el numero y devolvera el numero correcto 
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado

        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto! ');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}! `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
     


}

condicionesIniciales();