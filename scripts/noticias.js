const lista = document.getElementById("lista");

// Função para converter "DD/MM/YYYY" em Date
function parseDataBR(data) {
  const [dia, mes, ano] = data.split("/");
  return new Date(ano, mes - 1, dia);
}

// Ordena os itens pela data (mais recente primeiro)
const itensOrdenados = itens
  .slice() // cria uma cópia para não alterar o array original
  .sort((a, b) => parseDataBR(b.data) - parseDataBR(a.data));

itensOrdenados.forEach(item => {

  // Card principal
  const card = document.createElement("article");
  card.className = "card-quadro";

  card.innerHTML = `
    <img src="${item.imagem}" alt="${item.titulo}">
    <div class="conteudo">
      <h2>${item.titulo}</h2>
      <p class="descricao">${item.descricao}</p>
      <span class="data">${item.data}</span>
    </div>
  `;

  // Evento de clique no card
  card.addEventListener("click", () => {
    window.location.href = `noticia.html?id=${item.id}`;
  });

  lista.appendChild(card);
});
