const corpo = document.body;
const botaoTema1 = document.getElementById("tema1");
const botaoTema2 = document.getElementById("tema2");
const botaoTema3 = document.getElementById("tema3");
const todosBotoesTema = document.querySelectorAll(".botao-tema");

function aplicarTema(classeTema, botaoClicado) {
  corpo.classList.remove("tema-oceano", "tema-escuro");
  if (classeTema !== "") {
    corpo.classList.add(classeTema);
  }
  todosBotoesTema.forEach(function (botao) {
    botao.classList.remove("ativo");
  });
  botaoClicado.classList.add("ativo");
}
botaoTema1.addEventListener("click", function () {
  aplicarTema("", this);
});

botaoTema2.addEventListener("click", function () {
  aplicarTema("tema-oceano", this);
});

botaoTema3.addEventListener("click", function () {
  aplicarTema("tema-escuro", this);
});