// Pega o ID da URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Busca o item pelo ID
const item = itens.find(i => i.id === id);
const container = document.getElementById("quadro");

if (!item) {
  container.innerHTML = "<p>Obra não encontrada.</p>";
} else {
  // Atualiza o título da página
  document.title = item.titulo + " – Daisy Américo";

  // Monta o HTML dentro do container
  container.innerHTML = `
    <img src="${item.imagem}" alt="${item.titulo}">

    <div class="info">
      <h1>${item.titulo}</h1>

      <p>
        <time datetime="${item.data.split('/').reverse().join('-')}">
          ${item.data}
        </time>
      </p>

      <p>
        ${item.descricao}
      </p>

      <div class="materia">
        ${item.materia}
      </div>
    </div>
  `;
}
