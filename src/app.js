import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  console.log("Hello Rigo from the console!");

let palos = ['♦', '♥', '♠', '♣'];
let valor = ['A', '2', '3', '4','5','6','7','8','9','10', 'K', 'Q', 'J'];

function generadorDeCartas(){

  let aleatorio = Math.floor(Math.random() * palos.length);
  let aleatorio2 = Math.floor(Math.random() * valor.length);

  let palo = palos[aleatorio];
  let numero = valor[aleatorio2];

  let color;

  if (palo === '♦' || palo === '♥') {
    color = "red";
  } else {
    color = "black";
  }

  return {
    palo: palo,
    valor: numero,
    color: color
  };

}

let carta = generadorDeCartas();

document.getElementById("palos").innerHTML = carta.palo;
document.getElementById("valor").innerHTML = carta.valor;
document.getElementById("palos2").innerHTML = carta.palo;

document.getElementById("palos").style.color = carta.color;
document.getElementById("valor").style.color = carta.color;
document.getElementById("palos2").style.color = carta.color;

console.log(carta);


};
