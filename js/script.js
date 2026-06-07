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

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");
const botaoAnterior = document.getElementById("slideAnterior");
const botaoProximo = document.getElementById("slideProximo");

let slideAtual = 0;
const totalSlides = slides.length;

function mostrarSlide(n) {
  slides.forEach(function (slide) {
    slide.classList.remove("ativo");
  });
  indicadores.forEach(function (ind) {
    ind.classList.remove("ativo");
  });
  if (n >= totalSlides) slideAtual = 0;
  if (n < 0) slideAtual = totalSlides - 1;
  slides[slideAtual].classList.add("ativo");
  indicadores[slideAtual].classList.add("ativo");
}

botaoProximo.addEventListener("click", function () {
  slideAtual++;
  mostrarSlide(slideAtual);
});

botaoAnterior.addEventListener("click", function () {
  slideAtual--;
  mostrarSlide(slideAtual);
});
indicadores.forEach(function (indicador, indice) {
  indicador.addEventListener("click", function () {
    slideAtual = indice;
    mostrarSlide(slideAtual);
  });
});
setInterval(function () {
  slideAtual++;
  mostrarSlide(slideAtual);
}, 5000);

const perguntas = [
  {
    pergunta: "Quantos satélites estão atualmente ativos em órbita ao redor da Terra?",
    opcoes: ["Cerca de 500", "Cerca de 6.000", "Cerca de 100.000", "Cerca de 1.500"],
    correta: 1,
  },
  {
    pergunta: "Qual é o principal problema do pescador artesanal ao sair para o mar?",
    opcoes: ["Falta de barcos", "Falta de informação sobre cardumes", "Excesso de fiscalização", "Falta de combustível"],
    correta: 1,
  },
  {
    pergunta: "O que é o LoRa?",
    opcoes: ["Um tipo de satélite", "Uma rede social", "Um protocolo de longo alcance e baixo consumo", "Um tipo de combustível"],
    correta: 2,
  },
  {
    pergunta: "Qual fenômeno climático aquece o Pacífico e afeta cardumes?",
    opcoes: ["La Niña", "El Niño", "Monção", "Tsunami"],
    correta: 1,
  },
  {
    pergunta: "Quantas pessoas no mundo dependem da pesca para sobreviver?",
    opcoes: ["100 mil", "10 milhões", "100 milhões", "600 milhões"],
    correta: 3,
  },
  {
    pergunta: "Qual destas APIs orbitais é gratuita e aberta?",
    opcoes: ["NASA EarthData", "Google Maps Premium", "AWS Satellite", "Microsoft Orbit"],
    correta: 0,
  },
  {
    pergunta: "O que significa SST nos dados oceânicos?",
    opcoes: ["Satellite Sea Track", "Sea Surface Temperature", "Sea Salt Tracker", "Sub Surface Tide"],
    correta: 1,
  },
  {
    pergunta: "Qual ODS o OrbitalFishing endereça ao reduzir a fome em comunidades pesqueiras?",
    opcoes: ["ODS 2 - Fome Zero", "ODS 4 - Educação", "ODS 7 - Energia", "ODS 16 - Paz"],
    correta: 0,
  },
  {
    pergunta: "O receptor LoRa de bordo permite que pescadores recebam dados:",
    opcoes: ["Apenas no porto", "Pela rede 5G", "Direto das boias, sem internet", "Apenas por SMS"],
    correta: 2,
  },
  {
    pergunta: "Vantagem de constelações IoT (Swarm, Astrocast) sobre Starlink?",
    opcoes: ["Mais rápidas", "Cobertura maior", "Mensalidade muito mais barata", "Mais bonitas"],
    correta: 2,
  },
];

const quizInicio = document.getElementById("quizInicio");
const quizPergunta = document.getElementById("quizPergunta");
const quizResultado = document.getElementById("quizResultado");
const perguntaAtualNumero = document.getElementById("perguntaAtualNumero");
const perguntaTexto = document.getElementById("perguntaTexto");
const perguntaOpcoes = document.getElementById("perguntaOpcoes");
const pontuacaoFinal = document.getElementById("pontuacaoFinal");
const mensagemResultado = document.getElementById("mensagemResultado");
const botaoIniciarQuiz = document.getElementById("botaoIniciarQuiz");
const botaoReiniciarQuiz = document.getElementById("botaoReiniciarQuiz");

let perguntaAtual = 0;
let pontuacao = 0;
let respondendo = false;

botaoIniciarQuiz.addEventListener("click", function () {
  perguntaAtual = 0;
  pontuacao = 0;
  quizInicio.hidden = true;
  quizResultado.hidden = true;
  quizPergunta.hidden = false;
  mostrarPergunta();
});

botaoReiniciarQuiz.addEventListener("click", function () {
  perguntaAtual = 0;
  pontuacao = 0;
  quizResultado.hidden = true;
  quizPergunta.hidden = false;
  mostrarPergunta();
});

function mostrarPergunta() {
  respondendo = false;
  const p = perguntas[perguntaAtual];

  perguntaAtualNumero.textContent = perguntaAtual + 1;
  perguntaTexto.textContent = p.pergunta;

  perguntaOpcoes.innerHTML = "";

  for (let i = 0; i < p.opcoes.length; i++) {
    const botao = document.createElement("button");
    botao.classList.add("quiz-opcao");
    botao.textContent = p.opcoes[i];

    botao.addEventListener("click", function () {
      verificarResposta(i);
    });

    perguntaOpcoes.appendChild(botao);
  }
}

function verificarResposta(escolha) {
  if (respondendo) return;
  respondendo = true;

  const p = perguntas[perguntaAtual];
  const botoes = perguntaOpcoes.querySelectorAll(".quiz-opcao");

  botoes.forEach(function (botao, i) {
    if (i === p.correta) {
      botao.classList.add("certo");
    } else if (i === escolha) {
      botao.classList.add("errado");
    }
  });

  if (escolha === p.correta) {
    pontuacao++;
  }

  setTimeout(function () {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }, 1200);
}

function mostrarResultado() {
  quizPergunta.hidden = true;
  quizResultado.hidden = false;
  pontuacaoFinal.textContent = pontuacao;

  let msg = "";
  if (pontuacao === 10) {
    msg = "Perfeito! Você é um especialista em pesca espacial.";
  } else if (pontuacao >= 7) {
    msg = "Excelente! Você domina o tema do OrbitalFishing.";
  } else if (pontuacao >= 4) {
    msg = "Bom trabalho! Vale revisar a landing pra aprender mais.";
  } else {
    msg = "Vale conhecer mais sobre o projeto — leia as seções acima!";
  }
  mensagemResultado.textContent = msg;
}