import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {



  const PALOS = ['♦', '♥', '♠', '♣'];
  const VALORES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function generarCarta() {

    const palo = PALOS[Math.floor(Math.random() * PALOS.length)];
    const valor = VALORES[Math.floor(Math.random() * VALORES.length)];

    const color = (palo === '♦' || palo === '♥') ? "red" : "black";

    const paloArriba = document.getElementById("palos");
    const valorCentro = document.getElementById("valor");
    const paloAbajo = document.getElementById("palos2");

    paloArriba.textContent = palo;
    valorCentro.textContent = valor;
    paloAbajo.textContent = palo;

    paloArriba.style.color = color;
    valorCentro.style.color = color;
    paloAbajo.style.color = color;

    return { palo, valor, color };
  }

  const carta = generarCarta();
  console.log(carta);


};
