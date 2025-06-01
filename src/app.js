import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
// let action = ['ate', 'peed', 'crushed', 'broke'];
// let what = ['my homework', 'my phone', 'the car'];
// let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const partes = [
  ['The dog', 'My grandma', 'The mailman', 'My bird'], //who
  ['ate', 'peed', 'crushed', 'broke'], //action
  ['my homework', 'my phone', 'the car'], //what
  ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'] //when
];

function generarExcusa() {
  let excusa = "";
  for (let i = 0; i < partes.length; i++) {
    const grupo = partes[i];
    const palabra = grupo[Math.floor(Math.random() * grupo.length)];
    excusa += palabra + " ";
  }

  document.getElementById("excuse").innerHTML = excusa.trim();

  console.log(excusa.trim());
}

window.onload = function () {
    generarExcusa();
    document.getElementById("generarBtn").addEventListener("click", generarExcusa);
  };
