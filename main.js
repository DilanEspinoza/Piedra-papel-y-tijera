let punJugador = 0;
let punComputadora = 0;
let $puntuacionComputadora = document.getElementById("puntuacion-computadora");
let $puntuacionJugador = document.getElementById("puntuacion-jugador");
let $tituloJuego = document.getElementById("titulo-juego");

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
    if (punJugador == "5") {
      $puntuacionJugador.textContent = "5";
      $tituloJuego.textContent = "El ganador de esta ronda es el jugador";
      setTimeout(() => {
        finJuego();
      }, 2500);
    }
  } else if (
    (arma2.textContent === "✊" && arma1.textContent === "✌") ||
    (arma2.textContent === "✌" && arma1.textContent === "✋") ||
    (arma2.textContent === "✋" && arma1.textContent === "✊")
  ) {
    estadoRonda.textContent = "El ganador es la computadora";
    $puntuacionComputadora.textContent = ++punComputadora;
    if (punComputadora == "5") {
      $puntuacionComputadora.textContent = "5";
      $tituloJuego.textContent = "El ganador de esta ronda es la computadora";
      setTimeout(() => {
        finJuego();
      }, 2500);
    }
  }
}

function finJuego() {
  $tituloJuego.textContent = "Selecciona tu arma";
  estadoRonda.textContent = "El primero en obtener 5 puntos gana";
  $puntuacionComputadora.textContent = "0";
  $puntuacionJugador.textContent = "0";
}
