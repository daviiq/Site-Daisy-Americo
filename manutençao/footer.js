// footer.js
const footerHTML = `
<footer style="background:#222;color:#EBFEFF;padding:2rem;">
  
  <!-- Me acompanhe -->
  <div style="
    max-width:1100px;
    margin:0 auto 2rem auto;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:24px;
    font-size:0.9rem;
  ">
    <span>Me acompanhe:</span>
    <a href="https://www.instagram.com/daisyamericooficial/"
       class="link-item"
       style="display:flex;align-items:center;gap:6px;color:#EBFEFF;text-decoration:none;">
      <img src="/assets/icon/insta.png" alt="Instagram" style="height:18px;">
      <span>Instagram</span>
    </a>

    <a href="https://www.instagram.com/galeriadaisyamerico/"
       class="link-item"
       style="display:flex;align-items:center;gap:6px;color:#EBFEFF;text-decoration:none;">
      <img src="/assets/icon/insta.png" alt="Instagram" style="height:18px;">
      <span>Instagram Galeria</span>
    </a>
  </div>

  <div style="max-width:1100px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;text-align:left;">
    
    <div>
      <h4>Site</h4>
      <p>Daisy Américo</p>
      <p>Versão: <strong>v0.0.1.6 (Alpha)</strong></p>
    </div>

    <div>
      <h4>Navegação</h4>
      <p>
        <a href="index.html">Início</a><br>
        <a href="noticias.html">Notícias</a><br>
        <a href="eventos.html">Eventos</a><br>
        <a href="links.html">Contato</a>
      </p>
    </div>

    <div>
      <h4>Contato</h4>
      <p>
        <a href="https://wa.me/554888320641?text=Olá, Daisy" target="_blank">+55 (48) 98832-0641</a><br>
        <a href="mailto:contato@exemplo.com" target="_blank">contato@exemplo.com</a>
      </p>
    </div>

    <div>
      <h4>Créditos</h4>
      <p>
        <a href="https://site-curriculo.pages.dev/" target="_blank">Igor Rodrigues da Silva</a><br>
        <a href="https://github.com/daviiq" target="_blank">Davi Israel Quirino</a>
      </p>
    </div>

  </div>

  <hr style="margin:2rem 0;border:0;border-top:1px solid #444;">

  <p style="text-align:center;font-size:0.85rem;">
    © 2026 Daisy Américo — Todos os direitos reservados.
  </p>

</footer>
`;

// Insere o footer no final da página
document.body.insertAdjacentHTML("beforeend", footerHTML);
