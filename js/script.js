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

const linksMenu = document.querySelectorAll(".menu-link");
const secoes = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
  let secaoAtual = "";

  secoes.forEach(function (secao) {
    const topo = secao.offsetTop - 100;
    const altura = secao.offsetHeight;

    if (window.scrollY >= topo && window.scrollY < topo + altura) {
      secaoAtual = secao.getAttribute("id");
    }
  });

  linksMenu.forEach(function (link) {
    link.classList.remove("ativo");
    if (link.getAttribute("href") === "#" + secaoAtual) {
      link.classList.add("ativo");
    }
  });
});