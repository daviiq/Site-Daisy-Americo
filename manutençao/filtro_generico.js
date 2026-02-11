// ================= FILTRO – PARTE GENÉRICA =================

const filtroValor = document.getElementById("filtroValor");
const filtroDisponivel = document.getElementById("filtroDisponivel");
const filtroDesconto = document.getElementById("filtroDesconto"); // NOVO

const botaoFiltro = document.getElementById("aplicarFiltros");
const botaoReset = document.getElementById("resetFiltros");

const toggleFiltros = document.getElementById("toggleFiltros");
const filtrosContainer = document.getElementById("filtrosContainer");

// ================= TOGGLE FILTROS =================

toggleFiltros.addEventListener("click", () => {
  const aberto = filtrosContainer.classList.contains("aberto");

  filtrosContainer.classList.toggle("aberto", !aberto);
  filtrosContainer.classList.toggle("fechado", aberto);

  toggleFiltros.textContent = aberto ? "▾ Exibir filtros" : "▴ Ocultar filtros";
});

function fecharFiltros() {
  filtrosContainer.classList.remove("aberto");
  filtrosContainer.classList.add("fechado");
  toggleFiltros.textContent = "▾ Exibir filtros";
}

// ================= APLICA FILTROS =================

function aplicarFiltrosGenerico() {
  let resultado = [...dadosBase];

  // Disponibilidade
  if (filtroDisponivel.value !== "") {
    const disponivel = filtroDisponivel.value === "true";
    resultado = resultado.filter((item) => item.disponivel === disponivel);
  }

  // 🔥 NOVO FILTRO DE DESCONTO
  if (filtroDesconto.value === "true") {
    resultado = resultado.filter(
      (item) => item.desconto && item.desconto > 0
    );
  }

  // Ordenação por valor
  if (filtroValor.value === "asc") {
    resultado.sort((a, b) => a.valor - b.valor);
  }

  if (filtroValor.value === "desc") {
    resultado.sort((a, b) => b.valor - a.valor);
  }

  renderizar(resultado);
  fecharFiltros();
}

// ================= EVENTOS =================

botaoFiltro.addEventListener("click", aplicarFiltrosGenerico);

botaoReset.addEventListener("click", () => {
  filtroValor.value = "";
  filtroDisponivel.value = "";
  filtroDesconto.value = ""; // NOVO

  renderizar(dadosBase);
  fecharFiltros();
});
