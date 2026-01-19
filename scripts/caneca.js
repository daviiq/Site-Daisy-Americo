const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const item = itens.find((i) => i.id === id && i.categoria === "caneca");
const container = document.getElementById("caneca");

if (!item) {
  container.innerHTML = "<p>Caneca não encontrada.</p>";
} else {
  document.title = item.nome + " – Daisy Américo";
  // ATUALIZA TEXTO DO HEADER
  const headerLocation = document.querySelector(".header-location");
  if (headerLocation) {
    headerLocation.textContent = `Caneca ${item.nome}`;
  }

  container.innerHTML = `
    <img src="${item.imagem}" alt="${item.nome}">
    <div class="info">
      <h1>${item.nome}</h1>
      <p>${item.descricao}</p>
      <p><strong>Técnica:</strong> ${item.tecnica}</p>
      <p><strong>Tamanho:</strong> ${item.tamanho}</p>
      <p><strong>Valor:</strong> R$ ${item.valor.toFixed(2)}</p>
      <p class="status ${item.disponivel ? "disponivel" : "indisponivel"}">
        ${item.disponivel ? "Disponível" : "Indisponível"}
      </p>

      <div class="acoes">
        ${
          item.disponivel
            ? `<a href="https://wa.me/554888320641?text=${encodeURIComponent(
                `Olá, me chamo ____ e tenho interesse na caneca "${item.nome}".`
              )}" role="button">Entrar em contato</a>`
            : `<span role="button" disabled>Indisponível</span>`
        }
      </div>
    </div>
  `;
}
