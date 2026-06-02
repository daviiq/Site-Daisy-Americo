document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });
});