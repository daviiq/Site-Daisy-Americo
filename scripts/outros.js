const lista = document.getElementById("lista");

// Filtra apenas itens da categoria "caneca"
const canecas = itens.filter(item => item.categoria === "outro");

canecas.forEach(item => {

  // Card principal
  const card = document.createElement("article");
  card.className = "card-base card-outros";

  card.innerHTML = `
    <img src="${item.imagem}" alt="${item.nome}">
    <div class="conteudo">
      <h2>${item.nome}</h2>
      <p class="status ${item.disponivel ? 'disponivel' : 'indisponivel'}">
        ${item.disponivel ? 'Disponível' : 'Indisponível'}
      </p>
    </div>
  `;

  // Evento de clique no card
  card.addEventListener("click", () => {
    window.location.href = `outro.html?id=${item.id}`;
  });

  lista.appendChild(card);
});
