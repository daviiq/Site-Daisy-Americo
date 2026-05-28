// Armazena o array de produtos globalmente
window.items = itens;

// Espera todo o HTML carregar antes de executar o código
document.addEventListener("DOMContentLoaded", ()=>{

  // Define o tipo do carrossel
  // Neste caso: produtos em destaque
  const tipo = "destaque";

  // Busca o container do carrossel no HTML
  // Exemplo: <div id="carousel-destaque"></div>
  const box = document.getElementById("carousel-" + tipo);

  // Verifica se o array global existe
  if(!window.items){
    alert("ERRO: array items não encontrado");
    return;
  }

  // Filtra apenas produtos marcados como destaque
  const lista = items.filter(i => i.destaque);

  // Caso não exista nenhum produto
  if(!lista.length){
    box.innerHTML = "<p style='text-align:center'>Sem produtos</p>";
    return;
  }

  // Índice do card atualmente selecionado
  let idx = 0;

  // Percorre todos os produtos filtrados
  lista.forEach(item => {

    // Cria uma div para o card
    const card = document.createElement("div");

    // Define as classes CSS do card
    card.className = "card cardsel";

    // Calcula o valor final
    // Se houver desconto, subtrai do valor original
    const valor = item.desconto ? item.valor - item.desconto : item.valor;

    // Insere o conteúdo HTML do card
    card.innerHTML = `
      <img src="${item.imagem}">
      <h3>${item.nome}</h3>

      <!-- Exibe o valor antigo caso tenha desconto -->
      ${item.desconto ? `<div class="old">R$ ${item.valor}</div>` : ""}

      <!-- Valor final -->
      <div class="price">R$ ${valor}</div>
    `;

    // Evento de clique do card
    card.onclick = () => {

      // Página padrão
      let rota = "outro.html";

      // Define rota conforme categoria
      if(item.categoria === "quadro")
        rota = "quadros/quadro.html";

      if(item.categoria === "caneca")
        rota = "canecas/caneca.html";

      // Redireciona para a página do produto
      // passando o id pela URL
      window.location.href = `${rota}?id=${item.id}`;
    };

    // Adiciona o card dentro do container
    box.appendChild(card);
  });

  // Função responsável pela animação/posição dos cards
  function render() {

  // Seleciona todos os cards do carrossel
  const cards = box.querySelectorAll(".cardsel");

  // Percorre cada card
  cards.forEach((c,i)=>{

    // Calcula posição relativa ao card atual
    const p = i - idx;

    // Esconde cards muito distantes
    if(Math.abs(p) > 1){
      c.style.opacity = 0;
      // Impede clique nos cards escondidos
      c.style.pointerEvents = "none";
      c.style.zIndex = 0;
      return;
    }

    // Exibe cards próximos
    c.style.opacity = 1;

    //Permite que apenas os cards visiveis recebam clique e o card central fica acima dos demais
    c.style.pointerEvents = "auto";
    c.style.zIndex = (p === 0) ? 10 : 5;

    // Aplica efeito 3D
    c.style.transform =
      `translateX(${p*260}px)
       translateZ(${p===0?0:-120}px)
       rotateY(${p*-20}deg)`;
  });
}

  // Executa renderização inicial
  render();

  // Seleciona os botões do carrossel
  document.querySelectorAll(`[data-carousel="${tipo}"]`).forEach(b=>{

    // Evento de clique dos botões
    b.onclick = () => {

      // Se botão tiver classe "left"
      // volta um card
      // senão avança
      b.classList.contains("left") ? idx-- : idx++;

      // Loop infinito do carrossel
      if(idx < 0)
        idx = lista.lengt-1;

      if(idx >= lista.length)
        idx = 0;

      // Atualiza posições
      render();
    };
  });

  // Rotação automática a cada 4 segundos
  setInterval(()=>{

    // Avança automaticamente
    idx++;

    // Reinicia ao chegar no final
    if(idx >= lista.length)
      idx = 0;

    // Atualiza renderização
    render();

  }, 4000);

});



// ======================================================
// CARROSSEL DE DESCONTOS
// ======================================================

// Array global de produtos
window.items = itens;

// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", ()=>{

  // Tipo do carrossel
  const tipo = "desconto";

  // Container do carrossel
  const box = document.getElementById("carousel-" + tipo);

  // Verifica existência do array
  if(!window.items){
    alert("ERRO: array items não encontrado");
    return;
  }

  // Filtra apenas produtos com desconto
  const lista = items.filter(i => i.desconto > 0);

  // Caso não existam produtos
  if(!lista.length){
    box.innerHTML = "<p style='text-align:center'>Sem produtos</p>";
    return;
  }

  // Índice atual
  let idx = 0;

  // Criação dos cards
  lista.forEach(item => {

    const card = document.createElement("div");
    card.className = "card cardsel";

    // Valor final com desconto
    const valor = item.desconto
      ? item.valor - item.desconto
      : item.valor;

    // HTML do card
    card.innerHTML = `
      <img src="${item.imagem}">
      <h3>${item.nome}</h3>

      ${item.desconto
        ? `<div class="old">R$ ${item.valor}</div>`
        : ""}

      <div class="price">R$ ${valor}</div>
    `;

    // Clique do card
    card.onclick = () => {

      let rota = "outro.html";

      if(item.categoria === "quadro")
        rota = "quadros/quadro.html";

      if(item.categoria === "caneca")
        rota = "canecas/caneca.html";

      // Redirecionamento
      window.location.href = `${rota}?id=${item.id}`;
    };

    // Adiciona card no container
    box.appendChild(card);
  });

  // Renderização visual
   function render() {

  // Seleciona todos os cards do carrossel
  const cards = box.querySelectorAll(".cardsel");

  // Percorre cada card
  cards.forEach((c,i)=>{

    // Calcula posição relativa ao card atual
    const p = i - idx;

    // Esconde cards muito distantes
    if(Math.abs(p) > 1){
      c.style.opacity = 0;
      // Impede clique nos cards escondidos
      c.style.pointerEvents = "none";
      c.style.zIndex = 0;
      return;
    }

    // Exibe cards próximos
    c.style.opacity = 1;

    //Permite que apenas os cards visiveis recebam clique e o card central fica acima dos demais
    c.style.pointerEvents = "auto";
    c.style.zIndex = (p === 0) ? 10 : 5;

    // Aplica efeito 3D
    c.style.transform =
      `translateX(${p*260}px)
       translateZ(${p===0?0:-120}px)
       rotateY(${p*-20}deg)`;
  });
}

  // Primeira renderização
  render();

  // Botões de navegação
  document.querySelectorAll(`[data-carousel="${tipo}"]`).forEach(b=>{

    b.onclick = () => {

      // Navegação esquerda/direita
      b.classList.contains("left")
        ? idx--
        : idx++;

      // Loop infinito
      if(idx < 0)
        idx = lista.length-1;

      if(idx >= lista.length)
        idx = 0;

      // Atualiza tela
      render();
    };
  });

  // Auto-play do carrossel
  setInterval(()=>{

    idx++;

    if(idx >= lista.length)
      idx = 0;

    render();

  }, 4000);

});