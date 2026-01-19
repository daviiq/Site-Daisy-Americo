// ================= FILTRO – PARTE GENÉRICA =================
// Este arquivo controla:
// - abrir / fechar filtros
// - botão Filtrar
// - botão Resetar
// - leitura dos selects
// Ele NÃO sabe o que são quadros, canecas, etc.
// Ele DEPENDE de:
// - uma variável global chamada `dadosBase`
// - uma função global chamada `renderizar()`

// ================= ELEMENTOS =================

const filtroValor = document.getElementById("filtroValor");
const filtroDisponivel = document.getElementById("filtroDisponivel");

const botaoFiltro = document.getElementById("aplicarFiltros");
const botaoReset = document.getElementById("resetFiltros");

const toggleFiltros = document.getElementById("toggleFiltros");
const filtrosContainer = document.getElementById("filtrosContainer");

// ================= TOGGLE FILTROS =================

// Abre / fecha o container de filtros
toggleFiltros.addEventListener("click", () => {
  const aberto = filtrosContainer.classList.contains("aberto");

  filtrosContainer.classList.toggle("aberto", !aberto);
  filtrosContainer.classList.toggle("fechado", aberto);

  toggleFiltros.textContent = aberto
    ? "▾ Exibir filtros"
    : "▴ Ocultar filtros";
});

// Fecha filtros (usado após filtrar ou resetar)
function fecharFiltros() {
  filtrosContainer.classList.remove("aberto");
  filtrosContainer.classList.add("fechado");
  toggleFiltros.textContent = "▾ Exibir filtros";
}

// ================= APLICA FILTROS =================

function aplicarFiltrosGenerico() {
  let resultado = [...dadosBase]; // <- vem da página

  // Filtro de disponibilidade
  if (filtroDisponivel.value !== "") {
    const disponivel = filtroDisponivel.value === "true";
    resultado = resultado.filter(item => item.disponivel === disponivel);
  }

  // Ordenação por valor
  if (filtroValor.value === "asc") {
    resultado.sort((a, b) => a.valor - b.valor);
  }

  if (filtroValor.value === "desc") {
    resultado.sort((a, b) => b.valor - a.valor);
  }

  // Renderiza usando função da página
  renderizar(resultado);

  fecharFiltros();
}

// ================= EVENTOS =================

// Botão Filtrar
botaoFiltro.addEventListener("click", aplicarFiltrosGenerico);

// Botão Resetar
botaoReset.addEventListener("click", () => {
  filtroValor.value = "";
  filtroDisponivel.value = "";

  renderizar(dadosBase); // <- dados da página
  fecharFiltros();
});
