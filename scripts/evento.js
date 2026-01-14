const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const item = itens.find(i => i.id === id);
const container = document.getElementById("quadro");

if (!item) {
  container.innerHTML = "<p>Evento não encontrado.</p>";
} else {
  document.title = item.titulo + " – Daisy Américo";

  container.innerHTML = `
    <article class="quadro-detalhe">
      <img src="${item.imagem}" alt="${item.titulo}">

      <div class="info">
        <h1>${item.titulo}</h1>

        <p class="data">
          <time datetime="${item.data.split('/').reverse().join('-')}">
            ${item.data}
          </time>
        </p>

        <p class="descricao">
          ${item.descricao}
        </p>

        <div class="materia">
          ${item.materia}
        </div>
      </div>
    </article>
  `;
}
