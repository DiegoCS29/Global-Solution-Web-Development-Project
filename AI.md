# AI.md — Registro de Uso de Inteligência Artificial

Este documento registra o uso de ferramentas de Inteligência Artificial no desenvolvimento da landing page do OrbitalFishing, conforme exigido pela disciplina Web Development.

Utilizamos IA para auxiliar no desenvolvimento dos seguintes componentes do projeto:

- **Logo** — criação do SVG
- **Quiz** — auxílio na estrutura da lógica em JavaScript
- **Temas** — auxílio na implementação do sistema de 3 temas com variáveis CSS
- **Imagem da boia sensora** — geração de imagem ilustrativa para o slideshow

A seguir, cada interação detalhada.

---

## Interação 1 — Logo

**O que foi solicitado para a IA:**
Pedimos à IA que criasse um logo em SVG simples para o OrbitalFishing, representando a conexão entre o oceano (linha ondulada) e o espaço (círculo orbital e satélite). A intenção era um símbolo que combinasse com o nome do projeto e que pudesse ser usado tanto em fundo claro quanto em fundo escuro.

**O que a IA retornou:**
A IA gerou um código SVG com três elementos:
- Um círculo grande sem preenchimento (representando a Terra e o ciclo orbital)
- Uma linha ondulada no meio (representando o oceano)
- Um pequeno círculo preenchido no canto superior direito (representando um satélite em órbita)

O SVG usa `currentColor` no `stroke` e `fill`, permitindo que a cor seja controlada via CSS.

**O que foi alterado ou rejeitado e o motivo:**
Mantivemos a estrutura do SVG. Ajustamos apenas a cor para usar a variável `--color-primary` do nosso CSS, fazendo com que o logo se adapte automaticamente quando o usuário troca de tema (padrão, oceano ou escuro). Essa pequena alteração foi necessária para manter consistência visual entre os 3 temas.

---

## Interação 2 — Quiz

**O que foi solicitado para a IA:**
A IA nos auxiliou apenas na estrutura da lógica do quiz dinâmico em JavaScript. As 10 perguntas em si foram pensadas e escritas pela equipe. Pedimos que a IA sugerisse como organizar o código para:
- Armazenar perguntas e respostas
- Mostrar uma pergunta por vez
- Verificar se a resposta está certa ou errada
- Calcular a pontuação final

**O que a IA retornou:**
A IA sugeriu usar um array de objetos para armazenar as perguntas, com as propriedades `pergunta`, `opcoes` (array de alternativas) e `correta` (índice da resposta certa). Também sugeriu separar a lógica em três funções principais:
- `mostrarPergunta()` — exibe a pergunta atual e cria os botões de opção
- `verificarResposta()` — destaca a resposta certa em verde, a errada em vermelho, soma o ponto e avança
- `mostrarResultado()` — exibe a pontuação final e uma mensagem baseada no desempenho

A IA também sugeriu usar `setTimeout` para dar 1,2 segundos entre clicar na resposta e avançar para a próxima pergunta, dando tempo de o usuário ver se acertou.

**O que foi alterado ou rejeitado e o motivo:**
As 10 perguntas e respostas foram criadas pela equipe com base no conteúdo do projeto (satélites, pesca artesanal, LoRa, ODS, El Niño, etc.). A IA não escreveu nenhuma pergunta — apenas ajudou com a estrutura do código.

Também ajustamos a mensagem final de resultado para refletir o tom da equipe (por exemplo, "Você é um especialista em pesca espacial" para quem tira 10).

Inicialmente a IA sugeriu usar `data-index` nos botões de opção para identificar qual foi clicada, mas optamos por uma abordagem mais simples usando `let i` dentro do laço `for`, que preserva o índice da iteração na função de callback. Achamos essa solução mais limpa e adequada ao que aprendemos em aula.

---

## Interação 3 — Temas (sistema de 3 cores)

**O que foi solicitado para a IA:**
Pedimos à IA que nos explicasse como implementar 3 temas de cores trocáveis com HTML, CSS e JavaScript puro, sem usar framework. A ideia era ter:
- Tema padrão (branco com azul escuro)
- Tema oceano (azul claro com turquesa)
- Tema escuro (preto com azul claro)

**O que a IA retornou:**
A IA sugeriu uma abordagem baseada em variáveis CSS:
- Definir as cores padrão dentro de `:root` no CSS
- Criar duas classes adicionais no CSS (`.tema-oceano` e `.tema-escuro`) que sobrescrevem essas variáveis quando aplicadas no `<body>`
- No JavaScript, basta usar `classList.add` e `classList.remove` no body para trocar entre os temas
- Cada elemento que usa as variáveis (`var(--color-bg)`, `var(--color-primary)` etc.) muda automaticamente

**O que foi alterado ou rejeitado e o motivo:**
As cores específicas dos 3 temas foram escolhidas pela equipe, não pela IA. O tema padrão foi definido como branco + cinza + azul escuro porque queríamos uma identidade clean e profissional. O tema oceano usa tons turquesa para remeter ao mar. O tema escuro foi inspirado nas profundezas do oceano (azul-marinho quase preto com detalhes em azul claro).

Inicialmente a IA sugeriu usar `data-theme` como atributo nos botões para identificar qual tema acionar. Optamos por usar três IDs separados (`tema1`, `tema2`, `tema3`) com listeners individuais — achamos mais didático e fácil de entender para o nível do nosso aprendizado em sala.

---

## Interação 4 — Imagem da Boia Sensora (Slideshow)

**O que foi solicitado para a IA:**
Pedimos à IA que gerasse uma imagem ilustrativa de uma boia sensora oceânica para ser utilizada no slideshow da landing page. O objetivo era ter uma representação visual do hardware do OrbitalFishing — a boia que coleta temperatura, salinidade, pH, clorofila-a e correntes no oceano — já que não tínhamos uma fotografia real disponível.

**O que a IA retornou:**
A IA gerou uma imagem de uma boia sensora flutuando no oceano, com elementos visuais que remetem a equipamentos de monitoramento marinho, como antenas e sensores. A imagem foi salva como `Boia Sensora.png` e adicionada à pasta `img` do projeto.

**O que foi alterado ou rejeitado e o motivo:**
A imagem gerada foi utilizada sem alterações estruturais, pois representava adequadamente o conceito de boia sensora oceânica proposto pelo projeto. A legenda do slide foi escrita pela equipe: *"Exemplo de boia sensora para coletar dados oceânicos, imagem criada utilizando IA com prompts."* — deixando explícito ao visitante que se trata de uma imagem gerada por inteligência artificial, não uma fotografia real do equipamento.

---

## Observação final

Toda decisão final sobre conteúdo, design, cores, texto e código foi tomada pela equipe. A IA foi utilizada como apoio pontual em 4 componentes específicos (logo, estrutura do quiz, estrutura dos temas e geração de imagem), não para gerar o projeto inteiro. Cada integrante revisou e testou o código antes da entrega.