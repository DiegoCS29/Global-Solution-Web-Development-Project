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
        pergunta:
            "Qual tecnologia é fundamental para o funcionamento do Orbital Fishing?",
        opcoes: [
            "Satélites de observação da Terra",
            "Impressoras 3D",
            "Carros autônomos",
            "Realidade virtual",
        ],
        correta: 0,
    },
    {
        pergunta:
            "Qual é o principal problema do pescador artesanal ao sair para o mar?",
        opcoes: [
            "Falta de barcos",
            "Falta de informação sobre cardumes",
            "Excesso de fiscalização",
            "Falta de combustível",
        ],
        correta: 1,
    },
    {
        pergunta:
            "Quais dados as boias sensoras coletam?",
        opcoes: [
            "Temperatura, salinidade, pH e correntes",
            "Velocidade de carros",
            "Preço dos peixes",
            "Dados de redes sociais"
        ],
        correta: 0,
    },
    {
        pergunta:
            "Qual benefício o Orbital Fishing oferece para a segurança dos pescadores?",
        opcoes: [
            "Alertas climáticos antecipados",
            "Barcos maiores",
            "Combustível gratuito",
            "Seguro de vida automático"
        ],
        correta: 0,
    },
    {
        pergunta: "Quantas pessoas no mundo dependem da pesca para sobreviver?",
        opcoes: [
            "100 mil", 
            "10 milhões", 
            "100 milhões", 
            "600 milhões"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual componente analisa os dados e gera os mapas de cardumes?",
        opcoes: [
            "A Inteligência Artificial",
            "O GPS do barco",
            "O motor da embarcação",
            "A previsão do Google"
        ],
        correta: 0,
    },
    {
        pergunta:
            "Quais informações o Orbital Fishing utiliza para prever onde há cardumes?",
        opcoes: [
            "Somente previsão do tempo",
            "Dados de satélites e boias sensoras",
            "Redes sociais de pescadores",
            "Dados de trânsito marítimo",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual problema o Orbital Fishing busca resolver?",
        opcoes: [
            "A falta de peixes nos oceanos",
            "A dificuldade dos pescadores em acessar informações oceânicas",
            "A construção de novos portos",
            "A venda ilegal de pescado",
        ],
        correta: 1,
    },
    {
        pergunta:
            "Qual recurso ajuda o pescador mesmo sem acesso à internet?",
        opcoes: [
            "Mapas offline com dados pré-carregados",
            "Transmissão por TV",
            "Chamadas por satélite",
            "Mensagens SMS automáticas",
        ],
        correta: 0,
    },
    {
        pergunta:
            "Qual é o principal benefício do Orbital Fishing para pescadores artesanais?",
        opcoes: [
            "Comprar barcos maiores",
            "Encontrar cardumes com mais precisão",
            "Vender peixes automaticamente",
            "Substituir a pesca tradicional",
        ],
        correta: 1,
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

const formulario = document.getElementById("formularioContato");
const formularioSucesso = document.getElementById("formularioSucesso");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cidade = document.getElementById("cidade");
    const perfil = document.getElementById("perfil");

    let valido = true;

    limparErros();

    if (nome.value.trim() === "") {
        mostrarErro(nome, "erroNome", "Por favor, preencha seu nome.");
        valido = false;
    } else if (nome.value.trim().length < 3) {
        mostrarErro(nome, "erroNome", "O nome deve ter pelo menos 3 caracteres.");
        valido = false;
    }

    if (email.value.trim() === "") {
        mostrarErro(email, "erroEmail", "Por favor, preencha seu e-mail.");
        valido = false;
    } else if (!validarEmail(email.value)) {
        mostrarErro(
            email,
            "erroEmail",
            "E-mail inválido. Use o formato: nome@dominio.com",
        );
        valido = false;
    }

    if (cidade.value.trim() === "") {
        mostrarErro(
            cidade,
            "erroCidade",
            "Por favor, informe sua cidade ou porto.",
        );
        valido = false;
    }

    if (perfil.value === "") {
        mostrarErro(perfil, "erroPerfil", "Por favor, selecione seu perfil.");
        valido = false;
    }

    if (valido) {
        formularioSucesso.hidden = false;
        formulario.reset();

        setTimeout(function () {
            formularioSucesso.hidden = true;
        }, 4000);
    }
});

function mostrarErro(campo, idErro, mensagem) {
    campo.classList.add("invalido");
    document.getElementById(idErro).textContent = mensagem;
}

function limparErros() {
    const campos = formulario.querySelectorAll(".formulario-campo");
    campos.forEach(function (c) {
        c.classList.remove("invalido");
    });

    const erros = formulario.querySelectorAll(".formulario-erro");
    erros.forEach(function (e) {
        e.textContent = "";
    });
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}