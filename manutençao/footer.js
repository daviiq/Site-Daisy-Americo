// footer.js
const footerHTML = `
<footer style="background:#222;color:#fff;padding:2rem;">
  
  <div style="max-width:1100px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;text-align:left;">
    
    <div>
      <h4>Projeto</h4>
      <p>Daisy Américo</p>
      <p>Versão: <strong>v0.0.1.5 (Alpha)</strong></p>
    </div>

    <div>
      <h4>Navegação</h4>
      <p><a href="index.html">Início</a></p>
      <p><a href="noticias.html">Notícias</a></p>
      <p><a href="eventos.html">Eventos</a></p>
      <p><a href="links.html">Contato</a></p>
    </div>

    <div>
      <h4>Contato</h4>
      <p>+55 (48) 98832-0641</p>
      <p>
        <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
      </p>
    </div>

    <div>
      <h4>Créditos</h4>
      <p>
        Criado por:
        <br>
        <a href="https://site-curriculo.pages.dev/" target="_blank">
          Igor Rodrigues da Silva
        </a><br>
        <a href="https://github.com/daviiq" target="_blank">
          Davi Israel Quirino
        </a>
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
document.body.insertAdjacentHTML('beforeend', footerHTML);
