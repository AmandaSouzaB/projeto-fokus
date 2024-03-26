function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const LISTA_TECLAS = document.querySelectorAll(".tecla");

//document.querySelector(".tecla_pom").onclick = tocaSomPom;

for (let i = 0; i < LISTA_TECLAS.length; i++) {
  const tecla = LISTA_TECLAS[i];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;
  console.log("idAudio", idAudio);
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (event) {
    console.log(event.code);
    if (event.code === "space" || event.code === "NumpadEnter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
