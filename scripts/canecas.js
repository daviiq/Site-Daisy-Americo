const lista = document.getElementById("lista");

// Filtra apenas itens da categoria "caneca"
const canecas = itens.filter((item) => item.categoria === "caneca"); //⚠️⚠️⚠️ATENÇAO⚠️⚠️⚠️

// CONTRATO COM O FILTRO GENÉRICO
// O filtro espera uma variável global chamada `dadosBase`
window.dadosBase = canecas; //⚠️⚠️⚠️ATENÇAO⚠️⚠️⚠️

// ================= RENDER =================

// CONTRATO COM O FILTRO GENÉRICO
// O filtro chama diretamente essa função
function renderizar(itensParaRenderizar) {
  // Limpa o container
  lista.innerHTML = "";

  // Cria os cards
  itensParaRenderizar.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card-base card-caneca"; //⚠️⚠️⚠️ATENÇAO⚠️⚠️⚠️

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="conteudo">
        <h2>${item.nome}</h2>

        <p class="status ${item.disponivel ? "disponivel" : "indisponivel"}">
          ${item.disponivel ? "Disponível" : "Indisponível"}
        </p>

        <p><strong style="color: #000">R$ ${item.valor}</strong></p>
      </div>
    `;

    // Clique no card
    card.addEventListener("click", () => {
      window.location.href = `caneca.html?id=${item.id}`; //⚠️⚠️⚠️ATENÇAO⚠️⚠️⚠️
    });

    lista.appendChild(card);
  });
}

// ================= INIT =================

// Render inicial da página
renderizar(dadosBase);
