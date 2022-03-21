<h2 align="center">🚀 Fundamentos Web (Bloco 3 - Generation Brasil)</h2>
<p>Repositório referente ao terceiro e último bloco do bootcamp da <a href="https://brazil.generation.org">Generation Brasil</a>, onde aprendi a construir o front-end de uma aplicação web.</p>
<p>Clicando nas <b><i>Listas</i></b> você será redirecionade aos exercícios que foram propostos durante o bloco, e em <b><i>Resoluções</i></b> você será redirecionade para o repositório específico onde estão as resoluções feitas por mim.</p>

## 🔧 Tecnologias e aprendizado
* HTML5 para a marcação do conteúdo;
* CSS3 para a estilização da página;
* JavaScript para a interação com o usuário;
* Visual Studio Code.

## 📁 Listas dos exercícios
* <a href="https://drive.google.com/file/d/1tP1E9MLhMINnUeySkor905UO8VypojGC/view?usp=sharing"><b>Lista 01</b></a> - Introdução aos fundamentos web (<a href="https://github.com/levmn/fundamentos_web/tree/main/intro">Resoluções</a>);

## 🧏 VLibras
<p> <a href="https://www.gov.br/governodigital/pt-br/vlibras"><b>VLibras</b></a> é um conjunto de ferramentas gratuitas e de código aberto que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras. A integração do VLibras Widget com um website é feita com a inserção de alguns trechos de código antes do fechamento da tag <body> de uma página HTML.</p>

```
<body> <!-- Inicio do corpo da página -->

  ... <!-- Conteúdo da página -->

  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script>
  
</body> <!-- Fim do corpo da página -->  
```

<p>A inserção desta ferramenta dentro do código foi feita em intenção de pesquisa, curiosidade e necessidade da construção de sites que sejam mais acessíveis para todes, o Widget intérprete de Libras é apenas uma das várias ferramentas que podem ser úteis dentro de uma aplicação para que seja mais acessível e inclusiva.</p>
