let punJugador = 0;
let punComputadora = 0;
let $puntuacionComputadora = document.getElementById("puntuacion-computadora");
let $puntuacionJugador = document.getElementById("puntuacion-jugador");

const estadoRonda = document.getElementById("estado-ronda");
const arma1 = document.getElementById("arma-1");
const arma2 = document.getElementById("arma-2");

const opcionArmas = ["piedra", "papel", "tijera"];

document.querySelectorAll(".arma").forEach((arma) => {
  arma.addEventListener("click", juego);
});

function juego() {
  const opcionJugador = this.id;

  const opcionComputadora = opcionRandomComputador();

  return agregarArma(opcionJugador, opcionComputadora);
}

function agregarArma(opcionJugador, opcionComputadora) {
  if (opcionJugador === opcionArmas[0]) {
    arma1.textContent = "✊";
    arma2.textContent = opcionComputadora;
  } else if (opcionJugador === opcionArmas[1]) {
    arma1.textContent = "✋";
    arma2.textContent = opcionComputadora;
  } else if (opcionJugador === opcionArmas[2]) {
    arma1.textContent = "✌";
    arma2.textContent = opcionComputadora;
  }

  ganadorRonda();
}

function opcionRandomComputador() {
  const numeroRandom = Math.floor(Math.random() * 3);
  if (numeroRandom === 0) {
    return "✊";
  } else if (numeroRandom === 1) {
    return "✌";
  } else if (numeroRandom === 2) {
    return "✋";
  }
}

function ganadorRonda() {
  if (arma1.textContent === arma2.textContent) {
    estadoRonda.textContent = "Empate";
  } else if (
    (arma1.textContent === "✊" && arma2.textContent === "✌") ||
    (arma1.textContent === "✌" && arma2.textContent === "✋") ||
    (arma1.textContent === "✋" && arma2.textContent === "✊")
  ) {
    estadoRonda.textContent = "El ganador es el jugador";
    $puntuacionJugador.textContent = ++punJugador;
  } else if (
    (arma2.textContent === "✊" && arma1.textContent === "✌") ||
    (arma2.textContent === "✌" && arma1.textContent === "✋") ||
    (arma2.textContent === "✋" && arma1.textContent === "✊")
  ) {
    estadoRonda.textContent = "El ganador es la computadora";
    $puntuacionComputadora.textContent = ++punComputadora;
  }
}
