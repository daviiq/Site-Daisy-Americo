// ================= ELEMENTOS =================

// Lista onde os cards serão renderizados
const lista = document.getElementById("lista");

// ================= DADOS =================

// Apenas itens da categoria "quadro"
// ESSA variável é a base da página
const quadros = itens.filter((item) => item.categoria === "quadro");

// ⚠️ CONTRATO COM O FILTRO GENÉRICO
// O filtro espera uma variável global chamada `dadosBase`
window.dadosBase = quadros;

// ================= RENDER =================

// ⚠️ CONTRATO COM O FILTRO GENÉRICO
// O filtro chama diretamente essa função
function renderizar(itensParaRenderizar) {
  lista.innerHTML = "";

  itensParaRenderizar.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card-base card-outro";

    const temDesconto = item.desconto && item.desconto > 0;

    let precoHTML = "";

    if (temDesconto) {
      const valorComDesconto = item.valor - item.desconto;

      precoHTML = `
        <p class="preco-antigo">R$ ${item.valor}</p>
        <p class="preco-novo">R$ ${valorComDesconto}</p>
      `;
    } else {
      precoHTML = `
        <p class="preco-normal">R$ ${item.valor}</p>
      `;
    }

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">

      <div class="conteudo">
        <h2>${item.nome}</h2>

        <p class="status ${item.disponivel ? "disponivel" : "indisponivel"}">
          ${item.disponivel ? "Disponível" : "Indisponível"}
        </p>

        ${precoHTML}
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `quadro.html?id=${item.id}`;
    });

    lista.appendChild(card);
  });
}

// ================= INIT =================

// Render inicial da página
renderizar(dadosBase);
