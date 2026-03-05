import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

let palos = ['Corazones', 'Picas', 'Trebol', 'Diamantes']
let valor = ['A', '2', '3', '4','5','6','7','8','9','10', 'R', 'Rna', 'J'];

function generadorDeCartas(){

let aleatorio = Math.floor(Math.random() * palos.length);
let aleatorio2 = Math.floor(Math.random() * valor.length);


return (palos[aleatorio]+' '+valor[aleatorio2]);


};

generadorDeCartas();

let carta = generadorDeCartas();
document.getElementById("carta").innerHTML = carta;
console.log(carta);



};
